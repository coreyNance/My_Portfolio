import {Outlet, Link} from 'react-router-dom';


function DropdownMenu(props) {

    return(
        <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
        <ul>
          <li><DropdownItem text = {"JavaScript"} to ={"/project/JavaScript"}/></li>
          <li><DropdownItem text = {"C++"} to ={"/project/CPP"}/></li>
          <li><DropdownItem text = {"Embedded C"}/></li>
          <li><DropdownItem text = {"React"}/></li>
          <li><DropdownItem text = {"Java"}/></li>
          <li><DropdownItem text = {"Python"}/></li>
        </ul>
      </div>

    );
}


export default DropdownMenu;