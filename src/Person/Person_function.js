import React from 'react';
import './../App.css'

const Person_function = (props) => {
    return (
    <div className="Person">
    <p onClick={props.click}>I'm {props.name} and I'm a {props.designation}</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
    </div>
    )
};

export default Person_function;