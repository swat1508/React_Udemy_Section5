Sec5 - Lec 70 - Enabling and Using CSS Modules
==============================================

In the last lectures , we learnt we learn about radium - which is a popular  third party package and allows to use   
inline styling with features like media query. This is one way of scoping styles , being able to easily edit
them and still use features like media queries. However its not the only way.

How about a way if a css file like Person.css could be scoped to Person_Prop.js component file so that 
whichever style we define in Person.css could be imported and assigned to elements in "personProp" component
and also it won't override styles in other component or any other part of application even if we share the name of classes. This is possible by a feature called "CSS module" and the setup for this we will see in this chapter.

First we will remove all Radiul related stuffs in Person_Prop.js and Ap.js :
(1) In Person_Prop.js,
  (a)  remove importing Radium ==> //Sec5-Lec70 import Radium from 'radium';
  (b) Also remove constant style
      /*Sec5-Lec70 - remove for Radium
          const style={
              '@media(min-width:500px)':{
                  width: '450px',
              }
      };  */
  (c)   /*Sec5-Lec70 - remove Radium changes   
          <div className="Person" style={style}> */ 
          <div className="Person">

  (d) remove in export also 
        /*Sec5-Lec70 - remove Radium changes
        export default Radium(personProp); //Sec5-Lec67  
        */
        export default personProp;        

(2) In App.js,
(a) remove import Radium and StyleRoot ==> //Sec5_Lec70 import Radium,{StyleRoot} from 'radium';
(b) remove StyleRoot wrapper in return 
(c) remove from export
          /*Sec5-Lec70 - remove Radium changes
          export default Radium(App); //Sec5-Lec67
          */
          export default App;
(d) remove the hover override and where we set it 
    style.backgroundColor= 'red';
 /*Sec5-Lec70 - remove Radium changes    
                style[':hover'] = {                      //Sec5-Lec67
                  backgroundColor : 'salmon',
                  color           : 'black'
                };      */
and also 
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

So now all traces of Radium is removed.Now we want to handle everything through scoped CSS file and for this we need to tweak the built configuation of our project.
As mentioned earlier in course we are using "react-scripts" (mentioned in package.json ==> dependencies), which is a package that exposes the whole build workflow to us and we cannot really add it to configuration.One way is that we can dig into node modules folder and edit there but its not recommended as everytime we do npm install , the changes will be lost.

There is a command "eject" that gives us access to the confuguration.Its mentioned in package.json ==> scripts
we can run "npm run eject" to convert our "everything is managed for me " project to 
 "everything is managed for me but I can edit configuration"
 There won't be a way back but it should not break, it will work in same way it did before and we can edit configuration.This has to be done with care as it may break setup. We will do it here now to unlock featured of CSS modules as below :

 run the command ==> "npm run eject"

 it will ask yes/no ==> give yes and after few secs it will display message like
    Ejected successfully!
      Please consider sharing why you ejected in this survey:
      http://goo.gl/forms/Bi6CZjk1EqsdelXk1

we will see new folders - "scripts" and "config"
Script folder 
=================
It has one script for each command we have in package.json file - start,build,test
we can see that list of dependencies have grew too much e.g babel and many others are added now

config foler
============
Note : In video its saying that in config folder there are 2 files
 webpack.config.dev.js and  webpack.config.prod.js
 but actually I can only see  webpack.config.js (nothing dev or prod)
 so whatever changes its asking to do in "webpack.config.dev.js" and "webpack.config.prod.js", I am doing in  webpack.config.js (as I have only this file) as below:
(This is expected as per chapter previous to this ==> See Sec5_Lec69 - Must Read Enabling CSS Module)

In this webpack.config .js,
inside ==> module: {  (line 288)  ==>  we will scroll below and find the line where we 
can find test for css( test: cssRegex) and add the 2 lines of code 
at line 397 & 398(with comment //Sec5_Lec70) as below :
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                modules:true,                                       //Sec5_Lec70
                localIdentName: '[name]__[local]__[hash:base64:5]',  //Sec5_Lec70
                sourceMap: isEnvProduction
                  ? shouldUseSourceMap
                  : isEnvDevelopment,
              }),

Note : in video the line number is something else (not 397 and 398) , this is because the file looks somewhat different in writing style. this file has been generated itself after eject command so not in my
control. (This is expected as per chapter previous to this ==> See Sec5_Lec69 - Must Read Enabling CSS Module)



With the above changes, configuration changes is done and we need the below changes in importing css:
In App.js 
=========

(a) 
//Sec5_Lec70 import './App.css';
             import classes from './App.css'; //Sec5_Lec70
(b)
 //Sec5_Lec70 <div className="App"> 
              <div className={classes.App}>  //Sec5_Lec70


(c)  we have used varibale name classes in point a above(it can be anything) and also 
earlier we have used const classes in code below 
        const classes=[];
        if(this.state.persons.length <= 2 ){
        classes.push('red');
        }
        if(this.state.persons.length <= 1 ){
          classes.push('bold');
        }
So we will change const classed to const assignedClassed and also the new changes for 
red ==> classed.red  and bold ==> classes.bold
so the complete changes is 


if(this.state.persons.length <= 2 ){
  //Sec5_Lec70    classes.push('red');
                  assignedClasses.push( classes.red );
}
if(this.state.persons.length <= 1 ){
 //Sec5_Lec70     classes.push('bold');
                  assignedClasses.push( classes.bold );
}

Also, classes.join will be changed to ==> assignedClasses.join
 //Sec5_Lec70  <p className={classes.join(' ')}>This is really working !!!!</p>
               <p className={assignedClasses.join(' ')}>This is really working !!!!</p>   //Sec5_Lec70

when we do npm start we can see it similar to earlier css for red and bold will be visible
however css for person won't work i.e it wont look like card because we have not adjusted the Person_Prop
component yet . In 

In Person_Prop.js
==================

//Sec5_Lec70 import './Person.css';
             import classes from './Person.css';  //Sec5_Lec70

//Sec5_Lec70 <div className="Person"> 
              <div className={classes.Person}>   //Sec5_Lec70

Now with the above change, person component will look like card as earlier

The only things left are :
hover effect ==>  chapter Sec5_Lec72 (Adding Pseudo Selectors)
media query ==>   chapter Sec5_Lec73 (Working with media queries)


Two important things to note :

Note1 : See the difference
Case1 :
------- 
 //Sec5_Lec70 <div className="App"> 
              <div className={classes.App}>  //Sec5_Lec70

and 

Case 2:
------
  //Sec5_Lec70    classes.push('red');
                  assignedClasses.push( classes.red );

One is with {} and other is without {}

Answer ==> Case1 is JSX inside return statement and Case2 is simple JS


Note2 : Dont skip Sec5_Lec71 (as its not a video just in info), it says an important below :

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with :global .

Example:

:global .Post { ... } 

Now you can use className="Post"  anywhere in your app and receive that styling.








