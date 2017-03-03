import React, { Component } from 'react';
import EntryList from './EntryList';
import HeaderSpacer from '../shared/HeaderSpacer';
import { connect } from 'react-redux';
import { loadEntries } from '../../actions/entryActions';
import { increaseRange } from '../../actions/rangeActions';
import { rangeSelector, tagSelector } from '../../selectors/tagSelector';
import { resolve } from 'react-redux-resolve';

export class MicroBlog extends Component {
    constructor(props, context){
        super(props, context);
        this.increaseRange = this.increaseRange.bind(this);
        this.flag = true;
    }

    componentWillMount(){
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    increaseRange(){
        this.props.dispatch(increaseRange());
        window.scrollTo(0,document.body.scrollHeight);
    }

    handleScroll() {
          const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
          const body = document.body;
          const html = document.documentElement;
          const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
          const windowBottom = windowHeight + window.pageYOffset;
          if (windowBottom >= docHeight) {
              if(this.flag){
                  this.increaseRange();
                  this.flag = false;
              }  else {
                  setTimeout(()=> this.flag = true, 1000);
              }
          } else {
              console.log("not bottom");
          }
    }

    render(){
         return <div>
            <HeaderSpacer />
            <h1>MicroBlog</h1>
            <EntryList range={this.props.range} callback={ this.increaseRange } entryList={rangeSelector(this.props.entries.sort((a,b)=> new Date(b.date) - new Date(a.date)), this.props.range)} avatar={this.props.user.avatar}/>
         </div>
    }
}

MicroBlog.propTypes = {
    entryList: React.PropTypes.array,
    user: React.PropTypes.object,
    range: React.PropTypes.number
}

function mapStateToProps(state){
    return {
        entries: state.entries,
        user: state.user.user,
        range: state.range.range
    }
}

export default connect(mapStateToProps)(MicroBlog);
