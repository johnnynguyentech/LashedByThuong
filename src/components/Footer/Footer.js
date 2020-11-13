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
                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <label htmlFor="formGroupExampleInput">Username:</label>
                                        <input 
                                            onChange={(event) => this.onChangeHandler(event)}
                                            name="attemptUsername"
                                            value={this.state.attemptUsername} 
                                            type="text" 
                                            className="form-control" 
                                            id="formGroupExampleInput2" 
                                            placeholder="Username">
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password:</label>
                                        <input 
                                            onChange={(event) => this.onChangeHandler(event)}
                                            name="attemptPassword"
                                            value={this.state.attemptPassword} 
                                            type="password" 
                                            className="form-control" 
                                            id="exampleInputPassword1" 
                                            placeholder="Password">
                                        </input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" id="confirmButton" data-dismiss="modal" onClick={this.logInHandler}>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* FOOTER */}
                <center>
                <div className="row" id="icons">
                    <div className="col-lg-4 col-xs-12">
                        <h4 id="footerTitle">Contact Info</h4>
                        <p>1(408)568-7616</p>
                        <p><a id="link" href="mailto:lashedbythuong@gmail.com">lashedbythuong@gmail.com</a></p>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <h4 id="footerTitle">Team Member Login</h4>
                        <button type="button" className="btn btn-light btn-sm" id="teamButton" data-toggle="modal" data-target="#exampleModal2">Click here to login</button>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <h4 id="footerTitle">View More</h4>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram  fa-5x" id="ig"></i>
                        </a>
                        <p id="contactinfo"><a id="link" href="https://www.instagram.com/lashedbythuong/?hl=en" target="_blank" rel="noopener noreferrer">@lashedbythuong</a></p>
                    </div>
                </div>
                <p id="copyright">© Copyright 2020 LashedByThuong | All Rights Reserved.</p>
                </center>
            </div>
        );
    }
}

export default (withRouter(Footer));