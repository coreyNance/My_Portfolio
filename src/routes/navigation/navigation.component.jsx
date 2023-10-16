import React, {useState, Fragment} from 'react';

import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../Assets/images/WeatherApp.png';
import resume from '../../utils/Resume.pdf'

import DropdownItem from '../../components/dropdown-item/dropdown-item.component';

import './navigation.styles.scss'





const Navigation = () => {



  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);



    return (

      <Fragment>
      <nav>
      <div className='homeLink-container'>
      <Link className='homeLink'to ='/'> 
        Home
      </Link>
      </div> 
           
        <ul >
            <div className='nav-links-container'>
                {/* <li><a href = "#aboutMe">About Me</a></li> */}
                <li className='menu-container' /*ref ={menuRef}*/>
                  <a className='menu-trigger' onClick={() =>{setOpen(!open)}}>Projects</a>

                      <div className={`navProjectDropdown-menu ${open? 'active': 'inactive'}`}>
                        <ul>
                          <li><DropdownItem text = {"JavaScript"} to ={"/project/JavaScript"}/></li>
                          <li><DropdownItem text = {"C++"} to ={"/project/CPP"}/></li>
                          <li><DropdownItem text = {"Work Projects"} to ={"/project/Work"}/></li>
                          <li><DropdownItem text = {"The Playground"} to ={"/project/Playground"}/></li>
                          <li><DropdownItem text = {"Java"} to ={"/project/Java"}/></li>
                          {/* <li><DropdownItem text = {"Python"}/></li> */}
                        </ul>
                      </div>
              </li>
              <li className='menu-container' /*ref ={menuRef}*/>
                  <a className='menu-trigger' onClick={() =>{setContactOpen(!contactOpen)}}>Contact Me</a>

                      <div className={`navContactDropdown-menu ${contactOpen? 'active': 'inactive'}`}>
                        <ul>
                          <li>781-426-1186</li>
                          <li><a href= "mailto:coreynance83@gmail.com">coreynance83@gmail.com</a></li>
                          <li><a href = "https://github.com/coreyNance" target = "_blank">github</a></li>
                          <li><a href = "https://www.linkedin.com/in/corey-nance-87139841/" target = "_blank">Linkedin</a></li>
                        </ul>
                      </div>
              </li>
                <li><a href = {resume} target = "_blank">Resume</a></li>
            </div>
        </ul>
    </nav>
    <Outlet/>
    </Fragment>
      // <Fragment>
      //   <div className='navigation'>
      //       <Link className='logo-container'to ='/'>
      //       <CrwnLogo className= 'logo'/>
      //       </Link>
        
      //     <div className='nav-links-container'>
      //       <Link className = 'nav-link' to='/shop'>
      //           SHOP
      //       </Link>
      //       <Link className = 'nav-link' to='/sign-in'>
      //           Sign In
      //       </Link>
      //     </div>
      //   </div>
  
      //   <Outlet/>
      // </Fragment>
    )
  }

  export default Navigation;