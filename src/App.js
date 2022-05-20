import React, { useState, useEffect } from 'react'
import './App.scss';
import Header from "./Components/Header/Header"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Skills from "./Sections/Skills/Skills"
import Experience from "./Sections/Experience/Experience"
import Projects from "./Sections/Projects/Projects"
import Contact from './Sections/Contact/Contact';
import { ReactComponent as Dots } from './dots.svg'
import { ReactComponent as Square } from './square.svg'
import gsap from 'gsap';



function App() {

  const [activeSection, setActiveSection] = useState("About")
  const shapes = Array(10).fill(1)

  useEffect(()=>{

    const circles = document.querySelectorAll(".circle")

    circles.forEach(circle =>{
      let topRnd = Math.random() * (2000 - (-2000)) + (-2000)
      let leftRnd = Math.random() * (500 - (-500)) + (-500)
      gsap.to(circle, 
        {
          top: `+=${topRnd}px`,
          left: `+=${leftRnd}px`,
          duration: 100,
          repeat: -1,
          yoyo: true,
          ease: "none"

        })
    })

  },[])

    return (
    <div className="app">
      <div className="shapes">

        {
          shapes.map(shape => (
            <>
              <Dots
                key={shape.index}
                className='dots-icon'
              />

              <Square
                key={shape.index}
                className={'circle'}
              />
            </>
          ))
        }

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
