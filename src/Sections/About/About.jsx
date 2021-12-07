import React, {useEffect, useRef} from 'react'
import "./About.scss";
import bg1 from "./BG1.svg";
import bg2 from "./BG2.svg";
import Profile from '../../Assets/Images/profileImg.png';
import CV from "./Ghareeb.pdf";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const About = () => {
    gsap.registerPlugin(ScrollTrigger);

    const picture = useRef(null)

    return (
        <div className="section about-section" id="About">
            <div className="background">
                <img src={bg1} alt="bg1" className="background-wave" />
                <img src={bg2} alt="bg2" className="background-wave" />
            </div>
            <div className="container">


                <div className="about-content">
                    <div className="details-section">
                        <h4>Hello Friend ! </h4>
                        <h4>I am <span>Ghareeb Shehata</span></h4>
                        <p>A web designer/developer (MERN stack), who is responsible for both Design a good layout of a website according to certain specifications and turns the good design to code, also responsible for creating a server and a database and handling the connection between both frontend and backend with a readable, maintainable and well-structured codes.
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

                    <div className="image-section" ref={picture}>
                        <div className="profile-image">
                            <div className="img-background"></div>
                            <div className="image">
                                <img src={Profile} alt="Profile" id="picture" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;