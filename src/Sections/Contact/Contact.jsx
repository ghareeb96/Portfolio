import React, { useState, useEffect, useRef } from 'react'
import "./Contact.scss"
import axios from 'axios';
import { ReactComponent as Address } from "../../Assets/Icons/Contact/address.svg"
import { ReactComponent as Email } from "../../Assets/Icons/Contact/mail.svg"
import { ReactComponent as Phone } from "../../Assets/Icons/Contact/phone.svg"
import { ReactComponent as Facebook } from "../../Assets/Icons/Social/facebook.svg"
import { ReactComponent as Twitter } from "../../Assets/Icons/Social/twitter.svg"
import { ReactComponent as Github } from "../../Assets/Icons/Social/github.svg"
import { ReactComponent as Linkedin } from "../../Assets/Icons/Social/linkedin.svg"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = ({setActiveSection}) => {
    gsap.registerPlugin(ScrollTrigger);
    const contactSection = useRef(null)

    const initialData = { sender: '', email: '', message: '' }
    const [formData, setFormData] = useState(initialData)


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.sender && formData.email.includes('@') && formData.message) {
            const { data } = await axios.post('http://localhost:5000/', formData)
            console.log(data)
        }
    }

    useEffect(()=>{
        const element = contactSection.current

        ScrollTrigger.create({
            trigger : element,
            start: "top center",
            end: "bottom center",
            onEnter : ()=> setActiveSection("Contact"),
            onEnterBack: ()=> setActiveSection("Contact"),
        })
    },[setActiveSection])

    return (
        <div className="section contact-section" id="Contact" ref={contactSection}>
            <div className="container">
                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>Get in Touch</h5>
                    </div>
                </div>

                <div className="contact-details">
                    <div className="contact-info">
                        <div className="contact-option">
                            <Address className='icon' />
                            <h6>El-Salam city, Cairo, Egypt</h6>
                        </div>
                        <div className="contact-option">
                            <Email className='icon' />
                            <h6>ghareeb_shehata@outlook.com</h6>
                        </div>
                        <div className="contact-option">
                            <Phone className='icon' />
                            <h6>+201012016913 , +201554886913</h6>
                        </div>

                        <div className="social-links">
                            <a href="https://www.facebook.com/Ghaareeeb" target="_blank" rel="noreferrer"><Facebook className='icon' /></a>
                            <a href="https://twitter.com/__Ghareeeb" target="_blank" rel="noreferrer"><Twitter className='icon' /></a>
                            <a href="https://github.com/ghareeb96" target="_blank" rel="noreferrer"><Github className='icon' /></a>
                            <a href="https://www.linkedin.com/in/ghareeb-shehata" target="_blank" rel="noreferrer"><Linkedin className='icon' /></a>
                        </div>
                    </div>
                    <div className="email-me">

                        <div className="form-container">
                            <form>
                                <div className="form-input">
                                    <h6>Your name</h6>
                                    <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />
                                </div>
                                <div className="form-input">
                                    <h6>Your Email</h6>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-input">
                                    <h6>Your Message</h6>
                                    <textarea rows="6" name="message" value={formData.message} onChange={handleChange} required />
                                </div>
                                <div className="btn submit-btn">
                                    <button type="submit" onClick={handleSubmit}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyrights">
                <h6>Copyright © 2021 Ghareeb | All rights reserved</h6>
            </div>
        </div>
    )
}

export default Contact;