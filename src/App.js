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
} from './components/index';

class App extends Component {
  constructor(props){
    super(props);
    document.title = "Hubover"
  }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Slider/>
        <ClipBoard/>
        <Features/>
        <FeatureLayout/>
        <Partners/>
        <Contact/>
        <Footer/>
      </React.Fragment>
    );
  }
}


export default App;
