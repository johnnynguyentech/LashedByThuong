import React, { Component } from 'react';

import './Book.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
import ClosedForm from '../../components/BookingForm/ClosedForm';
// import OpenForm from '../../components/BookingForm/OpenForm';


class Book extends Component {

    render () {
        return (
            <div className="Book"> 
                <TitleLabel>BOOK NOW</TitleLabel>
                <div id="bookingBackground">
                    <ClosedForm />
                    {/* <OpenForm /> */}
                </div>
                <br></br>
            </div>
        );
    }
}

export default Book;