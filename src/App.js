import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render () {
    return (
      <div className="App">
      <h>Hi, I'm a react developer</h>
      <p>This is really working</p>
      <Person />
      </div>
    )
  }
}

export default App;
