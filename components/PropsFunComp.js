import React from 'react';

const PropsFunComp = props => {
    return(
        <div>
            <h1>Hello {props.name}
              {props.helleName}
            </h1>
            {props.children}
        </div>
    );
}

export default PropsFunComp;