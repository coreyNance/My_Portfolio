import {Outlet, Link} from 'react-router-dom';
import './generalProjects.styles.scss';
import generalProjects from '../../../Data/generalProjectsData';
import Project from '../../projectDirectory/projectDirectory.component';


const GeneralCom = ()  => {


    

    return(
         <div className='ProjectContainer'>
              <center>
                <h1>Various work assignments</h1>
               
              </center>

        
              <Project Projects = {generalProjects}/>


         
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

export default GeneralCom;