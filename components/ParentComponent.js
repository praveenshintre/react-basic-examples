import React, { Component } from 'react';
import ChildComponent from '../components/ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ParentName: 'Parent'
    }
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.ParentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <p>Using bind</p>
        <ChildComponent greetHandler={this.greetParent} /><br />
        <p>Using ES6 Feature</p>
        <ChildComponent greetHandler={(input) => this.greetParent(input)} />
      </div>
    )
  }
}

export class Test extends Component {
  render() {

  }
}

export default ParentComponent