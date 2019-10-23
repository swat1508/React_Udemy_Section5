import React from 'react';
import './Person.css';
import Radium from 'radium';

const personProp = (props) => {

const style={
      '@media(min-width:500px)':{
          width: '450px',
          }
  };

  return (
    <div className="Person" style={style}>  
    <p onClick={props.click}> I am {props.name} and I am { props.age} years old</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

//export default personProp;
export default Radium(personProp); //Sec5-Lec67