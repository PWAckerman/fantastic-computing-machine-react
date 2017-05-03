import React, { Component } from 'react';
import {connect} from 'react-redux';
import { sendEmail } from '../../actions/userActions.js';

export class EmailForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            from: '',
            subject: '',
            message: '',
            valid: false,
            filledOut: false
        }
        this.updateFrom = this.updateFrom.bind(this);
        this.updateSubject = this.updateSubject.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
        this._validateEmail = this._validateEmail.bind(this);
        this._isFilledOut = this._isFilledOut.bind(this);
        this._setFilledOut = this._setFilledOut.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    _validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    _isFilledOut(){
        return ["from","subject","message"]
                .every((key)=> this.state[key].length > 0);
    }

    _setFilledOut(){
        return this._isFilledOut() ?  true  : false;
    }

    updateFrom(evt){
        if(this._validateEmail(evt.target.value)){
            this.setState({
                from: evt.target.value,
                filledOut: this._setFilledOut(),
                valid: true
            });
        } else {
            this.setState({
                from: evt.target.value,
                filledOut: this._setFilledOut(),
                valid: false
            });
        }
    }

    updateSubject(evt){
        this.setState({
            subject: evt.target.value,
            filledOut: this._setFilledOut()
        });
        this._setFilledOut();
    }

    updateMessage(evt){
        this.setState({
            message: evt.target.value,
            filledOut: this._setFilledOut()
        });
    }

    submitMessage(){
        console.log(this.state);
        this.props.dispatch(sendEmail(this.props.dispatch, this.state));
        this.setState({
            message: "",
            from: "",
            subject: "",
            filledOut: false,
            valid: false
        })
    }

    render(){
        console.log(this.state);
        return (
            <div className="form-container">
                <form className="form-container__form">
                    <div className="form-container__input-row">
                        <label htmlFor="from">From</label>
                        <input value={this.state.from} onChange={this.updateFrom} name="from" id="from" placeholder="From:"></input>
                    </div>
                    <div className="form-container__input-row">
                        <label htmlFor="subject">Subject</label>
                        <input value={this.state.subject} onChange={this.updateSubject} name="subject" id="subject" placeholder="Subject:"></input>
                    </div>
                    <div className="form-container__input-row">
                        <label htmlFor="message">Message</label>
                        <textarea value={this.state.message} onChange={this.updateMessage} name="message" id="message" className="form-container__form__text" placeholder="Your Message Here..."></textarea>
                    </div>
                    <button disabled={!(this.state.valid && this.state.filledOut)} onClick={this.submitMessage} type="button" className="form-container__button">Send Email</button>
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

EmailForm.propTypes = {
    emailInfo: React.PropTypes.object
}

export default connect(mapStateToProps)(EmailForm);
