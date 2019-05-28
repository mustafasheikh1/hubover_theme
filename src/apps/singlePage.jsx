import React, { Component } from 'react';
import {
  Header, 
  Slider, 
  ClipBoard, 
  Features, 
  FeatureLayout, 
  Partners, 
  Contact, 
  Footer 
} from '../components/index';

class SinglePage extends Component {
  state = {}
  
	render() {
		return ( 
			<div>
        <Header change={this.props.change}/>
        <Slider/>
        <ClipBoard/>
        <Features/>
        <FeatureLayout/>
        <Partners/>
        <Contact/>
        <Footer/>
      </div>
		);
	}
}

export default SinglePage;