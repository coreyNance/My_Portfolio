import {Outlet, Link} from 'react-router-dom';
import './JavaScript.styles.scss';
import testPic from '../../Assets/images/test_image.png'


function JavaScriptCom() {

    return(
         <div className='mainJavaScriptContainer'>
              <center><h1 className='javaScript-Title'>JavaScript Projects</h1></center>
            <div className='ImageTextContainer'>
                <div className='projectImage'>
                <img className = "projectLeftImage" src={testPic} alt = "JavaScript Project."/>

                </div>
                <div className='projectText'>
                    <center><h2>Project Title</h2></center>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>

            

            <a href ="https://github.com/coreyNance/PWA_Budget_Tracker" target = "_blank" className='ImageTextContainer'>
                <div className='projectText'>
                <center><h2>Project Title</h2></center>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='projectImage'>
                <img className = "projectLeftImage" src={testPic} alt = "JavaScript Project."/>

                </div>

            </a>
         </div>


    );
}


export default JavaScriptCom;