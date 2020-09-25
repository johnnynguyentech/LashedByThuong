import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import './Footer.css';


class Footer extends Component {
    state={
        username: 'thuong',
        password: 'jjhamchoi',
        attemptUsername: '',
        attemptPassword: ''
    }

    onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    logInHandler = () => {
        if ((this.state.username === this.state.attemptUsername) && (this.state.password === this.state.attemptPassword)){
            this.props.history.push("/team");
        }
    }

    render () {
        return (
            <div className="Footer"> 
                {/* MODAL */}
                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Team Member Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label for="formGroupExampleInput">Username:</label>
                                        <input 
                                            onChange={(event) => this.onChangeHandler(event)}
                                            name="attemptUsername"
                                            value={this.state.attemptUsername} 
                                            type="text" 
                                            className="form-control" 
                                            id="formGroupExampleInput" 
                                            placeholder="Username">
                                        </input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password:</label>
                                        <input 
                                            onChange={(event) => this.onChangeHandler(event)}
                                            name="attemptPassword"
                                            value={this.state.attemptPassword} 
                                            type="password" 
                                            class="form-control" 
                                            id="exampleInputPassword1" 
                                            placeholder="Password">
                                        </input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" id="confirmButton" data-dismiss="modal" onClick={this.logInHandler}>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* FOOTER */}
                <h1 id="brand">LASHED.BY.THUONG</h1>
                <h6>Contact Information:</h6>
                <center>
                <div className="row" id="icons">
                    <div className="col-4">
                        <i className="fas fa-phone-square fa-5x"></i>
                        <p id="contactinfo">1(408)568-7616</p>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-envelope-square fa-5x"></i>
                        <p id="contactinfo"><a id="link" href="mailto:lashedbythuong@gmail.com">Email</a></p>
                    </div>
                    <div className="col-4">
                        <i className="fab fa-instagram-square fa-5x"></i>
                        <p id="contactinfo"><a id="link" href="https://www.instagram.com/lashedbythuong/?hl=en" target="_blank" rel="noopener noreferrer">@lashedbythuong</a></p>
                    </div>
                </div>
                <button type="button" className="btn btn-light btn-sm" id="teamButton" data-toggle="modal" data-target="#exampleModal2" >Team Member Login</button>
                <p id="copyright">© Copyright 2020 LashedByThuong | All Rights Reserved.</p>
                </center>
            </div>
        );
    }
}

export default (withRouter(Footer));