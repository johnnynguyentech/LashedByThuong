import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './ReadyBook.css';


class ReadyBook extends Component {
    render () {
        return (
            <div className="ReadyBook"> 
                <h3 id="readytitle">Ready to book your appointment?</h3>
                <p id="paragraph">Here at LashedByThuong, we are commited to providing high-end and profressional lash extension services, guarenteeing the best results.</p>
                <NavLink to='/book'><button type="button" className="btn" id="bookNowBtn">BOOK YOUR APPOINTMENT ONLINE</button></NavLink>
            </div>
        );
    }
}

export default ReadyBook;