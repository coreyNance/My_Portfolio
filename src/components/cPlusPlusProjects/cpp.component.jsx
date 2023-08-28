import {Outlet, Link} from 'react-router-dom';
import './cpp.styles.scss';
import testPic from '../../Assets/images/test_image.png';
import carQuiz from '../../Assets/images/codeQuizBig.png';
import dPlanner from '../../Assets/images/DailyPlannerBig.png';
import SoftReverse from '../cPlusPlusProjects/component_images/CS410_Software_Reverse.png';


function CppCom() {

    return(
         <div className='mainJavaScriptContainer'>
              <center>
                <h1>C++ Projects</h1>
                <h3>Project links will take you to github repository.</h3>
                
              </center>
              <a href ="https://github.com/coreyNance/CS-410-Software-Reverse-Engineering-" target = "_blank" className='ImageTextContainer'>
                <div className='projectImage'>
                <img className = "projectLeftImage" src={SoftReverse} alt = "JavaScript Project."/>

                </div>
                <div className='projectText'>
                    <center><h2>Software-Reverse-Engineering</h2></center>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                </div>

            </a>

            

            <a href ="https://github.com/coreyNance/Daily_Planner" target = "_blank" className='ImageTextContainer'>
                <div className='projectText'>
                <center><h2>Test Image</h2></center>
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


export default CppCom;