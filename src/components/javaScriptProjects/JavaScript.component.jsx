import {Outlet, Link} from 'react-router-dom';
import './JavaScript.styles.scss';
import testPic from '../../Assets/images/test_image.png';
import dPlanner from '../../Assets/images/DailyPlannerBig.png';
import javaScriptProjects from '../../Data/JavaScriptData/JavaScriptData';
import Project from '../projectDirectory/projectDirectory.component';


const JavaScriptCom = ()  => {


    

    return(
         <div className='mainJavaScriptContainer'>
              <center>
                <h1>JavaScript Projects</h1>
                <h3>Project links will take you to github repository.</h3>  
              </center>

        
              <Project javaScriptProjects = {javaScriptProjects}/>


         
          </div>


      );
 }











// const JavaScriptCom = () => {
//     //const {id, imageUrl, title} = categories;

  



//     return (
//         <div className="directory-container">
       
        
//         <Project javaScriptProjects = {javaScriptProjects}/>
        
      
//       </div>

//     )



// }

export default JavaScriptCom;