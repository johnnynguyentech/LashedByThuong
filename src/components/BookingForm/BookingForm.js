import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './BookingForm.css';
import axios from '../../axios-appt';


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import SignatureCanvas from 'react-signature-canvas';


class OpenForm extends Component {
    state = {
        openAppointments: true,
        name: "",
        phone: "",
        email: "",
        date1: "",
        date2: "",
        date3: "",
        appointmentFor: "",
        notes: "",
        formSigned: false,
        firstname: "",
        lastname: "",
        day1: "Date",
        day2: "Date",
        day3: "Date",
        time1: "",
        time2: "",
        time3: ""
    }

    onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    onDate1ChangeHandler = (event) => {
        const dateTime1 = event.toLocaleString()
        const date1 = dateTime1.split(',').slice(0, 1).join(' ');
        this.setState({
            day1: date1
          });
    }

    onDate2ChangeHandler = (event) => {
        const dateTime2 = event.toLocaleString()
        const date2 = dateTime2.split(',').slice(0, 1).join(' ');
        this.setState({
            day2: date2
          });
    }

    onDate3ChangeHandler = (event) => {
        const dateTime3 = event.toLocaleString()
        const date3 = dateTime3.split(',').slice(0, 1).join(' ');
        this.setState({
            day3: date3
          });
    }

    onSubmitHandler = () => {
        //Combine date and time and name
        this.setState({
            name: this.state.firstname + " " + this.state.lastname,
            date1: this.state.day1 + ", " + this.state.time1,
            date2: this.state.day2 + ", " + this.state.time2,
            date3: this.state.day3 + ", " + this.state.time3
          });
        //If no choice for date 1
        if (this.state.day1.charAt(0) === "D") {
            this.setState({
                date1: "None"
              });
        }
        //If no choice for date 2
        if (this.state.day2.charAt(0) === "D") {
            this.setState({
                date2: "None"
              });
        }
        //If no choice for date 3
        if (this.state.day3.charAt(0) === "D") {
            this.setState({
                date3: "None"
              });
        }
        // Make sure form is filled out
        if ((this.state.firstname === "") || 
            (this.state.phone === "") ||
            (this.state.day1 === "Date") ||
            (this.state.time1 === "") ||
            (this.state.appointmentFor === "")) {
                alert("Please make sure all required inputs are filled out!");
        }
    }
    onCheckChangeHandler = () => {
        console.log("test");
        if(this.state.formSigned){
            this.setState({formSigned: false});
        }
        else{
            this.setState({formSigned: true});
        }
    }

    confirmAppointmentHandler = () => {
        // Add to firebase through axios
        var fullDate = Date();
        var date = fullDate.split(' ').slice(0, 5).join(' ');
        let signature = "No";
        if (this.state.formSigned) {
            signature = "Yes";
        }
        const appointmentInfo = {
            time: date,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            date1: this.state.date1,
            date2: this.state.date2,
            date3: this.state.date3,
            appointmentFor: this.state.appointmentFor,
            notes: this.state.notes,
            formSigned: signature
        }
        axios.post('/appointments.json', appointmentInfo);
        // Redirect to thank you
        this.props.history.push("/thankyou");
    }

    componentDidMount () {
        // Grab open data from firebase
        // If true set open appointments to true, visa versa
        axios.get('/open.json').then(response => {
            const openOrNot = response.data;
            this.setState({openAppointments: openOrNot})
        })
    }



