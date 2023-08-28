import {Outlet, Link} from 'react-router-dom';


function DropdownItem(props) {

    return(
         <Link className="dropdownItem" to = {props.to}>
            {props.text}
        </Link>


    );
}


export default DropdownItem;