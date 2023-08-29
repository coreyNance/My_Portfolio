import React, {useState, Fragment} from 'react';

import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../Assets/images/WeatherApp.png';
// import CrwnLogo from '../../Assets/images/WeatherApp.png';
import DropdownItem from '../../components/dropdown-item/dropdown-item.component';

import './navigation.styles.scss'





const Navigation = () => {



  const [open, setOpen] = useState(false);



    return (

      <Fragment>
      <nav>
      <div className='homeLink-container'>
      <Link className='homeLink'to ='/'> 
      <h2>Home</h2>
      </Link>
      </div> 
           
        <ul >
            <h2 className='nav-links-container'>
                <li><a href = "#aboutMe">About Me</a></li>
                <li className='menu-container' /*ref ={menuRef}*/>
                  <a className='menu-trigger' onClick={() =>{setOpen(!open)}}>Projects</a>

                      <div className={`navDropdown-menu ${open? 'active': 'inactive'}`}>
                        <ul>
                          <li><DropdownItem text = {"JavaScript"} to ={"/project/JavaScript"}/></li>
                          <li><DropdownItem text = {"C++"} to ={"/project/CPP"}/></li>
                          <li><DropdownItem text = {"Embedded C"}/></li>
                          <li><DropdownItem text = {"React"}/></li>
                          <li><DropdownItem text = {"Java"}/></li>
                          <li><DropdownItem text = {"Python"}/></li>
                        </ul>
                      </div>
              </li>
                <li><a href = "#contactMe">Contact Me</a></li>
                <li><a href = "Assets\Coreys Resume 5.pdf" download target= "_blank">Resume</a></li>
            </h2>
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