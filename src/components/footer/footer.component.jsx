import React from 'react';
import './footer.styles.css';

// import myPic from '../images/myImage.jpg'

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <footer>
        <aside className = "left">
            <h1 id = "contactMe">Contact Me</h1>  
        </aside>

        <main className = "right">

            <ul className = "contactLinks">
                <li>781-426-1186</li>
                <li><a href= "mailto:coreynance83@gmail.com">coreynance83@gmail.com</a></li>
                <li><a href = "https://github.com/coreyNance" target = "_blank">github</a></li>
                <li><a href = "https://www.linkedin.com/in/corey-nance-87139841/" target = "_blank">Linkedin</a></li>
            </ul>

        </main>
    </footer>
  );
}


export default Footer;
