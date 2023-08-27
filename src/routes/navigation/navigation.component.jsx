import {Fragment} from 'react';
// import {Outlet, Link} from 'react-router-dom';
// import {ReactComponent as CrwnLogo} from '../../Assets/images/WeatherApp.png';
import CrwnLogo from '../../Assets/images/WeatherApp.png';

import './navigation.styles.scss'


const Navigation = () => {
    return (

      <nav>
        <ul >
            <h2 className='nav-links-container'>
                <li><a href = "#aboutMe">About Me</a></li>
                <li><a href = "#work">Work</a></li>
                <li><a href = "#contactMe">Contact Me</a></li>
                <li><a href = "Assets\Coreys Resume 5.pdf" download target= "_blank">Resume</a></li>
            </h2>
        </ul>
    </nav>
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