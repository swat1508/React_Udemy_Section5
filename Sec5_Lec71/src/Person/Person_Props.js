import React from 'react';
//Sec5_Lec70 import './Person.css';
//Sec5_Lec71 import classes from './Person.css';  //Sec5_Lec70
             import './Person.css'; //Sec5_Lec71
 
/*Sec5-Lec70 - remove Radium changes 
import Radium from 'radium'; */

const personProp = (props) => {
/*Sec5-Lec70 - remove Radium changes
const style={
      '@media(min-width:500px)':{
          width: '450px',
          }
  };*/

  return (
    /*Sec5-Lec70 - remove Radium changes   
    <div className="Person" style={style}> */  
    /*Sec5-Lec71
    <div className={classes.Person}>    */
    <div className="Person"> 
      <p onClick={props.click}> I am {props.name} and I am { props.age} years old</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

//export default personProp;
/*Sec5-Lec70 - remove Radium changes
export default Radium(personProp); //Sec5-Lec67  
*/
export default personProp;