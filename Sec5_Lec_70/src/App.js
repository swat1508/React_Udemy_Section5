import React, { Component } from 'react';
/*
import logo from './logo.svg';  ==> deleting logo.svg file as not needed */
//Sec5_Lec70 import './App.css';
             import classes from './App.css'; //Sec5_Lec70
import MyPerson from './Person/Person';
import PersonProp from './Person/Person_Props';
//Sec5_Lec70 import Radium,{StyleRoot} from 'radium';

class App extends Component {

  state = {
    persons:[
      {id:'P1',name:'Maxqqq' , age:28},
      {id:'P002',name:'Manu' , age:29},
      {id:'Steph',name:'Stephanie' , age:26}
    ],
    otherState : 'some other value',
    showPersons:false
  }

switchNameHandler = (newName) => {
  console.log('Button Clicked !!! ');
  this.setState({
    persons:[
      {name: newName, age:28},
      {name:'Manu' , age:29},
      {name:'Stephanie' , age:27}
    ]
  })
} 

deletePersonHandler = (personIndex) =>{
// const persons = this.state.persons;
const persons = this.state.persons.slice();
persons.splice(personIndex,1);
this.setState({persons : persons});
}

nameChangedHandler = (event,id) => {

  const personIndex = this.state.persons.findIndex(p => {
    return p.id==id;
  });
//const person = Object.assign({} , this.state.persons[personIndex]);
/* the above commented code will work but we will follow below spread operator approcach */

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name=event.target.value;
  const persons= [...this.state.persons];
  persons[personIndex] = person;



  this.setState({persons : persons  })
}


togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}

  render() {
          const style = {
              backgroundColor : 'green',
              color:'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer',
              /*Sec5-Lec70 - remove Radium changes
              ':hover' : {
                      backgroundColor : 'lightgreen',
                      color           : 'black'
              } */
          };
let persons=null;
if(this.state.showPersons){
persons=(
    <div>
      {
          this.state.persons.map( (person,index) => {
                return <PersonProp 
                name={person.name} 
                age={person.age}
                key={person.id}
                click={ () => this.deletePersonHandler(index) } 
                changed= {(event) => this.nameChangedHandler(event,person.id)}
                />
          })
      }
            
    </div> 
      );
      style.backgroundColor= 'red';
      /*Sec5-Lec70 - remove Radium changes    
      style[':hover'] = {                      //Sec5-Lec67
                  backgroundColor : 'salmon',
                  color           : 'black'
          };
          */


}
/* Sec5-Lec70 starts
const classes=[];
if(this.state.persons.length <= 2 ){
classes.push('red');
}
if(this.state.persons.length <= 1 ){
  classes.push('bold');
}*/

const assignedClasses=[];
if(this.state.persons.length <= 2 ){
                  assignedClasses.push( classes.red );
}
if(this.state.persons.length <= 1 ){
                  assignedClasses.push( classes.bold );
}
/* Sec5-Lec70 ends */

return (
 //Sec5-Lec70  <StyleRoot>
 //Sec5_Lec70  <div className="App"> 
               <div className={classes.App}> 
<h2> Using State </h2>
<h1>Hi I am reactApp</h1>
<p className={assignedClasses.join(' ')}>This is really working !!!!</p>



<button
style={style}
onClick={this.togglePersonsHandler}>Toogle Persons </button>
{persons}
      </div>
//Sec5-Lec70  </StyleRoot>
    );
  }
}

// export default App;
/*Sec5-Lec70 - remove Radium changes
export default Radium(App); //Sec5-Lec67
*/
export default App;