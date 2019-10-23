Sec5 - Lec 72 - Adding Pseudo Selectors
========================================
First we will remove the below changes 

(1) the const style defined 

render() {
    /*Sec5-Lec72 starts
          const style = {
              backgroundColor : 'green',
              color:'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer',

                    //Sec5-Lec70 - remove Radium changes      ':hover' : {
                    //Sec5-Lec70 - remove Radium changes            backgroundColor : 'lightgreen',
                    //Sec5-Lec70 - remove Radium changes            color           : 'black'
                  //Sec5-Lec70 - remove Radium changes            } 

          };
         Sec5-Lec70 ends */
(2) the style used 
//Sec5_Lec72 <button style={style} onClick=....
<button onClick=....  //Sec5_Lec72 


(3) the background color red when Person components are shown :
//Sec5_Lec72   style.backgroundColor= 'red';

Now we will add styling with classes in css file 

(a) In App.css file, below changes needed
.App button{
  border: 1px solid blue;
  padding: 16px;
  background-color: green;
  font: inherit;
  color: white;
  cursor: pointer;
}

.App button:hover {
background-color:lightgreen;
color: black;
}

.App button.Red{
background-color: red;
}
.App button.Red:hover{
  background-color: salmon;
  }

  (b) in App.js file we will add the below changes for whatever we removed in point 1,2,3 above

  //Sec5_Lec72  style={style}
    className={btnClass} //Sec5_Lec72

 //Sec5-Lec72     style.backgroundColor= 'red';
btnClass= classes.Red;  //Sec5_Lec72

Now it will work


Sec5 - Lec 73 - using Media Queries
===================================
Mainly 3 changes needed that I have altered in Sec5_Lec71 , just neee to restore back
In Person_Prop.js
-----------------
(a)
//Sec5_Lec72 import './Person.css'; //Sec5_Lec71
              import classes from './Person.css';  //Sec5_Lec72

(b)
       /*Sec5-Lec72
    <div className="Person">  */
    <div className={classes.Person}>

In Person.css
-------------
@media(min-width : 500px){
  .Person{
    width: 450px;
  }
}

uncomment this if commented(for me it was already uncommented)
note here for me only ==> @media(min-width : 500px){  does not work , so I made below change to work .

/*SS Change @media(min-width : 500px){ */
            @media only screen and (max-width: 600px) {  /*SS Change */
                .Person{
                    width: 450px;
                    background-color: yellow;   /*just to check working of media query */
                  }
            }






