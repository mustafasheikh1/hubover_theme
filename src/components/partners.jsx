import React, { Component } from 'react';

class Partners extends Component {
	state = {}
	render() {
		return (
			<div className="container" id="partners">
				<div className="row w-110 pl-4">
					<h1 className="display-5 font-weight-bold w-100 text-center mt-5">Testimonials</h1>
					<p className="lead text-center w-100">Kind words from our valuable customers</p>
					<div className="row w-100">
						<div className="col-lg-4 col-sm-12">
							<div className="img-thumbnail card-border">
								<img src={require('../assets/images/client1.jpg')} alt="pic" className="featured-img" />
								<div className="caption">
									<p>
										Flathost servers are having high physical security and power redundancy
										Your data will be secure with us.
									</p>
									<h5>Malik Mohsin Hayat</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12">
							<div className="img-thumbnail card-border">
								<img src={require('../assets/images/client2.jpg')} alt="pic" className="featured-img" />
								<div className="caption">
									<p>
										With our ultra mordern servers and optical cables, your data will be
										transfered to end user in milliseconds.
									</p>
									<h5>Khunshan Butt</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12">
							<div className="img-thumbnail card-border">
								<img src={require('../assets/images/client3.jpg')} alt="pic" className="featured-img" />
								<div className="caption">
									<p>
										We have a dedicated team of support for sales and support help you in
										anytime. You can also chat with us.
									</p>
									<h5>Mustafa Sheikh</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row my-5">
					<img src={require('../assets/images/logo1.jpg')} alt="logo1" className="col-lg-3 col-sm-12 px-5" />
					<img src={require('../assets/images/logo2.jpg')} alt="logo2" className="col-lg-3 col-sm-12 px-5" />
					<img src={require('../assets/images/logo3.jpg')} alt="logo3" className="col-lg-3 col-sm-12 px-5" />
					<img src={require('../assets/images/logo4.jpg')} alt="logo4" className="col-lg-3 col-sm-12 px-5" />
					{/* <img src="../../assets/images/logo5.jpg" alt="logo5" className="col-lg-3 col-sm-12 px-5" /> */}
				</div>
			</div>
		);
	}
}

export default Partners;