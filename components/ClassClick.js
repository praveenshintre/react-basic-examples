import React, { Component } from 'react'

class ClassClick extends Component {
  clcikHandler() {
    console.log("Clicked the button");
  }

  render(){
    return(
      <div>
        <button onClick={this.clcikHandler}>Click</button>
      </div>
    )
  }
}

export default ClassClick;