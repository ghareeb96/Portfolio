import React, { useEffect, useRef } from 'react'
import "./About.scss";
import profileImg from '../../Assets/Images/ProfileImg.webp';
import CV from "./Ghareeb.pdf";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    }, [setActiveSection])

    return (
        <div className="section about-section" id="About" ref={aboutSection}>
            <div className="container">
                <div className="about-content">
                    <div className="details-section">
                        <h4>Hello Friend ! </h4>
                        <h4>I am <span>Ghareeb Shehata</span></h4>
                        <p>A MERN Stack web developer, Designing a nice-looking layout of a website and turning this design to code, also creating a server and a database and handling the connection between both frontend and backend with a readable, maintainable and well-structured lines of code. Producing a high performing websites.
                        </p>
                        <p>
                            Always seeking for opportunity to get more knowledge of programming and design to enhance my own career. </p>
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