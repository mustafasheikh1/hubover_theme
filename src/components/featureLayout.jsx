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
							<h1 className="display-5 font-weight-bold pl-lg-5">Full Stack Development</h1>
							<p className="lead pl-lg-5 tick-text" >
								Make web applications upto your and market standards.
							</p>
							<p className="pl-lg-5 ticked">
								As soon as you make a deal with us, you will see your vision changing from just concept to reality. All steps will be defiend and upto your needs. Our Dev team will condunct interviews with you in order to understand your needs upto the optimal level. 
							</p>
							<div className="row ml-lg-5 mt-lg-1">
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">Server Side Development</div>
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">Reponsive UI/UX</div>
							</div>
							<div className="row ml-lg-5 mt-lg-1">
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">Local and Cloud Database</div>
								<div className="col-lg-6 col-sm-12 tick pl-4 mt-sm-2">Client Side Development</div>
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