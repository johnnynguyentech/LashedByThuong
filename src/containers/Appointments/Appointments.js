import React, { Component } from 'react';
import TitleLabel from '../../components/TitleLabel/TitleLabel';

import './Appointments.css';


class Appointments extends Component {

    render () {
        return (
            <div className="Appointments"> 
                <TitleLabel>APPOINTMENT LIST</TitleLabel>
                <h3 id="greeting">Welcome Team Member!</h3>
            </div>
        );
    }
}

export default Appointments;