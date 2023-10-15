import './cpp.styles.scss';
import Project from '../../projectDirectory/projectDirectory.component';
import cPlusPlusProjects from '../../../Data/cPlusPlusData';


function CppCom() {

    return(
         <div className='mainCppContainer'>
              <center>
                <h1>C++ Projects</h1>
                <h3>Project links will take you to github repository.</h3>
                
              </center>
             
              <Project Projects = {cPlusPlusProjects}/>

            

            
         </div>


    );
}


export default CppCom;