import React, { Component } from 'react';

import './Home.css';
import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';

class Home extends Component {

    render () {
        return (
            <Aux>
                <div className="Home"> 
                    <h1 id="name">LASHED BY THUONG</h1>
                    <h4 id="bio">PROFESSIONAL LASH EXTENSIONS IN SAN JOSE, CA</h4>
                </div>
                <ReadyBook />
            </Aux>
        );
    }
}

export default Home;