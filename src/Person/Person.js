import React, { Component } from 'react';

class Person extends Component {
  render (props) {
    return (
      <div>
      Empyoyee No. :{this.props.Empyoyee_ID} 
      <br />Name : {this.props.name}   Profile : {this.props.profile} Gender: {this.props.sex} Designition: {this.props.designition}
      JOB Location : {this.props.location} and my age is : {Math.floor(Math.random() * 30)} years old.
      </div>
    )
  }
}

export default Person;
