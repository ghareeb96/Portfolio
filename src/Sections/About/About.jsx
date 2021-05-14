import React from 'react'
import "./About.scss"
import { ReactComponent as Download } from "../../Assets/Icons/download.svg"
import profile from "../../Assets/Images/Personal.jpg"

const About = () => {
    return (
        <div className="about" id="About">
            <h6 className="headline">ABOUT ME</h6>
            <div className="about-content">

                <div className="details-section">
                    <h4>Hello, I am Ghareeb Shehata</h4>
                    <p>A web designer/developer (MERN stack), who is responsible for both Design a good layout of a website according to certain specifications and turns the good design to code, also responsible for creating a server and a database and handling the connection between both frontend and backend with a readable, maintainable and well-structured codes.
                always seeking for opportunity to get more knowledge of programming and design to enhance my own career. </p>

                    <div className="cv">
                        <h6>Want to learn more</h6>
                        <button className="cv">
                            <Download />Download My CV
                        </button>
                    </div>
                </div>
                <div className="image-section">
                    <div className="img-container">
                        <img src={profile} alt="Profile" className="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;