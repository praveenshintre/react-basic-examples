import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props)
    this.state={
      message: 'Hi Praveen Goodmorning'
    }
    // 3rd Approch - Using Official React Document
    this.clickHandler = this.clickHandler.bind(this);
  }

  // For 1st, 2nd & 3rd Approch
  clickHandler() {
    this.setState({
      message: 'Good Bye!!!'
    })
    console.log(this); //It will show undefined, if youu donot pass/bind 'this' in clcik event
  };

  // For 4th Approch - to use arrow function as a class prperty
  // clickHandler = () => {
  //   this.setState({
  //     message: 'Good Bye!!!'
  //   })  
  // }

  render() {
    return(
      <div>
        <p>{this.state.message}</p>
        {/* // 1st Approch - Bind the event in render method
        <button onClick-{this.clickHandler.bind(this)}>Click Event</button> */}

        {/* // 2nd Approch - Using arrow functions
        <button onClick-{() => this.clickHandler()}>Click Event</button> 
        */}
        
        {/* // 3rd Approch - Using Official React Document */}
        <button onClick={this.clickHandler}>Click Event</button>

        {/*  // 4th Approch - Using Official React Document
        <button onClick-{this.clickHandler()}>Click Event</button> */}
      </div>    
    )
  }
}

export default EventBind;