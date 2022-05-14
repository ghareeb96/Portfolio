import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./About.scss";
import profileImg from '../../Assets/Images/ProfileImg.webp';
import CV from "./Ghareeb.pdf";


const About = ({ setActiveSection }) => {
    gsap.registerPlugin(ScrollTrigger);

    const aboutSection = useRef(null)

    useEffect(() => {
        const element = aboutSection.current
        ScrollTrigger.create({
            trigger: element,
            end: "bottom center",
            onEnterBack: () => setActiveSection("About")
        })
    }, [])

    return (
        <div className="section about-section" id="About" ref={aboutSection}>
            <div className="container">
                <div className="about-content">
                    <div className="grid-1">
                        <h4>Hello Friend ! </h4>
                        <h4>I am <span>Ghareeb Shehata</span></h4>
                    </div>
                    <div className="grid-2">
                        <p>Frontend web developer, Designing a nice-looking layout of a website and turning this design to code, Experienced in a set of skills, uses them to build an efficient output.
                        </p>

                        <div className="cv">
                            <h6>Interested to learn more ?</h6>
                            <a target="_blank" href={CV} className="cv-btn" rel="noreferrer" download="Ghareeb Shehata CV">
                                CHECK MY CV
                            </a>
                        </div>
                    </div>
                    <div className="profileImg">
                        <img src={profileImg} alt="profileImg" id="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;