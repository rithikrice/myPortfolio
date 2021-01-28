import React from "react";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import BgImage from "./assets/img/parallex/background.webp";
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from './components/title-message/title-message.component'
import About from './pages/about/about.component';

import './App.css';

const App=() => {
  return (
    <div className="App" style={ { position: "relative" } }> 
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      
      {/* about me section */}
      <div>
      
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
      >
      <Container className="container-box rounded">
        <Fade duration={2500}>
        <About />
        </ Fade>
      
      </Container>
      
      </Parallax>
      </div>
      {/* Skills section */}
      
      <div>
    
      <Container className="container-box rounded">
        <Slide duration={2500}>
        <hr />
        <Skills />
        
        </ Slide>
      
      </Container>
  
      </div>
      {/* Experience */}
      <div>
    
      <Container className="container-box rounded">
        <Fade duration={2500}>
          <hr />
        <Experience />
        </ Fade>
      
      </Container>
  
      </div>
    </div>
  );
}

export default App;
