Sec5 - Lec 67 - Adding and Using Radium
========================================
We used inline styles as :
    const style = {
              backgroundColor : 'green',
              color:'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer'
          };
and then this constant in 
<button style={style} onClick={this.togglePersonsHandler}>Toogle Persons </button>          

With inline styles, we cannot assign hover styles (as it can be done in pseudo selector only).
we can fix this by styling the button in css file but then this style won't be scoped to this component only and will be applicable to all buttons in our applications.

We can do some workaround for this with some unique css id/classes  but we will try to find a way to use pseudo selectors and media queries with inline styles only.
For this we will add a third party package - "Radium"

Radium is a popular package for react which allows us to use inline styles with pseudo selectors and media queries.


npm install --save radium 

To use Radium, we need to import it. We can do in any of files - can be file with 
App.js or Person.js etc 
We will now do in App.js 

At start of file, ==> import Radium from 'radium';
At end of file , ==> export default App; is changes to ==> export default Radium(App);
 This is called higher order component , its a component wrapping our component and adding injecting some extra functionality.In this case, some extra syntax that can parse our styles.
 We can use this radium on both 
 i) component created with class and extends component (done above for App.js )
ii) Functional component.(will add now for Person_Props.js but will be used in next chapter  - Sec5-Lec68 - Using Radium for Media Queries)


In App.js, in const style we will add new property ':hover'(any other pseudo selector can also be added as per requirement)

const style = {
              backgroundColor : 'green',
              color:'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer',
              ':hover' : {
                      backgroundColor : 'lightgreen',
                      color           : 'black'
                }
          };

Then we will override ':hover' where we have overridden backgroundColor
so after line  ==> style.backgroundColor= 'red'; 
we will add below :
              style[':hover'] = {                      //Sec5-Lec67
                  backgroundColor : 'salmon',
                  color           : 'black'
          };
with hover as its string ==> ':hover', so we need to use square brackets ==> style[':hover'] =
unlike style.backgroundColor= ....

The above works well
Radium does not limit us to use only for pseudo selector, we will use it for media query in next chapter



Sec5 - Lec 68 - Using Radium for Media Queries
==============================================

In Person.css file, we can add below code
@media(min-width : 500px){
  .Person{
    width: 450px;
  }
}

and this will work well however we want to do it through radium so we will comment the above code and use radium

In person component src ==> Person ==> Person_Props.js, we have already added 
import Radium from 'radium';
and also changed export default personProp; to ==> export default Radium(personProp); //Sec5-Lec67

 in same file Person_Props.js,we will make below changes :
const style={
      '@media(min-width:500px)':{
          width: '450px'
      }
  };

 <div className="Person"> will be changes to ==> <div className="Person" style={style}>  

the above div already has class as Person i.e .Person however when we add something in style={style}
then the common property in style will override the one in .Person class by default css rule.

Now if we reload application and click on "Toggle Person" , we will see error on console as below :

 To use plugins requiring `addCSS` (e.g. keyframes, media queries), please wrap your application in the StyleRoot component. Component name: `personProp`.

To remove this error, we need to wrap entire application in a special component provided by radium
so first of all in App.js, we will import {StyleRoot}
// import Radium from 'radium';
  import Radium,{StyleRoot} from 'radium';

  and now we will wrap whole application in <StyleRoot>
  so in App.js , return statement 
  before line ==>  <div className="App"> , we will add <StyleRoot> and similarly after ending of div we will add 
  </StyleRoot>

this will solve the error and media query will also work , we can check it by reduing screen size

