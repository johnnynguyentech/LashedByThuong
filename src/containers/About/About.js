import React, { Component } from 'react';

import './About.css';
import TitleLabel from '../../components/TitleLabel/TitleLabel';
import about1 from '../../components/Images/about1.jpg';
import about2 from '../../components/Images/about2.jpg';
import ReadyBook from '../../components/ReadyBook/ReadyBook';
import Aux from '../../hoc/Aux/Aux';


class About extends Component {

    render () {
        return (
            <Aux>
                <div className="About"> 
                    <TitleLabel>ABOUT</TitleLabel>
                    <div className="row" id="aboutPartOne">
                        <div className="col-lg-6 col-xs-12">
                            <img src={about1} alt="about1" id="aboutPic1"></img>
                        </div>
                        <div className="col-lg-6 col-xs-12">
                            <h2 className="paragraphTitle">MEET THUONG</h2>
                            <p id="aboutBio">LashedByThuong is born from personal experience. Thuong had long been a client for lash extensions. It took some time for her to realize that, while looking good, the procedure was damaging to natural lashes. In a quest to understand the problem and find a remedy, she became an esthetician and ultimately a lash artist. After years perfecting her skills and acquiring experience, she decided to fully embrace the lash adventure on her own.</p>
                            <br></br>
                            <h2 className="paragraphTitle">OUR PROMISE</h2>
                            <p id="aboutBio">Here at LashedByThuong, we are fully commited to providing the highest quality of service to our clients.</p>
                        </div>
                    </div>
                    <br></br>
                    <div id="aboutBackground">
                        <div className="row" id="aboutPartTwo">
                            <div className="col-lg-6 col-xs-12">
                                <h2 className="paragraphTitle">A PASSION FOR GREATNESS</h2>
                                <p id="aboutBio">LashedByThuong is a place where there is no room for compromise when it comes to quality and standards. Here at LashedByThuong, you are at good hands, as Thuong brings extra quality to the process: enhancing women’s natural beauty is her passion.</p>
                            </div>
                            <div className="col-lg-6 col-xs-12">
                                <img src={about2} alt="" id="aboutPic2"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <ReadyBook />
            </Aux>
            
        );
    }
}

export default About;