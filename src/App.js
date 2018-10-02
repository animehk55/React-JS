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
    ],
    personFunction : [
      { name: "Mintu", profile: "Engineer" },
      { name: "Shalesh", profile: "Backend Developer" },
      { name: "Harmeet", profile: "S-Engineer" },
      { name: "Shaaz", profile: "S - Backend Developer" },
      { name: "Animesh", profile: "__________" },
      ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //Don't mutate, or Do This : this.state.person[0].name = 'SOF';
    this.setState({ 
      person: [
        { Empyoyee_ID: "SOF_5421", name:  "SOF", profile:  "SOF_Enginer", sex: "NON_HUMAN", designation: "XXX", Location: "Austria" },
        { Empyoyee_ID: newName, name: "Binayak", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad" },
        { Empyoyee_ID: "84513216", name: "Shah", profile: "Dancer", sex: "Female", designation: "Arist", Location: "Ahmedabad" },
        { Empyoyee_ID: "875151", name: "Rwanshi", profile: "Stupid Talketive", sex: "Female", designation: "Youtuber", Location: "Ranchi" },
        { Empyoyee_ID: "464651", name: "Chandan", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad" },
        { Empyoyee_ID: "87651", name: "Audi", profile: "Backend Developer", sex: "Male", designation: "Enginer", Location: "Ahmedabad"} 
      ],

      personFunction : [
        { name: "Mintu", profile: "Engineer_personFunction" },
        { name: "Shalesh", profile: "Backend Developer_ personFunction" },
        { name: "Harmeet", profile: "S-Engineer_personFunction" },
        { name: "Shaaz", profile: "S - Backend Developer_personFunction" },
        { name: "Animesh", profile: "___, https://github.com/animehetwetwt5tk55/Rekkhkhkhkhkact-JS" }
        ]
    }
  )
  }

nameChangedHandler = (event) => {
        this.setState({ 
                personFunction : [
                        { name: "Input Handle", profile: "Engineer_personFunction" },
                        { name: event.target.value, profile: "Backend Developer_ personFunction" },
                        { name: "Harmeet", profile: "S-Engineer_personFunction" },
                        { name: "Shaaz", profile: "S - Backend Developer_personFunction" },
                        { name: event.target.value, profile: "___, https://github.com/animehetwetwt5tk55/Rekkhkhkhkhkact-JS" }
                          ]
                        }
                    )
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
      <button onClick={() => this.switchNameHandler('Mai burbak tha pahale')}>Switch Name</button>
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
      <Person_function 
              name={this.state.personFunction[0].name} 
              designation={this.state.personFunction[0].profile}
      >
              hello this is child component 1 printed here 
      </Person_function>
      <Person_function 
              name={this.state.personFunction[1].name} 
              designation={this.state.personFunction[1].profile}
      >
              hello this is child component 2 printed here 
      </Person_function>
      <Person_function 
              name={this.state.personFunction[2].name} 
              designation={this.state.personFunction[2].profile}
      >
              hello this is child component 3 printed here 
      </Person_function>
      <Person_function 
              name={this.state.personFunction[3].name} 
              designation={this.state.personFunction[3].profile}
      >
              hello this is child component 4 printed here 
      </Person_function>
      <Person_function 
              name={this.state.personFunction[4].name} 
              designation={this.state.personFunction[4].profile}
              click={this.switchNameHandler.bind(this, "Chintu burbak hai kaya")}
              changed={this.nameChangedHandler}
      >
              hello this is child component 5 printed here
      </Person_function>

      </div>
    )
  }
}

export default App;