    render () {
        const todayTemp = new Date().toLocaleString()
        const today = todayTemp.split(",").slice(0, 1).join(' ');
        let formHeader = <center><h3>ONLINE APPOINTMENTS ARE CURRENTLY CLOSED</h3></center>;
        if (this.state.openAppointments) {
            formHeader = <center><h3>CONTACT INFORMATION AND APPOINTMENT DETAILS</h3></center>;
        }
        return (
            <div className="OpenForm">
                {/* SIGN FORM MODAL */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Intake Form</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="signForm">
                                    <p>By signing and checking below I confirm to the following statements:</p>
                                    <ul>
                                        <li>Thuong is not liable.</li>
                                        <li>I do not have covid 19</li>
                                        <li>I do not</li>
                                        <li>Blah blah blah</li>
                                    </ul>
                                    <div id="signer">
                                        <SignatureCanvas onClick={this.signHandler} canvasProps={{width: 450, height: 200, className: 'sigCanvas'}} />
                                        <hr id="sigLine"></hr>
                                    </div>
                                    <input type="checkbox" id="signCheck" name="signCheck" checked={this.state.formSigned} onChange={() => this.onCheckChangeHandler()}></input>
                                    <label for="signCheck" className="signerCheck">I, {this.state.name}, confirm to the following statements on {today}.</label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" id="confirmButton" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalLong" disabled={!this.state.formSigned}>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SUMMARY MODAL */}
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" aria-labelledby="exampleModalLabelLongTitle" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabelLongTitle">Appointment Summary</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <center><p>Does your information look correct?</p></center>
                                <p id="clientInfo">Name: </p>
                                <p>{this.state.name}</p>
                                <p id="clientInfo">Phone: </p>
                                <p>{this.state.phone}</p>
                                <p id="clientInfo">Email:</p>
                                <p>{this.state.email}</p>
                                <p id="clientInfo">Date(1st Choice):</p>
                                <p>{this.state.date1}</p>
                                <p id="clientInfo">Date(2nd Choice):</p>
                                <p>{this.state.date2}</p>
                                <p id="clientInfo">Date(3rd Choice):</p>
                                <p>{this.state.date3}</p>
                                <p id="clientInfo">Appointment For: </p>
                                <p>{this.state.appointmentFor}</p>
                                <p id="clientInfo">Notes:</p>
                                <p>{this.state.notes}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal">Go Back</button>
                                <button type="button" className="btn btn-primary" id="confirmButton" data-dismiss="modal" onClick={this.confirmAppointmentHandler}>Confirm Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div className="jumbotron" id="openFormJumbo">
                    {formHeader}
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">First Name:</label>
                            <input 
                                onChange={(event) => this.onChangeHandler(event)}
                                name="firstname"
                                value={this.state.firstname} 
                                type="text" 
                                className="form-control" 
                                id="formGroupExampleInput7" 
                                placeholder="Thuong">
                             </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Last Name:</label>
                            <input 
                                onChange={(event) => this.onChangeHandler(event)}
                                name="lastname"
                                value={this.state.lastname} 
                                type="text" 
                                className="form-control" 
                                id="formGroupExampleInput8" 
                                placeholder="An">
                             </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Phone:</label>
                            <input 
                                onChange={(event) => this.onChangeHandler(event)} 
                                name="phone"
                                value={this.state.phone} 
                                type="tel" 
                                className="form-control" 
                                id="formGroupExampleInput9" 
                                placeholder="408-555-5555">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email:</label>
                            <input 
                                onChange={(event) => this.onChangeHandler(event)} 
                                name="email"
                                value={this.state.email} 
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Date:</label>
                                <div className="row">
                                    <div className="col-lg-4 col-xs-12">
                                        <p id="choices">1st Choice (Required):</p>
                                        <DatePicker
                                            value={this.state.day1}
                                            onChange={date => this.onDate1ChangeHandler(date)}
                                            minDate={new Date()}
                                            className="form-control"
                                            id= "date1"
                                        />
                                        <select onChange={(event) => this.onChangeHandler(event)} name="time1" value={this.state.time1} className="form-control" id="exampleFormControlSelect1">
                                            <option value="" disabled defaultValue>Time</option>
                                            <option>8:00am-11:00am</option>
                                            <option>11:00am-2:00pm</option>
                                            <option>2:00pm-5:00pm</option>
                                        </select>    
                                    </div>
                                    <div className="col-lg-4 col-xs-12">
                                        <p id="choices">2nd Choice:</p>
                                        <DatePicker
                                            value={this.state.day2}
                                            onChange={date => this.onDate2ChangeHandler(date)}
                                            minDate={new Date()}
                                            className="form-control"
                                        />
                                        <select onChange={(event) => this.onChangeHandler(event)} name="time2" value={this.state.time2} className="form-control" id="exampleFormControlSelect4">
                                            <option value="" disabled defaultValue>Time</option>
                                            <option>8:00am-11:00am</option>
                                            <option>11:00am-2:00pm</option>
                                            <option>2:00pm-5:00pm</option>
                                        </select> 
                                    </div>
                                    <div className="col-lg-4 col-xs-12">
                                        <p id="choices">3rd Choice:</p>
                                        <DatePicker
                                            value={this.state.day3}
                                            onChange={date => this.onDate3ChangeHandler(date)}
                                            minDate={new Date()}
                                            className="form-control"
                                        />
                                        <select onChange={(event) => this.onChangeHandler(event)} name="time3" value={this.state.time3} className="form-control" id="exampleFormControlSelect5">
                                            <option value="" disabled defaultValue>Time</option>
                                            <option>8:00am-11:00am</option>
                                            <option>11:00am-2:00pm</option>
                                            <option>2:00pm-5:00pm</option>
                                        </select> 
                                    </div>
                                </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">I'm Making an Appointment For:</label>
                            <select onChange={(event) => this.onChangeHandler(event)} name="appointmentFor" value={this.state.appointmentFor} className="form-control" id="exampleFormControlSelect6">
                                <option value="" disabled defaultValue>Select your option</option>
                                <option>Full Set: Natural Volume</option>
                                <option>Full Set: Volume</option>
                                <option>Full Set: Mega Volume</option>
                                <option>Fill: Natural Volume</option>
                                <option>Fill: Volume</option>
                                <option>Fill: Mega Volume</option>
                                <option>Removal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Notes, Comments, and Questions:</label>
                            <textarea 
                                onChange={(event) => this.onChangeHandler(event)} 
                                name="notes"
                                value={this.state.notes} 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                placeholder="3 week fill, foreign fill, etc...">
                            </textarea>
                        </div>
                    </form>
                    <h5><strong>*PLEASE NOTE*</strong></h5>
                    <ul>
                        <li>The date and time you requested may not be available. We will contact you to confirm your actual appointment details.</li>
                        <li>Make sure your contact information is correct.</li>
                        <li>Same day cancellations or no shows will be charged 50% of the services booked.</li>
                    </ul>
                    <center>
                        <button type="submit" className="btn btn-primary" id="bookingButton" data-toggle="modal" data-target="#exampleModal" disabled={!this.state.openAppointments} onClick={this.onSubmitHandler}>
                            Submit
                        </button>
                    </center>
                    
                </div>
            </div>
        );
    }
}


export default (withRouter(OpenForm));