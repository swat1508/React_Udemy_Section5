Sec5 - Lec 71 - More on CSS Modules
====================================

In the last lectures , we learnt that with CSS modules :
 We can only access it through the classes  object. 
 if we somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, we can prefix the selector with :global .

Example:
:global .Post { ... } 

Now you can use className="Post"  anywhere in your app and receive that styling.

We will try this in our application , for Person_Prop component


Person.css
==========
.Person will be changed to ==> :global .Person {


Person_Prop.js
==============
//Sec5_Lec71 import classes from './Person.css';  //Sec5_Lec70
             import './Person.css'; //Sec5_Lec71

and 

//Sec5_Lec71    <div className={classes.Person}>    //Sec5_Lec70  
                <div className="Person">            //Sec5_Lec71

so this will work i.e without classes(variable-name) also we can use directly

Note : in App.js, classes.red etc is still there so we can use with classes(variable-name/css-loader) feature and without it.


Now we will see the remaining 2 in next chapters 
Sec5 - Lec 72 - adding pseudo selectors
Sec5 - Lec 73 - working with media queries
