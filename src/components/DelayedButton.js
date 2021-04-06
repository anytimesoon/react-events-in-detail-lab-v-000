import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
<<<<<<< HEAD
  clickHandler = (e) => {
    e.persist()
    setTimeout( () => (
        this.props.onDelayedClick(e)
      ), this.props.delay)
  }
  
  render(){
    return <button onClick={this.clickHandler}>Click Me!</button>
=======
  render(){
    
>>>>>>> 5a0ff29aba5923b595013858f103a68f97db6c19
  }
}