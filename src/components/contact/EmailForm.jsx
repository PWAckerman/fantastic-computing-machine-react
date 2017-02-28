import React, { Component } from 'react';
import {connect} from 'react-redux';


export class EmailForm extends Component {
    render(){
        return (
            <div>
                <form>
                    <textarea></textarea>
                </form>
                <button>Send Email</button>
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
