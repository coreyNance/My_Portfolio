import React from 'react';
import './header.styles.css';
//import myPic from '../component_Images/myImage.jpg';
import myPic from '../../Assets/component_Images/myImage.jpg';


// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header>
    <aside className = "left">
      <img className = "myFace" src={myPic} width = "300" height = "300" alt = "Picture of me."/>
      </aside>
    <h1>Corey Nance </h1>
  </header>
  );
}

export default Header;