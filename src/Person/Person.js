import React, { Component } from 'react';
import './../App.css';

class Person extends Component {
  render (props) {
    return (
      <div className="box">
        <p>
          Empyoyee No. :{this.props.Empyoyee_ID} 
          <br />
          Name : {this.props.name}   
          Profile : {this.props.profile} 
          Gender: {this.props.sex} 
          Designition: {this.props.designation}  
          JOB Location : {this.props.Location} 
          and my age is : {Math.floor(Math.random() * 30)} years old.
      </p>
      </div>
    )
  }
}

export default Person;
