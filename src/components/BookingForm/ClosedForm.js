import React, { Component } from 'react';

import './ClosedForm.css';


class ClosedForm extends Component {

    render () {
        return (
            <div className="ClosedForm"> 
                <div className="container">
                    <div className="jumbotron" id="closedFormJumbo">
                        <h3>ONLINE APPOINTMENTS ARE CURRENTLY CLOSED.</h3>
                        <h3>COME BACK SOON!</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClosedForm;