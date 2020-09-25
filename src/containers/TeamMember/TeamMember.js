import React, { Component } from 'react';
import TitleLabel from '../../components/TitleLabel/TitleLabel';

import './TeamMember.css';


class TeamMember extends Component {

    render () {
        return (
            <div className="TeamMember"> 
                <TitleLabel>TEAM MEMBER</TitleLabel>
                <h3 id="greeting">Welcome Team Member!</h3>
                <center>
                    <h4 id="team"></h4>
                    <div className="container">
                        <table className="table" id="order_table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Booked Date</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date 1</th>
                                    <th scope="col">Date 2</th>
                                    <th scope="col">Date 3</th>
                                    <th scope="col">Appointment For</th>
                                    <th scope="col">Notes</th>
                                </tr>
                            </thead>
                            <tbody id="table_body">
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
        );
    }
}

export default TeamMember;