import React, { Component } from "react";

class Slider extends Component {
  state = {};
  render() {
    return (
      <div className="background jumbotron mb-5 mt-5 text-color" id="home">
        <div className="container h-100">
          <div id="carouselExampleIndicators" className="carousel slide h-100" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active w-100 mt-5">
                <img src={require('../assets/images/Hubover.png')} alt="slider-img-1" className="huboverImg"/>
              </div>
              <div className="carousel-item w-100">
                <h3 className="display-5 col-12 font-weight-bold view-3-text">
                  WEB DEVELOPMENT
                </h3>
                <img src={require('../assets/images/hexagon.png')} alt="slider-img-1" className="web-img" />
              </div>
            </div>
            <a className="carousel-control-prev d-none d-lg-block left" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="d-none d-lg-block carousel-control-next right" href="#carouselExampleIndicators" role="button" data-slide="next" >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
