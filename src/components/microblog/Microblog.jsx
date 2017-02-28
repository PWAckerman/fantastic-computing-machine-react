import React, { Component } from 'react';
import EntryList from './EntryList';
import { connect } from 'react-redux';
import { loadEntries } from '../../actions/entryActions';
import { rangeSelector, tagSelector } from '../../selectors/tagSelector';

export class MicroBlog extends Component {
    constructor(props, context){
        super(props, context);
    }

    componentWillMount(){
        this.props.dispatch(loadEntries());
    }

    render(){
         return <div>
            MicroBlog
            <EntryList entryList={rangeSelector(tagSelector(this.props.entries))} avatar={this.props.user.avatar}/>
         </div>
    }
}

MicroBlog.propTypes = {
    entryList: React.PropTypes.array,
    user: React.PropTypes.object
}

function mapStateToProps(state){
    return {
        entries: state.entries,
        user: state.user.user,
        // range: state.user
    }
}

export default connect(mapStateToProps)(MicroBlog);
