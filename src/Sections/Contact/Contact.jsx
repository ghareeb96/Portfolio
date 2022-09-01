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
import { ReactComponent as Send } from "./Send.svg"
import { ReactComponent as MessageSent } from "./Message-sent.svg"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = ({ setActiveSection }) => {
    gsap.registerPlugin(ScrollTrigger);
    const contactSection = useRef(null)
    const initialData = { sender: '', email: '', message: '' }
    const [formData, setFormData] = useState(initialData)

    const messageSent = () => {
        document.querySelector('.message-modal').classList.add('active')
        setTimeout(()=> document.querySelector('.message-modal').classList.remove('active'), 3000)
        setFormData(initialData)
    }

    const messageFailed = () => {
        alert('Something went wrong')
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.sender && formData.email && formData.message) {
            const { status } = await axios.post('https://ghareeb-portfolio.herokuapp.com/', formData)
            status === 201 ?
                messageSent()
                :
                messageFailed()

        }
    }

    useEffect(() => {
        const element = contactSection.current

        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveSection("Contact"),
            onEnterBack: () => setActiveSection("Contact"),
        })
    }, [])

    return (
        <div className="section contact-section" id="Contact" ref={contactSection}>
            <div className="container">

                <div className="message-modal">
                    <div className="modal-content">
                        <MessageSent className='icon' />
                        <h3>Thank You</h3>
                        <h5>Your message has been received</h5>
                    </div>
                </div>

                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h2>Get in Touch</h2>
                    </div>
                </div>

                <div className="contact-details">
                    <div className="contact-info">
                        <div className="contact-option">
                            <Address className='icon' />
                            <h3>Cairo, Egypt</h3>
                        </div>
                        <div className="contact-option">
                            <Email className='icon' />
                            <h3>ghareeb_shehata@outlook.com</h3>
                        </div>
                        <div className="contact-option">
                            <Phone className='icon' />
                            <h3>+201012016913 , +201554886913</h3>
                        </div>

                        <div className="social-links">
                            <a href="https://www.facebook.com/Ghaareeeb" target="_blank" rel="noreferrer"><Facebook className='icon' /></a>
                            <a href="https://twitter.com/_urFavStranger" target="_blank" rel="noreferrer"><Twitter className='icon' /></a>
                            <a href="https://github.com/ghareeb96" target="_blank" rel="noreferrer"><Github className='icon' /></a>
                            <a href="https://www.linkedin.com/in/ghareeb-shehata" target="_blank" rel="noreferrer"><Linkedin className='icon' /></a>
                        </div>
                    </div>
                    <div className="email-me">

                        <div className="form-container">
                            <form>
                                <div className="form-input">
                                    <h5>Name</h5>
                                    <input type="text" name="sender" value={formData.sender} onChange={handleChange} required />
                                </div>
                                <div className="form-input">
                                    <h5>Email</h5>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-input">
                                    <h5>Message</h5>
                                    <textarea rows="6" name="message" value={formData.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" onClick={handleSubmit}><Send className='icon send-icon' />Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyrights">
                <h6>Copyright © {new Date().getFullYear()} Ghareeb | All rights reserved</h6>
            </div>
        </div>
    )
}

export default Contact;