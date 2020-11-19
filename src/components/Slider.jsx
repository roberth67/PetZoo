import React from 'react';
import slider1 from './../assets/img/Slider/slider1.jpg';
import slider2 from './../assets/img/Slider/slider2.jpg';
import slider3 from './../assets/img/Slider/slider3.jpg';

const Slider = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-sm-2 col-0">

                </div>
                <div className="col-sm-8 col-12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="img-fluid w-100" src={slider1} alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>PET 1</h5>
                        <p>Lorem ipsum</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={slider2} alt="Second slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>PET 2</h5>
                        <p>Lorem ipsum</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={slider3} alt="Third slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>PET 3</h5>
                        <p>Lorem ipsum</p>
                    </div>
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
                <div className=" col-sm-2 col-0">
                    
                </div>
            </div>
        </div>
     );
}
 
export default Slider;