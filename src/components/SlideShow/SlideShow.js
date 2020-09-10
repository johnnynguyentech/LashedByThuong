import React from 'react';

import './SlideShow.css';
import Aux from '../../hoc/Aux/Aux';
import portfolio1 from '../Images/portfolio1.jpg';
import portfolio2 from '../Images/portfolio2.jpg';
import portfolio3 from '../Images/portfolio3.jpg';
import portfolio4 from '../Images/portfolio4.jpg';
import portfolio5 from '../Images/portfolio5.jpg';
import portfolio6 from '../Images/portfolio6.jpg';


const SlideShow = () => {
    return (
        <Aux>
            <div className="SlideShow">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={portfolio1} className="d-block w-100" alt="..." id="portfolioPic"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={portfolio2} className="d-block w-100" alt="..." id="portfolioPic"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={portfolio3} className="d-block w-100" alt="..." id="portfolioPic"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={portfolio4} className="d-block w-100" alt="..." id="portfolioPic"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={portfolio5} className="d-block w-100" alt="..." id="portfolioPic"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={portfolio6} className="d-block w-100" alt="..." id="portfolioPic"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </Aux>
       
    )
  }

export default SlideShow;