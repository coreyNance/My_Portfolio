
const Project = ({project}) => {
    const {title, imagePath, imageStyle,
           projectType, description, projectClass,
           projectLink, imageContainer, textContainer} = project;

    // console.log(javaScriptProjects);

    return (
        
       <a href = {projectLink} target = "_blank" className= {projectClass}>
                <div className= {imageContainer}>
                <img className = {imageStyle} src={imagePath} alt = {projectType}/>

                </div>
                <div className={textContainer}>
                    <center><h2>{title}</h2></center>
                    <p>{description}</p>
                </div>

            </a> 
    
    )



}

export default Project;



// need to add image style to each project data
// need to move individual css styles to project css files and change styles.
// need to add project items to nav menu