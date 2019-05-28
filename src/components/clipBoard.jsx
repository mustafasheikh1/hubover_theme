import React, { Component } from "react";

class ClipBoard extends Component {
  state = {};
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="clip">
              <img className="center-block" width="60px" height="90px" src={require("../assets/images/Firebase.png")} alt="firebase" />
              <div className="card-body text-center">
                <h4>FIRBASE</h4>
                <p className="clip-text">
                  With firebase embeded in your site you will have free features
                  such as Login authentication from googles database.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="clip">
              <img className="center-block" width="80px" height="90px" src={require('../assets/images/Angular.png')} alt="angular" />
              <div className="card-body text-center">
                <h4>ANGULAR 2+</h4>
                <p className="clip-text">
                  With our best developers, your website will be transfered to
                  end user in milliseconds.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="clip">
              <img className="center-block" width="90px" height="90px" src={require('../assets/images/react.png')} alt="react"/>
              <div className="card-body text-center">
                <h4>REACT</h4>
                <p className="clip-text">
                  We can make any complex website or app with React JS
                  framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClipBoard;
