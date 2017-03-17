import React, { Component } from 'react';

class FancyButton extends Component {
  render() {
    return (
      <div>
        <p style={{color:this.props.textColour}}>
          {this.props.children}
        </p>
        <button onClick={this.props.onClick}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default FancyButton;
