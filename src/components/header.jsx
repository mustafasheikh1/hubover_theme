import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <div className="mb-5">
        <nav className="navbar navbar-default navbar-expand-lg fixed-top py-0">
          <div className="container">
            <a href="." className="navbar-brand mb-0 pb-0 mr-0 logo">
              <img
                src={require("../assets/images/Hubover_logo.png")}
                className="logo"
                alt="logo"
              />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <img src={require("../assets/images/menu.png")} alt="bar icon" />
              </span>
            </button>
            <div className="collapse navbar-collapse mb-0 pb-0" id="navbarSupportedContent" >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {(this.props.type === "multiPage")? <Link to="/" className="nav-link link p-3">HOME</Link>: <a href="#home" className="nav-link link p-3">HOME</a>}
                </li>
                <li className="nav-item">
                  {(this.props.type === "multiPage")? <Link to="/Features/" className="nav-link link p-3">FEATURES</Link>: <a href="#features" className="nav-link link p-3">FEATURES</a>}
                </li>
                <li className="nav-item">
                  {(this.props.type === "multiPage")? <Link to="/Partners/" className="nav-link link p-3">PARTNERS</Link>: <a href="#partners" className="nav-link link p-3">PARTNERS</a>}
                </li>
                <li className="nav-item">
                  {(this.props.type === "multiPage")? <Link to="/Contact/" className="nav-link link p-3">CONTACT</Link>: <a href="#contact" className="nav-link link p-3">CONTACT</a>}
                </li>
                <li className="nav-item">
                  <button className="btn btn-dark mt-2 ml-2" onClick={this.props.change}>{(this.props.type === "multiPage")? 'Multi Page': 'Single Page'}</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
