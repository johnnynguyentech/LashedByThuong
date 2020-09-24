import React, { Component } from 'react';
import TitleLabel from '../../components/TitleLabel/TitleLabel';

import './Thanks.css';


class Thanks extends Component {
    render () {
        return (
            <div className="Thanks">
                <TitleLabel>THANK YOU</TitleLabel>
                <h3 className="thankyouNote1">Your apppointment has been received.</h3>
                <h3 className="thankyouNote2">See you soon!</h3>
            </div>
        );
    }
}

export default Thanks;