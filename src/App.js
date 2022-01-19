import React, { useState } from 'react'
import './App.scss';
import Header from "./Components/Header/Header"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Skills from "./Sections/Skills/Skills"
import Experience from "./Sections/Experience/Experience"
import Projects from "./Sections/Projects/Projects"
import Contact from './Sections/Contact/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function App() {
  gsap.registerPlugin(ScrollTrigger)

  const [activeSection, setActiveSection] = useState("About")



  return (
    <div className="app">

      <Header
        activeSection={activeSection}
      />
      <About
        setActiveSection={setActiveSection}
      />
      <Services
        setActiveSection={setActiveSection}
      />
      <Skills
        setActiveSection={setActiveSection}
      />
      <Experience
        setActiveSection={setActiveSection}
      />
      <Projects
        setActiveSection={setActiveSection}
      />
      <Contact
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

export default App;
