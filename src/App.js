import React, { Component } from 'react';
import { SinglePage, MultiPage } from './apps/index';

class App extends Component {
  state = {
    formate: 'm'
  }


  switch = () => {
    if(this.state.formate === 'm') {
      this.setState({
        formate: 's'
      });
    } else{
      this.setState({
        formate: 'm'
      });
    } 
    console.log(this.state.formate);
  }

  render() {
    return (
      <React.Fragment>
        {(this.state.formate === 's')? <SinglePage change={this.switch} />: <MultiPage change={this.switch} />}
      </React.Fragment>
    );
  }
}


export default App;
