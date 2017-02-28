import React, { Component } from 'react';
import {connect} from 'react-redux';


export class TextMessageForm extends Component {
    render(){
        return (
            <div>
                <form>
                    <textarea></textarea>
                </form>
                <button>Send Text</button>
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
