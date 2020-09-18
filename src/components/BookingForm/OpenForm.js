import React, { Component } from 'react';

import './OpenForm.css';


class OpenForm extends Component {

    render () {
        return (
            <div className="OpenForm"> 
                <div className="jumbotron" id="openFormJumbo">
                    <center><h3>CONTACT INFORMATION AND APPOINTMENT DETAILS</h3></center>
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
                    <p>Make sure your appointment information is correct. Any changes or cancelations will result in a fee.</p>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        );
    }
}

export default OpenForm;