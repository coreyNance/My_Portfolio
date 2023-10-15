import {Outlet, Link} from 'react-router-dom';
import "../dropdown-item/dropdown-item.styles.scss"


function DropdownItem(props) {

    return(
         <Link to = {props.to}>
            <span className='project_dropdownItem'>{props.text}</span>
        </Link>


    );
}


export default DropdownItem;