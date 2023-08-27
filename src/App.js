import React from "react";
import {Routes, Route} from 'react-router-dom';

// import Header from "./components/header/header.component";
// import Section1 from "./components/section/section.component";
// import Section2 from "./components/section/sectionTwo.component";
// import Navbar from "./components/navbar/navBar.component";
import ProjectsPage from "./routes/projects_page/projects_page.component";
import LandingPage from "./routes/landing_page/landing_page.component";
// import Navigation from "./routes/navigation/navigation.component";

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
      <Route path='/project/JavaScript' element={<ProjectsPage text = {"JavaScript"}/>} ></Route>
      <Route path='/project/Test' element={<ProjectsPage text = {"Test"}/>} ></Route>
    </Routes>
  );
}

export default App;
