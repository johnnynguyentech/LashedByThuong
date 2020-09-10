import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Lash.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Pricing from './Pricing/Pricing';
import Book from './Book/Book';
import Appointments from './Appointments/Appointments';


class Lash extends Component {
    render () {
        return (
            <div className="Lash">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route path="/pricing" exact component={Pricing} />
                    <Route path="/book" exact component={Book} />
                    <Route path="/appointments" exact component={Appointments} />
                    <Route render={() => <center><h1>Not Found</h1></center>} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Lash;