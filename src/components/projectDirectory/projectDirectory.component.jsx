import carQuiz from '../../Assets/images/codeQuizBig.png';
import ProjectItem from '../project-item/project-item.component';
import '../../components/project-item/project-item.styles.scss'


const ProjectDirectory = ({Projects}) => {
    //const {title, imagePath, projectType, description} = javaScriptProject;

    console.log(Projects);

    return (
        <div>

            {Projects.map((project) =>(

                <ProjectItem key={project.id} project ={project}/>

            ) )}

        </div>
       
       
    
    )



}

export default ProjectDirectory;