import React from 'react';
import './landing_page.styles.scss';
//import myPic from '../component_Images/myImage.jpg';
import myPic from '../../Assets/component_Images/myImage.jpg';


// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

function LandingPage() {
  return (
    <div className='myInfo-container'>
        <div className = "left">
            <img className = "myFace" src={myPic} alt = "Picture of me."/>
        </div>
        <div className='myInfo'>
            <h1>Corey Nance </h1>
            <h2>Software Engineer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  );
}

export default LandingPage;