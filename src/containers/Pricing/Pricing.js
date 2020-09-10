import React, { Component } from 'react';

import './Pricing.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
import pricing1 from '../../components/Images/pricing1.jpg';
import pricing2 from '../../components/Images/pricing2.jpg';
import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';


class Pricing extends Component {

    render () {
        return (
            <Aux>
                <div className="Pricing"> 
                    <TitleLabel>PRICING</TitleLabel>
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <img src={pricing1} alt="pricing1" id="pricePic"></img>
                            <br></br>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <img src={pricing2} alt="pricing2" id="pricePic"></img>
                            <br></br>
                        </div>
                    </div>
                </div>
                <ReadyBook/>
            </Aux>
            
        );
    }
}

export default Pricing;