import {Outlet, Link} from 'react-router-dom';
import DropdownItem from '../dropdown-item/dropdown-item.component';
import React, {useState} from 'react';
// import '../../routes/navigation/navigation.styles.scss';
import '../../components/dropdown-menu/dropdown-menu.styles.scss';


function DropdownMenu() {
  const [open, setOpen] = useState(false);


    return(
      <li className='menu-container' /*ref ={menuRef}*/>
                  <a className='menu-trigger' onClick={() =>(setOpen(!open))}>Projects</a>
                      <div className={`mainDropdown-menu ${open? 'active': 'inactive'}`}>

                          <DropdownItem text = {"JavaScript"} to ={"/project/JavaScript"}/>
                          <DropdownItem text = {"C++"} to ={"/project/CPP"}/>
                          <DropdownItem text = {"Java"} to ={"/project/Java"}/>
                          <DropdownItem text = {"Work Projects"} to ={"/project/Work"}/>
                          <DropdownItem text = {"The Playground"} to ={"/project/Playground"}/>

                          {/* <li><DropdownItem text = {"Embedded C"}/></li> */}
                          {/* <li><DropdownItem text = {"React"}/></li> */}
                          {/* <li><DropdownItem text = {"Java"}/></li> */}
                          {/* <li><DropdownItem text = {"Python"}/></li> */}
                        
                      </div>
              </li>

    );
}


export default DropdownMenu;
