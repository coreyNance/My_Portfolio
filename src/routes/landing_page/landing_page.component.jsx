import React, {useState, useEffect, useRef} from 'react';
import './landing_page.styles.scss';
import {Outlet, Link} from 'react-router-dom';
import {Document, Page, pdfjs} from 'react-pdf';
//import myPic from '../component_Images/myImage.jpg';
import myPic from '../../Assets/component_Images/myImage.jpg';
import resume from '../../utils/Resume.pdf'
import DropdownItem from '../../components/dropdown-item/dropdown-item.component';



// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding


// We use JSX curly braces to evaluate the style object

function LandingPage() {

  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  


  return (
    <div className='main-container'>
        <div className='myInfo-container'>
          
          <h1>Corey Nance </h1>
          <h2>Software Engineer</h2>
          <p>A results-driven Software Engineer with a strong technical skillset that is excited about software development and its various challenges . Willing to take on any challenge and staying on top of industry trends with the ability to work collaboratively or independently. 
          </p>
          
          <ul className='pageInfoLinks'>
            <h2>
              <li className='menu-container' /*ref ={menuRef}*/>
                  <a className='menu-trigger' onClick={() =>{setOpen(!open)}}>Projects</a>

                      <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                        <ul>
                          <li><DropdownItem text = {"JavaScript"} to ={"/project/JavaScript"}/></li>
                          <li><DropdownItem text = {"C++"} to ={"/project/CPP"}/></li>
                          {/* <li><DropdownItem text = {"Embedded C"}/></li> */}
                          {/* <li><DropdownItem text = {"React"}/></li> */}
                          {/* <li><DropdownItem text = {"Java"}/></li> */}
                          {/* <li><DropdownItem text = {"Python"}/></li> */}
                        </ul>
                      </div>
              </li>
                  <li><a href = {resume} target = "_blank">Resume</a></li>
            </h2>
        </ul>
            
        </div>
        <div className = "myImage-container">
        <div >
        <ul className='pageImgLinks'>
            <h2>
                {/* <li><a href = "#aboutMe">About Me</a></li> */}
                <li className='menu-container' /*ref ={menuRef}*/>
                  <a className='menu-trigger' onClick={() =>{setContactOpen(!contactOpen)}}>Contact Me</a>

                      <div className={`contactDropdown-menu ${contactOpen? 'active': 'inactive'}`}>
                        <ul>
                          <li>781-426-1186</li>
                          <li><a href= "mailto:coreynance83@gmail.com">coreynance83@gmail.com</a></li>
                          <li><a href = "https://github.com/coreyNance" target = "_blank">github</a></li>
                          <li><a href = "https://www.linkedin.com/in/corey-nance-87139841/" target = "_blank">Linkedin</a></li>
                        </ul>
                      </div>
              </li>
              
            </h2>
        </ul>
    </div>
            <img className = "myFace" src={myPic} alt = "Picture of me."/>
        </div>
      
    </div>
  );
}

export default LandingPage;