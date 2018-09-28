import React from 'react';

const Person_function = (props) => {
    return (
    <div>
    <p onClick={props.click}>I'm {props.name} and I'm a {props.designation}</p>
    <p>{props.children}</p>
    </div>
    )
};

export default Person_function;