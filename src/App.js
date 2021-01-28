import React from "react";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import BgImage from "./assets/img/parallex/background.webp";
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';
import ProjectTimeline from './components/project-timeline/project-timeline.component'
import Contact from './pages/contact-form/contact-form.component'

import FooterPanel from './components/footer/footer.component'


import Particles from 'react-particles-js'
import { particlesOptions } from "./particlesOptions";


//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from './components/title-message/title-message.component'
import About from './pages/about/about.component';

import './App.css';

const App=() => {
  return (
    <div style={ { position: "relative" } }> 
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <Particles className="particles particles-box" params={particlesOptions} />
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
      {/* Projects section */}
      
      <div>
    
      <Container className="container-box rounded">
        <Slide duration={2500}>
        <hr />
        <ProjectTimeline />
        
        </ Slide>
      
      </Container>
  
      </div> 
      {/* Contact */}
      <div>
    
      <Container className="container-box rounded">
        <Fade duration={2500}>
          <hr />
        <Contact />
        </ Fade>
      
      </Container>
  
      </div>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
