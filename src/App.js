import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Person_function from './Person/Person_function';

class App extends Component {
  state = {
    person : [
      { Empyoyee_ID: "87542", name: "Animesh", profile: "Engineer", sex: "Male", designation: "Enginer", Location: "Ahmedabad" },
      { Empyoyee_ID: "87515", name: "Binayak", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad" },
      { Empyoyee_ID: "84513216", name: "Shah", profile: "Dancer", sex: "Female", designation: "Arist", Location: "Ahmedabad" },
      { Empyoyee_ID: "875151", name: "Rwanshi", profile: "Stupid Talketive", sex: "Female", designation: "Youtuber", Location: "Ranchi" },
      { Empyoyee_ID: "464651", name: "Chandan", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad" },
      { Empyoyee_ID: "87651", name: "Audi", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad"}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked');
    //Don't mutate, or Do This : this.state.person[0].name = 'SOF';
    this.setState({ 
      person: [
        { Empyoyee_ID: "SOF_5421", name:  "SOF", profile:  "SOF_Enginer", sex: "NON_HUMAN", designation: "XXX", Location: "Austria" },
        { Empyoyee_ID: "87515", name: "Binayak", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad" },
        { Empyoyee_ID: "84513216", name: "Shah", profile: "Dancer", sex: "Female", designation: "Arist", Location: "Ahmedabad" },
        { Empyoyee_ID: "875151", name: "Rwanshi", profile: "Stupid Talketive", sex: "Female", designation: "Youtuber", Location: "Ranchi" },
        { Empyoyee_ID: "464651", name: "Chandan", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad" },
        { Empyoyee_ID: "87651", name: "Audi", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad"}
        
      ]
    })
  }
  render () {
    return (
      <div>
      <div className="App">
      <h>Hi, I'm a react developer</h>
      <p>This is really working</p> <br />
      Hello I'm listing the details of few employees.<br /> 
      </div>
      <div className="margin">
      <button onClick={this.switchNameHandler} >Switch Name</button>
      <Person Empyoyee_ID={ this.state.person[0].Empyoyee_ID }
              name={ this.state.person[0].name } 
              profile={ this.state.person[0].profile } 
              sex={ this.state.person[0].sex } 
              designation={ this.state.person[0].designation } 
              Location={ this.state.person[0].Location } 
      />
      <br />
      <Person Empyoyee_ID={ this.state.person[1].Empyoyee_ID } 
              name={ this.state.person[1].name } 
              profile={ this.state.person[1].profile } 
              sex={ this.state.person[1].sex } 
              designation={ this.state.person[1].designation } 
              Location={ this.state.person[1].Location } 
      />
      <br />
      <Person Empyoyee_ID={ this.state.person[2].Empyoyee_ID } 
              name={ this.state.person[2].name } 
              profile={ this.state.person[2].profile }
              sex={ this.state.person[2].sex } 
              designation={ this.state.person[2].designation } 
              Location={ this.state.person[2].Location } 
      />
      <br />
      <Person Empyoyee_ID={ this.state.person[3].Empyoyee_ID } 
              name={ this.state.person[3].name } 
              profile={ this.state.person[3].profile } 
              sex={ this.state.person[3].sex } 
              designation={ this.state.person[3].designation } 
              Location={ this.state.person[3].Location } 
      />
      <br />
      <Person Empyoyee_ID={ this.state.person[4].Empyoyee_ID } 
              name={ this.state.person[4].name } 
              profile={ this.state.person[4].profile } 
              sex={ this.state.person[4].sex } 
              designation={ this.state.person[4].designation } 
              Location={ this.state.person[4].Location }
              click={this.switchNameHandler}
      />   
      </div>
      <Person_function name="Mr. India" designation="Enginer">hello this is child component printed here </Person_function>
      </div>
    )
  }
}

export default App;
