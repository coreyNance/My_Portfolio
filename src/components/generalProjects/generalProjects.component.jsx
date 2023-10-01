import {Outlet, Link} from 'react-router-dom';
// import './JavaScript.styles.scss';
import internProjects from '../../Data/generalProjectsData';
import Project from '../projectDirectory/projectDirectory.component';


const GeneralCom = ()  => {


    

    return(
         <div className='mainJavaScriptContainer'>
              <center>
                <h1>Various work assignments</h1>
               
              </center>

        
              <Project Projects = {internProjects}/>


         
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