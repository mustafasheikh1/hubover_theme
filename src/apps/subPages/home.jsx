import React, { Component } from 'react';
import { Slider, ClipBoard, FeatureLayout } from '../../components/index';


class Home extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<Slider />
				<ClipBoard />
				<FeatureLayout />
			</React.Fragment>
		);
	}
}

export default Home;