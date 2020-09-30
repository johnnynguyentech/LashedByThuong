import React, { Component } from 'react';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
import axios from '../../axios-appt';
import Aux from '../../hoc/Aux/Aux';

import './TeamMember.css';


class TeamMember extends Component {
    state = {
        appts: [],
        open: true
    }

    onChangeHandler = () => {
        if(this.state.open){
            this.setState({open: false});
        }
        else{
            this.setState({open: true});
        }
        //update firebase open data
        let open = null;
        if (this.state.open){
            open = 'false';
        }
        else{
            open = 'true'
        }
        axios.put('/open.json', open);
    }
    
    componentDidMount() {
        // Add appointments to table
        axios.get('/appointments.json').then(response => {
            const results = [];
            for (let key in response.data) {
                results.unshift({
                    ...response.data[key],
                    id: key
                })
            }
            this.setState({appts: results})
        })
        //Grab open/close from firebase
        // Set open to what it is on firebase
        axios.get('/open.json').then(response => {
            const openOrNot = response.data;
            this.setState({open: openOrNot})
            
        })
    }

    render () {
        let tableInfo = (
                <Aux>
                    {this.state.appts.map((appts, index) => {
                        return (
                            <tr key={appts + index}>
                                <td>{appts.time}</td>
                                <td>{appts.name}</td>
                                <td>{appts.phone}</td>
                                <td>{appts.email}</td>
                                <td>{appts.date1}</td>
                                <td>{appts.date2}</td>
                                <td>{appts.date3}</td>
                                <td>{appts.appointmentFor}</td>
                                <td>{appts.notes}</td>
                                <td>{appts.formSigned}</td>
                            </tr>
                        );
                    })}
                </Aux>
            );
        let formOpen = <h6>Booking form is OPEN</h6>;
        if (!this.state.open) {
            formOpen = <h6>Booking form is CLOSED</h6>;
        }
        return (
            <div className="TeamMember"> 
                <TitleLabel>TEAM MEMBER</TitleLabel>
                <h3 id="greeting">Welcome Team Member!</h3>
                <center>
                    <h5>TURN ON/OFF BOOKING FORM</h5>
                    <label className="switch">
                        <input type="checkbox" checked={this.state.open} onChange={() => this.onChangeHandler()}></input>
                        <span className="slider round"></span>
                    </label>
                    {formOpen}
                    <div className="apptTable">
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
                                    <th scope="col">Form Signed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableInfo}
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
        );
    }
}

export default TeamMember;