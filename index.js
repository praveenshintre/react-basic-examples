import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './components/myStyle.css'
import PropsFunComp from './components/PropsFunComp'
import PropsClassComp from './components/PropsClassComp'
import SetStateBasic from './components/SetStateBasic'
import SetStateIncCounter from './components/SetStateIncCounter'
import SetStateChangedAfterPlaceCode from './components/SetStateChangedAfterPlaceCode'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

const heading = {
  color: 'red'
}

const fontSize10 = {
  fontSize: '12px'
}

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="even">
            <u style={heading}>Basic Functional Component</u>
            <PropsFunComp name="Praveen" heroName="Shintre">
              <p>This is Child Component</p>
            </PropsFunComp>
          </li>
          <li className="odd">
            <u style={heading}>Basic Class Component</u>
            <PropsClassComp name="Praveen" heroName="Shintre" />
          </li>
          <li className="even">
            <u style={heading}>Basic SetState Component</u>
            <SetStateBasic />
          </li>
          <li className="odd">
            <u style={heading}>Basic SetState Component</u>
          </li>
          <li className="even">
            <u style={heading}>Basic SetState Component</u>
          </li>
          <li className="odd">
            <u style={heading}>SetState Component onClick Increment Counter</u>
            <SetStateIncCounter />
          </li>
          <li className="even">
            <u style={heading}>SetState Component onClick Increment Counter</u>
            <p style={fontSize10}>If you want to place some code after state has been changed
                pass it as a second parameter to the call back function. Check it in console</p>
            <SetStateChangedAfterPlaceCode />
          </li>
          <li className="odd">
            <u style={heading}>Event Handler onClick for Functional Component</u>
            <FunctionClick />
          </li>
          <li className="even">
            <u style={heading}>Event Handler onClick for Class Component</u>
            <ClassClick />
          </li>
          <li className="odd">
            <u style={heading}>Event Handler onClick for Class Component</u>
            <EventBind />
          </li>
          <li className="even">
            <u style={heading}>Passing props from Parent to Child</u>
            <ParentComponent />
          </li>
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));