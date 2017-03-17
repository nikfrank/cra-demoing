import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FancyButton from './FancyButton';

class App extends Component {

  constructor(){
    super();
    this.state = {
      textColour: 'red'
    };
  }
  
  changeTextColour = () => {
    this.setState({ textColour: 'blue' });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {
          [1,2,3,4,10].map( i => (
            <p className="App-intro">
              {i*i*i} To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          ) )
        }
        <FancyButton textColour={this.state.textColour}
                     onClick={this.changeTextColour}>
          You should
        </FancyButton>    
      </div>
    );
  }
}

export default App;
