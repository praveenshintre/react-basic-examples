import React, { Component } from 'react';

class PropsClassComp extends Component {
    render() {
        return (
            <h1> Welcome {this.props.name} V {this.props.heroName}</h1>
        )
    }
}

export default PropsClassComp;