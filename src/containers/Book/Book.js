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
                <h3 id="readytitle">Ready to book your appointment?</h3>
                <p id="paragraph">Here at LashedByThuong, we are commited to providing high-end and profressional lash extension services, guarenteeing the best results.</p>
                <ClosedForm />
                {/* <OpenForm /> */}
            </div>
        );
    }
}

export default Book;