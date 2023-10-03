import {Outlet, Link} from 'react-router-dom';
import './JavaScript.styles.scss';
import javaScriptProjects from '../../../Data/JavaScriptData';
import Project from '../../projectDirectory/projectDirectory.component';


const JavaScript = ()  => {


    

    return(
         <div className='mainJavaScriptContainer'>
              <center>
                <h1>JavaScript Projects</h1>
                <h3>Project links will take you to github repository.</h3>  
              </center>

        
              <Project Projects = {javaScriptProjects}/>


         
          </div>


      );
 }



export default JavaScript;