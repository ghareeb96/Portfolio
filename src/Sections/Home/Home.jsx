import React from 'react'
import "./Home.scss"
import background from "../../Assets/Images/Home-background.jpg"
import { ReactComponent as Facebook } from "../../Assets/Icons/Social/facebook.svg"
import { ReactComponent as Twitter } from "../../Assets/Icons/Social/twitter.svg"
import { ReactComponent as Github } from "../../Assets/Icons/Social/github.svg"
import { ReactComponent as Linkedin } from "../../Assets/Icons/Social/linkedin.svg"
import { ReactComponent as Arrow } from "../../Assets/Icons/arrow.svg"

const Home = () => {
    return (
        <div className="home" id="Home">
            <div className="background">
                <img src={background} alt="Home Background" />
            </div>
            <div className="home-content">
                <div className="text">
                    <h5>Hello, Its me</h5>
                    <h2>Ghareeb Shehata</h2>
                    <h5>Web Designer/Developer</h5>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/Ghaareeeb" target="_blank" rel="noreferrer"><Facebook /></a>
                    <a href="https://twitter.com/__Ghareeeb" target="_blank" rel="noreferrer"><Twitter /></a>
                    <a href="https://github.com/ghareeb96" target="_blank" rel="noreferrer"><Github /></a>
                    <a href="https://www.linkedin.com/in/ghareeb-shehata" target="_blank" rel="noreferrer"><Linkedin /></a>
                </div>
            </div>
            <div className="learn-more">
                <a href="#About">
                    <Arrow />
                </a>
            </div>
        </div>
    )
}

export default Home;