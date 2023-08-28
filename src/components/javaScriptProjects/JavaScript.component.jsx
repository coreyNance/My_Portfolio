import {Outlet, Link} from 'react-router-dom';
import './JavaScript.styles.scss';
import testPic from '../../Assets/images/test_image.png';
import carQuiz from '../../Assets/images/codeQuizBig.png';
import dPlanner from '../../Assets/images/DailyPlannerBig.png';


function JavaScriptCom() {

    return(
         <div className='mainJavaScriptContainer'>
              <center>
                <h1>JavaScript Projects</h1>
                <h3>Project links will take you to github repository.</h3>
                
              </center>
              <a href ="https://github.com/coreyNance/Car_Enthusiast_Quiz" target = "_blank" className='ImageTextContainer'>
                <div className='projectImage'>
                <img className = "projectLeftImage" src={carQuiz} alt = "JavaScript Project."/>

                </div>
                <div className='projectText'>
                    <center><h2>Car Enthusiast Quiz Application</h2></center>
                    <p>A program created as a car quiz with responsive design ques in mind. Time is deducted for wrong answers and high scores are saved and can be cleared.  HTML, CSS, JavaScript and Local storage were used for this assignment. This project showcases a mission-driven skill to create an application that utilizes JavaScript and CSS to dynamically show and hide features.
                    </p>
                </div>

            </a>

            

            <a href ="https://github.com/coreyNance/Daily_Planner" target = "_blank" className='ImageTextContainer'>
                <div className='projectText'>
                <center><h2>Daily Planner Application</h2></center>
                    <p>A calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. Moment.js library is used for the date and time.
                    </p>
                </div>
                <div className='projectImage'>
                <img className = "projectLeftImage" src={dPlanner} alt = "JavaScript Project."/>

                </div>

            </a>
         </div>


    );
}


export default JavaScriptCom;