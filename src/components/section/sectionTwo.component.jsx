import React from 'react';
import './Section.styles.css';
import paddock from '../../Assets/component_Images/paddock.png'
import findFood from '../../Assets/component_Images/FindMeFoodBig.png'
import weatherApp from '../../Assets/component_Images/WeatherAppBig.png'
import codeQuiz from '../../Assets/component_Images/codeQuizBig.png'
import cProgram from '../../Assets/component_Images/CPlusPlus.png'
import dailyPlanner from '../../Assets/component_Images/DailyPlannerBig.png'
// import myPic from '../images/myImage.jpg'

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function SectionTwo() {
  return (
    <section>
      <aside className = "left">
                <h1 id = "work">Work</h1>
        </aside>
        <main className = "right">
        
            <div className = "container">

                <figure className = "sunsetImage bigImage">
                    <a href = "https://shielded-tor-91530.herokuapp.com/login" target = "_blank">
                     <img src={paddock} height = "400" alt = "Paddock Website Image"/>
                     </a>
                     <figcaption>
                         <h3>Paddock</h3>
                         Fullstacks Group Project
                     </figcaption>
                     <a className = "resLink" href ="https://github.com/luketeal/projectAwesome" target ="_blank">Paddock Repository</a>
                </figure>

                
                <figure className = "sunsetImage bigImage">
                    <a href = "https://unh-bootcamp-projects.github.io/project-1-group-c/" target = "_blank">
                     <img src={findFood} height = "400" alt = "Find Me Food Website Image"/>
                     </a>
                     <figcaption>
                         <h3>Find Me Food</h3>
                         API Group Project
                     </figcaption>
                     <a className = "resLink" href ="https://github.com/UNH-Bootcamp-Projects/project-1-group-c" target ="_blank">Find Me Food Repository</a>
                </figure>
                
                

                <figure className = "sunsetImage">
                    <a href = "https://coreynance.github.io/WeatherApplication/" target = "_blank">
                    <img  src={weatherApp} width = "100" height = "200" alt = "Weather app website"/>
                    </a>
                    <figcaption>
                        <h3>Weather Application</h3>
                        Working with APIs
                    </figcaption>
                    <a className = "resLink" href ="https://github.com/coreyNance/WeatherApplication" target ="_blank">Weather Application Repository</a>
                </figure>

                <figure className = "sunsetImage"> 
                    <a href = "https://coreynance.github.io/Car_Enthusiast_Quiz/" target = "_blank">
                    <img src={codeQuiz} width = "100" height = "200" alt = "quiz website image"/>
                    </a>
                    <figcaption>
                        <h3>Car Car Enthusiast Quiz</h3>
                        Test your car knowledge
                    </figcaption>
                    <a className = "resLink" href ="https://github.com/coreyNance/WeatherApplication" target ="_blank">Weather Application Repository</a>
                </figure>

                <figure className = "sunsetImage">
                    <a href = "https://github.com/coreyNance/CPlusPlus-Program/blob/master/Main2.cpp" target = "_blank">
                    <img src={cProgram} width = " 300" height = "200" alt = "C++ program image"/>
                    </a>
                    <figcaption>
                        <h3>C++ Programming</h3>
                        The Zoo application
                    </figcaption>
                    <a className = "resLink" href ="https://github.com/coreyNance/CPlusPlus-Program" target ="_blank">The Zoo Application Repository</a>
                </figure>

                <figure className = "sunsetImage">
                    <a href = "https://coreynance.github.io/Daily_Planner/" target = "_blank">
                    <img src={dailyPlanner} width = "300" height = "200" alt = "Daily Planner image"/>
                    </a>
                    <figcaption>
                        <h3>Daily Planner</h3>
                        Working with MommentJS
                    </figcaption>
                    <a className = "resLink" href ="https://github.com/coreyNance/Daily_Planner" target ="_blank">Daily Planner Repository</a>
                </figure>

            </div>

        </main>
    </section>
  );
}

export default SectionTwo;
