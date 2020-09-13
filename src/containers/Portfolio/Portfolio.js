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
                    <h2 id="portfolioHeading">OUR GALLERY</h2>
                    <p id="portfolioBio">Here at LashedByThuong, we give you time to feel beautiful with our quality lash services. Check out our porfolio below, showcasing a variety of sets from some of our beautiful clients we've had the pleasure of serving.</p>
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