import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

<<<<<<< HEAD
  clickCallback = (e) => {
      this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return <button onClick={this.clickCallback}>Click Me!</button>
=======
  render(){
    
>>>>>>> 5a0ff29aba5923b595013858f103a68f97db6c19
  }
}