import React, {lazy} from "react";
import {Routes, Route} from 'react-router-dom';
import LandingPage from "./routes/landing_page/landing_page.component";
import Navigation from "./routes/navigation/navigation.component";
import JavaScript from "./components/Project-Components/javaScriptProjects/JavaScript.component";
import Java from "./components/Project-Components/javaProjects/java.component";
import Work from './components/Project-Components/generalProjects/generalProjects.component';
import Cpp from './components/Project-Components/cPlusPlusProjects/cpp.component';
import AccessMenuDescription from "./components/Project-Components/generalProjects/project_tools/access_menu.component";
import PlaygroundPage from "./routes/playground_page/playground_page.component";

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/project' element={<Navigation/>}>
        <Route path='JavaScript' element={<JavaScript/>}/>
        <Route path='CPP' element={<Cpp/>}/>
        <Route path='Java' element={<Java/>}/>
        <Route path='Work' element={<Work/>}/>
        <Route path='AccessMenuProject' element={<AccessMenuDescription/>}/>
        <Route path='Playground' element={<PlaygroundPage/>}/>

      </Route>
    </Routes>
  );
}

export default App;


// Need to create readme
// fix general project image link to bring to more explination of technologies used.
// fix nav project dropdown to match landing page drop down. 
