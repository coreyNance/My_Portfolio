import React, {useState, useEffect, useRef} from 'react';import './landing_page.styles.scss';
import {Outlet, Link} from 'react-router-dom';
//import myPic from '../component_Images/myImage.jpg';
import myPic from '../../Assets/component_Images/myImage.jpg';
import DropdownItem from '../../components/dropdown-item/dropdown-item.component';



// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

function LandingPage() {

  const [open, setOpen] = useState(false);


  return (
    <div className='main-container'>
        <div className='myInfo-container'>
          
          <h1>Corey Nance </h1>
          <h2>Software Engineer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <ul className='pageInfoLinks'>
            <h2>
              <li className='menu-container' /*ref ={menuRef}*/>
                  <a className='menu-trigger' onClick={() =>{setOpen(!open)}}>Projects</a>

                      <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                        <ul>
                        <DropdownItem text = {"JavaScript"} to ={"/project/JavaScript"}/>
                          <DropdownItem text = {"C++"} to ={"/project/Test"}/>
                          <DropdownItem text = {"Embedded C"}/>
                          <DropdownItem text = {"React"}/>
                          <DropdownItem text = {"Java"}/>
                          <DropdownItem text = {"Python"}/>
                        </ul>
                      </div>
              </li>
                  <li><a href = "Assets\Coreys Resume 5.pdf" download target= "_blank">Resume</a></li>
            </h2>
        </ul>
            
        </div>
        <div className = "myImage-container">
        <div >
        <ul className='pageImgLinks'>
            <h2>
                <li><a href = "#aboutMe">About Me</a></li>
                <li><a href = "#contactMe">Contact Me</a></li>
              
            </h2>
        </ul>
    </div>
            <img className = "myFace" src={myPic} alt = "Picture of me."/>
        </div>
      
    </div>
  );
}

export default LandingPage;