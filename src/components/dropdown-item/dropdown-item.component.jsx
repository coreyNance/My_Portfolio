import {Outlet, Link} from 'react-router-dom';


function DropdownItem(props) {

    return(
         <Link className="dropdownItem" to = {props.to}>
            <li>{props.text}</li>
        </Link>


    );
}


export default DropdownItem;