import carQuiz from '../../Assets/images/codeQuizBig.png';


// "id": 1,
// "title": "Car Enthusiast Quiz Application",
// "imagePath": '../../Assets/images/codeQuizBig.png',
// "class": "ImageRightTextContainer",
// "projectLink": "https://github.com/coreyNance/Car_Enthusiast_Quiz"
// "projectType": 'JavaScript Project',
// "description": 'A program created as a car quiz with responsive design ques in mind. Time is deducted for wrong answers and high scores are saved and can be cleared.  HTML, CSS, JavaScript and Local storage were used for this assignment. This project showcases a mission-driven skill to create an application that utilizes JavaScript and CSS to dynamically show and hide features.'




const Project = ({project}) => {
    const {title, imagePath, projectType, description, projectClass, projectLink} = project;

    // console.log(javaScriptProjects);

    return (
        
       <a href = {projectLink} target = "_blank" className= {projectClass}>
                <div className='projectImage'>
                <img className = "projectLeftImage" src={imagePath} alt = {projectType}/>

                </div>
                <div className='projectText'>
                    <center><h2>{title}</h2></center>
                    <p>{description}</p>
                </div>

            </a> 
    
    )



}

export default Project;