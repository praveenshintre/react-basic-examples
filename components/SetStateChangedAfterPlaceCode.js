import React, {Component} from 'react'

class SetStateChangedAfterPlaceCode extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    //If you want to place some code after state has been changed
    //pass it as a second parameter to the call back function ((Asynchronus inside setstate))
    increment() {
        this.setState({
            count : this.state.count + 1
        },
        () => 
        { console.log('After SetState Changed', this.state.count) }
        );
    }

    render(){
        return(
            <div>
                <div>Count {this.state.count}</div>
                <button onClick = {() => this.increment()}>Click</button>
            </div>
        )
    }
}

export default SetStateChangedAfterPlaceCode
