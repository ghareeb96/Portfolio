import React, { useState } from 'react'
import './App.scss';
import Header from "./Components/Header/Header"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Skills from "./Sections/Skills/Skills"
import Experience from "./Sections/Experience/Experience"
import Projects from "./Sections/Projects/Projects"
import Contact from './Sections/Contact/Contact';
import { ReactComponent as Dots } from './dots.svg'


function App() {

  const [activeSection, setActiveSection] = useState("About")
  const dots = Array(10).fill(1)

  return (
    <div className="app">
      <div className="random-shapes">

        {
          dots.map(dot => (
            <Dots
              key={dot.index}
              className='dots-icon'
            />
          ))
        }

        {/* <div className="squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div> */}
      </div>



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
