import React, { Component } from 'react';

import './Portfolio.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';
import SlideShow from '../../components/SlideShow/SlideShow';

class Portfolio extends Component {

    render () {
        return (
            <Aux>
                <div className="Porfolio"> 
                    <TitleLabel>PORTFOLIO</TitleLabel>
                    <div id="portfolioBackground">
                        <SlideShow />
                        <p id="IGLink">View more <a href="https://www.instagram.com/lashedbythuong/?hl=en" target="_blank" rel="noopener noreferrer">@lashedbythuong</a>!</p>
                    </div>
                </div>
                <ReadyBook />
            </Aux>
            
        );
    }
}

export default Portfolio;