import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./About.scss";
import profileImg from '../../Assets/Images/ProfileImg.webp';


const About = ({ setActiveSection }) => {
    gsap.registerPlugin(ScrollTrigger);
    let t1 = gsap.timeline();
    const aboutSection = useRef(null)
    const hello = useRef(null)
    const def = useRef(null)
    const paragraph = useRef(null)
    const img = useRef(null)

    useEffect(() => {
        t1.from(hello.current,
            {
                y: 20,
                alpha: 0,
                duration: 0.8,
                ease: "ease-out"
            })
            .from(def.current,
                {
                    y: 20,
                    alpha: 0,
                    duration: 0.8,
                    ease: "ease-out"
                })
            .from(img.current,
                {
                    y: 20,
                    alpha: 0,
                    duration: 0.8,
                    ease: "ease-out"
                }, "<")
            .from(paragraph.current,
                {
                    y: 20,
                    alpha: 0,
                    duration: 0.8,
                    ease: "ease-out"
                })
            .fromTo(document.querySelector("header"),
                {
                    top: -50,
                    opacity: 0
                }, {
                top: 0,
                opacity: 1,
                duration: 0.5
            })
    }, [])


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
                        <h4 ref={hello} >Hello Friend </h4>
                        <h4 ref={def}>I am <span>Ghareeb Shehata</span></h4>
                    </div>
                    <div ref={paragraph} className="grid-2" >
                        <p>Frontend web developer, Designing and developing a nice-looking and efficient Projects.
                        </p>
                        <p>Experienced in a set of skills, always trying to use them to build a valuable outputs.</p>
                    </div>

                    <div className="profileImg">
                        <img ref={img} src={profileImg} alt="profileImg" id="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;