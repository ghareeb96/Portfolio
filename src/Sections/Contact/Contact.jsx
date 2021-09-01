import React from 'react'
import "./Contact.scss"
import { ReactComponent as Facebook } from "../../Assets/Icons/Social/facebook.svg"
import { ReactComponent as Twitter } from "../../Assets/Icons/Social/twitter.svg"
import { ReactComponent as Github } from "../../Assets/Icons/Social/github.svg"
import { ReactComponent as Linkedin } from "../../Assets/Icons/Social/linkedin.svg"

const Contact = () => {
    return (
        <div className="contact" id="contact">
           
            
           <div className="social-links">
                    <a href="https://www.facebook.com/Ghaareeeb" target="_blank" rel="noreferrer"><Facebook /></a>
                    <a href="https://twitter.com/__Ghareeeb" target="_blank" rel="noreferrer"><Twitter /></a>
                    <a href="https://github.com/ghareeb96" target="_blank" rel="noreferrer"><Github /></a>
                    <a href="https://www.linkedin.com/in/ghareeb-shehata" target="_blank" rel="noreferrer"><Linkedin /></a>
                </div>
        </div>
    )
}

export default Contact;