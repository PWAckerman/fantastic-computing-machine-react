import React, { Component } from 'react';
import {connect} from 'react-redux';
import { sendText } from '../../actions/userActions.js';


export class TextMessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            from: '',
            message: '',
            filledOut: false
        }
        this.updateFrom = this.updateFrom.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this._isFilledOut = this._isFilledOut.bind(this);
        this._setFilledOut = this._setFilledOut.bind(this);
    }

    _isFilledOut(){
        return ["from","message"]
                .every((key)=> this.state[key].length > 0);
    }

    _setFilledOut(){
        return this._isFilledOut() ?  true  : false;
    }

    updateFrom(evt){
        this.setState({
            from: evt.target.value,
            filledOut: this._setFilledOut()
        });
    }

    updateMessage(evt){
        this.setState({
            message: evt.target.value,
            filledOut: this._setFilledOut()
        })
    }

    submitMessage(){
        console.log(this.state);
        this.props.dispatch(sendText(this.props.dispatch, this.state));
        this.setState({
            from: '',
            message: '',
            filledOut: false
        })
    }

    render(){
        return (
            <div className="form-container">
                <form className="form-container__form">
                <div className="form-container__input-row">
                    <label htmlFor="from">From</label>
                    <input onChange={this.updateFrom} value={this.state.from} name="from" id="from" placeholder="From:"></input>
                </div>
                <div className="form-container__input-row">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={this.updateMessage} value={this.state.message} name="message" id="message" className="form-container__form__text" placeholder="Your Message Here..."></textarea>
                </div>
                    <button disabled={!this.state.filledOut} onClick={this.submitMessage} type="button" className="form-container__button">Send Text</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user.user
    }
}


TextMessageForm.propTypes = {
    textInfo: React.PropTypes.object
}

export default connect(mapStateToProps)(TextMessageForm);
