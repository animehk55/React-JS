import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Person_function from './Person/Person_function';

    return (
      <div>
      <div className="App">
      <h>Hi, I'm a react developer</h>
      <p>This is really working</p> <br />
      Hello I'm listing the details of few employees.<br /> 
      </div>
      <div className="margin">
      <button onClick={this.switchNameHandler}>Switch Name</button>
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
              click={this.switchNameHandler}
      >
              hello this is child component 5 printed here 
      </Person_function>

      </div>
    )
  }
}

export default App;
