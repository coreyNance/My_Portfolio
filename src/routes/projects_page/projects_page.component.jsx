import React from 'react';
import './projects_page.styles.scss';
import JavaScriptCom from '../../components/javaScriptProjects/JavaScript.component';
//import myPic from '../component_Images/myImage.jpg';
import myPic from '../../Assets/component_Images/myImage.jpg';
import TestComponent from '../../components/test/Test.component';


// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

function ProjectsPage(props) {

console.log(props.text);

// return (


//   <div>{props.text}</div>
// )
  

  switch(props.text) {
    case 'Test':
      return <TestComponent/>;
    case 'JavaScript':
      return <JavaScriptCom/>;
    default:
      return <div><h1>Something is going wrong</h1></div>;
  }




  
}

export default ProjectsPage;