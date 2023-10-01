import {Outlet, Link} from 'react-router-dom';
import DropdownItem from '../dropdown-item/dropdown-item.component';
import React, {useState} from 'react';
import '../../routes/navigation/navigation.styles.scss';
import '../dropdown-menu/dropdown-menu.styles.scss';


function DropdownMenu() {
  const [open, setOpen] = useState(false);


    return(
      <li className='menu-container' /*ref ={menuRef}*/>
                  <a className='menu-trigger' onClick={() =>(setOpen(!open))}>Projects</a>
                      <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>

                          <DropdownItem text = {"JavaScript"} to ={"/project/JavaScript"}/>
                          <DropdownItem text = {"C++"} to ={"/project/CPP"}/>
                          <DropdownItem text = {"Java"} to ={"/project/Java"}/>
                          <DropdownItem text = {"Work Projects"} to ={"/project/Work"}/>
                          {/* <li><DropdownItem text = {"Embedded C"}/></li> */}
                          {/* <li><DropdownItem text = {"React"}/></li> */}
                          {/* <li><DropdownItem text = {"Java"}/></li> */}
                          {/* <li><DropdownItem text = {"Python"}/></li> */}
                        
                      </div>
              </li>

    );
}


export default DropdownMenu;

// <li className='menu-container' /*ref ={menuRef}*/>
//                   <a className='menu-trigger' onClick={() =>{setOpen(!open)}}>Projects</a>

//                       <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
//                         <ul>
//                           <li><DropdownItem text = {"JavaScript"} to ={"/project/JavaScript"}/></li>
//                           <li><DropdownItem text = {"C++"} to ={"/project/CPP"}/></li>
//                           <li><DropdownItem text = {"Java"} to ={"/project/Java"}/></li>
//                           {/* <li><DropdownItem text = {"Embedded C"}/></li> */}
//                           {/* <li><DropdownItem text = {"React"}/></li> */}
//                           {/* <li><DropdownItem text = {"Java"}/></li> */}
//                           {/* <li><DropdownItem text = {"Python"}/></li> */}
//                         </ul>
//                       </div>
//               </li>