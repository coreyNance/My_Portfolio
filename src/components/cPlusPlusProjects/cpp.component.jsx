import {Outlet, Link} from 'react-router-dom';
import './cpp.styles.scss';
import testPic from '../../Assets/images/test_image.png';
import carQuiz from '../../Assets/images/codeQuizBig.png';
import dPlanner from '../../Assets/images/DailyPlannerBig.png';
import SoftReverse from '../cPlusPlusProjects/component_images/CS410_Software_Reverse.png';
import Project from '../projectDirectory/projectDirectory.component';
import cPlusPlusProjects from '../../Data/cPlusPlusData';


function CppCom() {

    return(
         <div className='mainJavaScriptContainer'>
              <center>
                <h1>C++ Projects</h1>
                <h3>Project links will take you to github repository.</h3>
                
              </center>
             
              <Project Projects = {cPlusPlusProjects}/>

            

            
         </div>


    );
}


export default CppCom;