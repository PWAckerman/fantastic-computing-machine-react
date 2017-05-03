import React, {Component} from 'react';
import {connect} from 'react-redux';
import PageLink from '../PageLink';
import HeaderSpacer from '../shared/HeaderSpacer';
import './Contact.scss';

export class Contact extends Component {

    render() {
        let pathName = this.props.location.pathname;
        let classMap = {
            link1: pathName === '/contact/email'
                ? 'link-active'
                : 'link-inactive',
            link2: pathName === '/contact/text'
                ? 'link-active'
                : 'link-inactive'
        }
        return <div className="container">
            <HeaderSpacer/>
            <div className="contacts-container">
                <h1 className="contacts-container__header">
                    <span className="contacts-container__header__text">Contact</span>
                </h1>
                <div className="contacts-container__flex">
                    <div className={["contacts-container__link1", classMap.link1].join(" ")}><PageLink linkPath="/contact/email" linkName="Email"/></div>
                    <div className={["contacts-container__link2", classMap.link2].join(" ")}><PageLink linkPath="/contact/text" linkName="Text"/></div>
                </div>
                <div >{this.props.children}</div>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {user: state.user.user}
}

export default connect(mapStateToProps)(Contact);
