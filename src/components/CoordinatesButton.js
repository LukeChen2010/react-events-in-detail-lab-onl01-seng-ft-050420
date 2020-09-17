// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  
<<<<<<< HEAD
  handleClick = event => {this.props.onReceiveCoordinates([event.clientX, event.clientY]);
=======
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
>>>>>>> 41808218f9d7919bba032527afca99f29c975815
  };

  render() {
    return <button onClick={this.handleClick}>Coordinates</button>;
  }
}

export default CoordinatesButton;