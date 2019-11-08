import React, { Component } from 'react';

class Partners extends Component {
	state = {}
	render() {
		return (
			<div className="container" id="partners">
				<div className="row w-110 pl-4">
					<h1 className="display-5 font-weight-bold w-100 text-center mt-5">Team Members</h1>
					<p className="lead text-center w-100">Get to know of our term</p>
					<div className="row w-100">
						<div className="col-lg-4 col-sm-12">
							<div className="img-thumbnail card-border">
								<a className="text-decoration-none" href="https://github.com/mohsinht" target="_blank" >
									<img className="greyscale" src={require('../assets/images/client1.jpg')} alt="pic" className="featured-img" height="75px" width="75px" />
									<div className="caption">
										<p>
											I'm Computer Science student from Lahore, Pakistan. I like designing and web development.
										</p>
										<h5>Mohsin Hayat</h5>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12">
							<div className="img-thumbnail card-border">
								<a className="text-decoration-none" href="https://github.com/khunshan97" target="_blank" >
									<img className="greyscale" src={require('../assets/images/client2.jpg')} alt="pic" className="featured-img" height="75px" width="75px" />
									<div className="caption">
										<p>
											I'm a CS student who's interested in achieving something revolutionary.
											With my team, I'm confident to overcome any challenges that comes in our way.
										</p>
										<h5>Khunshan Butt</h5>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12">
							<a className="text-decoration-none" href="https://github.com/mustafasheikh1" target="_blank">
								<div className="img-thumbnail card-border">
									<img className="greyscale" src={require('../assets/images/client3.jpg')} alt="pic" className="featured-img" height="75px" width="75px" />
									<div className="caption">
										<p>
											I'm currently a Computer Science student. I have 2-year experience of coding in JAVA, PYTHON, TYPESCRIPT, CSS, HTML and C#.
										</p>
										<h5>Mustafa Sheikh</h5>
									</div>
								</div>
							</a>
						</div>

					</div>
				</div>
				{/* <div className="row my-5">
					<img src={require('../assets/images/logo1.jpg')} alt="logo1" className="col-lg-3 col-sm-12 px-5" />
					<img src={require('../assets/images/logo2.jpg')} alt="logo2" className="col-lg-3 col-sm-12 px-5" />
					<img src={require('../assets/images/logo3.jpg')} alt="logo3" className="col-lg-3 col-sm-12 px-5" />
					<img src={require('../assets/images/logo4.jpg')} alt="logo4" className="col-lg-3 col-sm-12 px-5" />
				</div> */}
			</div>
		);
	}
}

export default Partners;