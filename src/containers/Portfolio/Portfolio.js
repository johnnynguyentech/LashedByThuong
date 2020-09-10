import React, { Component } from 'react';

import TitleLabel from '../../components/TitleLabel/TitleLabel';
import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';

class Portfolio extends Component {

    render () {
        return (
            <Aux>
                <div className="Porfolio"> 
                    <TitleLabel>PORTFOLIO</TitleLabel>
                    <center>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                        <p>TEST CONTENT</p>
                    </center>
                    
                </div>
                <ReadyBook />
            </Aux>
            
        );
    }
}

export default Portfolio;