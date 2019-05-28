import React, { Component } from 'react';

class NotFound extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className="jumbotron bg-white mt-5">
					<div className="container text-center mt-5">
						<h1 className="mt-5">404 PAGE NOT FOUND</h1>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default NotFound;