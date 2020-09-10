import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Footer.css';


class Footer extends Component {
    state = {
        loggedOn: false
    }

    teamLoginHandler = () => {
        const login = prompt("Please enter the authentication code: ");
            // If password = jjhamchoi, load the appointment page by setting loggedOn to true
            if (login === 'jjhamchoi') {
                this.setState({loggedOn: true});
            }
    }

    render () {
        let redirect = null;
        if (this.state.loggedOn) {
            redirect = <Redirect to="/appointments" />;
        }
        return (
            <div className="Footer"> 
                {redirect}
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
                <button onClick={this.teamLoginHandler} type="button" className="btn btn-light btn-sm" id="teamButton">Team Member Login</button>
                <p id="copyright">© Copyright 2020 LashedByThuong | All Rights Reserved.</p>
                </center>
            </div>
        );
    }
}

export default Footer;