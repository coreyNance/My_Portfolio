import './main.styles.scss'
import React, {useState, useEffect, useRef, useContext, lazy} from 'react';
import PlaygroundMenu from '../../Re-use_Components/playground_dropmenu_comonent/playground_dropMenu_component';




const Main = () => {

 



    return (
      <div className="smain-category-container">
          <p>This page is developed based on a feature testing app that I use locally on my computer.  I found it easier to test out functionalities to implement on a simpler application with just a few components instead of trying to do it on the bigger enterprise application.  When assigned tasks within the internship, I would first try to complete the task on the test application and then once I have it working as I intended, then I would try to implement it on the internship’s application.  This process helped me to isolate potential challenges and know if it has to do with my implementation or something within the application itself.  Now, this same set up is a great platform to showcase skills that I have learned by having this playground where users can check out the different features by interacting with the site.  </p>

          <PlaygroundMenu/>
      </div>
      
    )



}

export default Main;