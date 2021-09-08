import React from 'react'
import "./About.scss"
import { ReactComponent as Download } from "../../Assets/Icons/download.svg";
import Profile from '../../Assets/Images/profileImg.png';

const About = () => {
    return (
        <div className="section about-section" id="About">
            <div className="container">

                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>Who am I</h5>
                    </div>
                </div>

                <div className="about-content">
                    <div className="details-section">
                        <h4>Hello Friend, I am <span>Ghareeb Shehata</span></h4>
                        <p>A web designer/developer (MERN stack), who is responsible for both Design a good layout of a website according to certain specifications and turns the good design to code, also responsible for creating a server and a database and handling the connection between both frontend and backend with a readable, maintainable and well-structured codes.
                    </p>
                        <p>
                            Always seeking for opportunity to get more knowledge of programming and design to enhance my own career. </p>
                        <div className="cv">
                            <h6>Want to learn more</h6>
                            <a href='./cv.pdf' className="cv-btn" download="Ghareeb Shehata's CV">
                                <Download />DOWNLOAD CV
                        </a>
                        </div>
                    </div>

                    <div className="image-section">
                        <div className="profile-image">
                            <div className="img-background"></div>
                            <div className="image">
                                <img src={Profile} alt="Profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;