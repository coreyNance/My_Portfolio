import React from "react";
import {Routes, Route} from 'react-router-dom';

// import Header from "./components/header/header.component";
// import Section1 from "./components/section/section.component";
// import Section2 from "./components/section/sectionTwo.component";
// import Navbar from "./components/navbar/navBar.component";
import ProjectsPage from "./routes/projects_page/projects_page.component";
import LandingPage from "./routes/landing_page/landing_page.component";
import Navigation from "./routes/navigation/navigation.component";
import JavaScript from "./components/Project-Components/javaScriptProjects/JavaScript.component";
import Java from "./components/Project-Components/javaProjects/java.component";
import Work from './components/Project-Components/generalProjects/generalProjects.component';
import Cpp from './components/Project-Components/cPlusPlusProjects/cpp.component';

function App() {
  return (
    <Routes>
      {/* <Header />
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer /> */}
      {/* <Navigation/> */}
      
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/project' element={<Navigation/>}>
        <Route index element={<ProjectsPage/>}/>
        <Route path='JavaScript' element={<JavaScript/>}/>
        <Route path='CPP' element={<Cpp/>}/>
        <Route path='Java' element={<Java/>}/>
        <Route path='Work' element={<Work/>}/>
      </Route>
    </Routes>
  );
}

export default App;


{/* <Routes> */}
      {/* <Header />
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer /> */}
      {/* <Navigation/> */}
      
    //   <Route path='/' element={<LandingPage/>}></Route>
    //   <Route path='/project/JavaScript' element={<ProjectsPage text = {"JavaScript"}/>} ></Route>
    //   <Route path='/project/Test' element={<ProjectsPage text = {"Test"}/>} ></Route>
    // </Routes>