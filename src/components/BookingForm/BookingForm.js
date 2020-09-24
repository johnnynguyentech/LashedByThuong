import React, { Component } from 'react';
import Calander from '../Calander/Calander';
import { connect } from 'react-redux';

import './BookingForm.css';
import * as actionTypes from '../../store/actions';
import { NavLink } from 'react-router-dom';



class OpenForm extends Component {
    state = {
        openAppointments: false
    }

    render () {
        let formHeader = <center><h3>ONLINE APPOINTMENTS ARE CURRENTLY CLOSED</h3></center>
        if (this.state.openAppointments) {
            formHeader = <center><h3>CONTACT INFORMATION AND APPOINTMENT DETAILS</h3></center>;
        }
        return (
            <div className="OpenForm"> 
                {/* MODAL */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Appointment Summary</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p id="clientInfo">Name: </p>
                                <p id="clientInfo">Phone: </p>
                                <p id="clientInfo">Email:</p>
                                <p id="clientInfo">Date(1st Choice):</p>
                                <p id="clientInfo">Date(2nd Choice):</p>
                                <p id="clientInfo">Date(3rd Choice):</p>
                                <p id="clientInfo">Appointment For: </p>
                                <p id="clientInfo">Notes:</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <NavLink to="/thankyou"><button type="button" className="btn btn-primary" id="confirmButton">Confirm Appointment</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div className="jumbotron" id="openFormJumbo">
                    {formHeader}
                    <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Thuong An"></input>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Phone:</label>
                            <input type="tel" class="form-control" id="formGroupExampleInput1" placeholder="408-555-5555"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email:</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Date:</label>
                                <div className="row">
                                    <div className="col-lg-4 col-xs-12">
                                        <p id="choices">1st Choice (Required):</p>
                                        <Calander />  
                                    </div>
                                    <div className="col-lg-4 col-xs-12">
                                        <p id="choices">2nd Choice:</p>
                                        <Calander />
                                    </div>
                                    <div className="col-lg-4 col-xs-12">
                                        <p id="choices">3rd Choice:</p>
                                        <Calander />
                                    </div>
                                </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">I'm Making an Appointment For:</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Full Set: Natural Volume</option>
                                <option>Full Set: Volume</option>
                                <option>Full Set: Mega Volume</option>
                                <option>Fill: Natural Volume</option>
                                <option>Fill: Volume</option>
                                <option>Fill: Mega Volume</option>
                                <option>Removal</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Notes, Comments, and Questions:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="3 week fill, foreign fill, etc..."></textarea>
                        </div>
                    </form>
                    <h5><strong>*PLEASE NOTE*</strong></h5>
                    <ul>
                        <li>The date and time you requested may not be available. We will contact you to confirm your actual appointment details.</li>
                        <li>Make sure your contact information is correct.</li>
                        <li>Same day cancellations or no shows will be charged 50% of the services booked.</li>
                    </ul>
                    <center>
                        <button type="submit" className="btn btn-primary" id="bookingButton" data-toggle="modal" data-target="#exampleModal" disabled={!this.state.openAppointments}>
                            Submit
                        </button>
                    </center>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        time: state.time
    };
}


export default connect(mapStateToProps)(OpenForm);