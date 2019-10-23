Sec5 - Lec 64 - Outlining Problem Set
======================================
In App.js, we have defined an inline style
  const style = {
              backgroundColor : 'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer'
          };
and used it for button "Toogle Persons"
<button style={style} onClick={this.togglePersonsHandler}>Toogle Persons </button>          

this is inline style so we cant use pseudo selector here so hover can't be used
we can use external css to use for button:hover but that way it will apply to all button . In this we will try to 
change style dynamically 
this button should have a green bg color if we are about to show persons with a click and a red bg color if we are about ot remove persons the persons list.



Sec5 - Lec 65 - Setting Styles Dynamically
==========================================
To achieve what we decided above, we will add following changes in style variable used in button- <button style={style} onClick={this.togglePersonsHandler}>Toogle Persons </button> 

so we will first modify the "style " as
const style = {
              backgroundColor : 'green',
              color:'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer'
          };
adding bgcolor as green and color(font color)  as white , so it will initially show button with green background and
the text 'Toogle Persons' will be in white font.
Now, inside if condition , after code written to show persons is over we will add the below additinal code :
style.backgroundColor= 'red';

So the above changes will work as expected in "Sec5 - Lec 64" last paragraph above.

Sec5 - Lec 66 - Setting Class Names Dynamically
============================================
Now we want that when size of persons is 2 or less, the paragraph - <p> This is really working !!!!</p> 
should be displayed in red and if size of persons is 2 or less, it should be in bold as well.

So first of all we will declare 2 classes in App.css

.red{
color:red;
}
.bold{
font-weight: bold;
}

and then in App.js we will make following changes :
      const classes=[];
      if(this.state.persons.length <=2 ){
      classes.push('red');
      }
      if(this.state.persons.length <=2 ){
        classes.push('bold');
      }

This will work ..

