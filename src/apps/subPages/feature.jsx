import React, { Component } from 'react';
import { FeatureLayout, Features } from '../../components/index';


class Feature extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<FeatureLayout />
				<Features />
			</React.Fragment>
		);
	}
}

export default Feature;