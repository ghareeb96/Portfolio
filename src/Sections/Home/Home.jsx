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
        <div className="home">
            <div className="background">
                <img src={background} alt="Home Background" />
            </div>
            <div className="home-content">
                <div className="text">
                    <h4>Hello, Its me</h4>
                    <h1>Ghareeb Shehata</h1>
                    <h4>Web Designer/Developer</h4>
                </div>
                <div className="social-links">
                    <a href="#"><Facebook /></a>
                    <a href="#"><Twitter /></a>
                    <a href="#"><Github /></a>
                    <a href="#"><Linkedin /></a>
                </div>
            </div>
            <div className="learn-more">
                <a href="#">
                    <Arrow />
                </a>
            </div>
        </div>
    )
}

export default Home;