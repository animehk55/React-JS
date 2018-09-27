import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Person_function from './Person/Person_function';

class App extends Component {
  render () {
    return (
      <div>
      <div className="App">
      <h>Hi, I'm a react developer</h>
      <p>This is really working</p> <br />
      Hello I'm listing the details of few employees.<br /> 
      </div>
      <div className="margin">
      <Person Empyoyee_ID="87542" name="Animesh" profile="Engineer" sex="Male" designation="Enginer" Location="Ahmedabad"/>
      <br /><Person Empyoyee_ID="87515" name="Binayak" profile="Backend Developer" sex="Male" designation="Enginer" Location="Ahmedabad"/>
      <br /><Person Empyoyee_ID="84513216" name="Shah" profile="Dancer" sex="Female" designation="Arist" Location="Ahmedabad"/>
      <br /><Person Empyoyee_ID="875151" name="Rwanshi" profile="Stupid Talketive" sex="Female" designation="Youtuber" Location="Ranchi"/>
      <br /><Person Empyoyee_ID="464651" name="Chandan" profile="Backend Developer" sex="Male" designation="Enginer" Location="Ahmedabad"/>
      <br /><Person Empyoyee_ID="87651" name="Audi" profile="Backend Developer" sex="Male" designation="Enginer" Location="Ahmedabad"/>
      </div>
      <Person_function name="Mr. India" designation="Enginer" />
      </div>
    )
  }
}

export default App;
