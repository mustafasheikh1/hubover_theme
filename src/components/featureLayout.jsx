import React, { Component } from 'react';

class FeatureLayout extends Component {
	state = {  }
	render() { 
		return ( 
			<div className="jumbotron feature-background">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-12">
							<img className="img-responsive" src={require('../assets/images/server1.png')} alt="server"/>
						</div>
						<div className="col-lg-8 pl-lg-5 col-sm-12">
							<h1 className="display-5 font-weight-bold pl-lg-5">Features Layout</h1>
							<p className="lead pl-lg-5 tick-text" >
								A left aligned image and content with tick
							</p>
							<p className="pl-lg-5 ticked">
								As soon as you make a successful payment via PayPal or Google Checkout, 
								your web hosting and domain names will be activated immediately. No waiting 
								time whatsoever. Our network runs the latest stable and secure versions of 
								PHP & MySQL. 
							</p>
							<div className="row ml-lg-5 mt-lg-1">
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">Dedicated Servers</div>
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">cPanel Access</div>
							</div>
							<div className="row ml-lg-5 mt-lg-1">
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">MySQL Databases</div>
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">Super Bandwidth</div>
							</div>
							<div className="row ml-lg-5 mt-lg-1">
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">Web Builder</div>
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">Web Secutity</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default FeatureLayout;