import {Outlet, Link} from 'react-router-dom';
// import './JavaScript.styles.scss';
import javaProjects from '../../Data/JavaData';
import Project from '../projectDirectory/projectDirectory.component';


const JavaCom = ()  => {


    

    return(
         <div className='mainJavaScriptContainer'>
              <center>
                <h1>Java Projects</h1>
                <h3>Project links will take you to github repository.</h3>  
              </center>

        
              <Project Projects = {javaProjects}/>


         
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

export default JavaCom;