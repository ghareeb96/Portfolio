import React, { useRef, useEffect } from 'react'
import "./Projects.scss"
import { data } from "./projects-data"
import {ReactComponent as Link} from '../../Assets/Icons/link.svg'
import {ReactComponent as Github} from '../../Assets/Icons/Social/github.svg'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = ({ setActiveSection }) => {
    gsap.registerPlugin(ScrollTrigger);
    const projectsSection = useRef(null)
    const projectCard = useRef(null)

    useEffect(() => {
        const element = projectsSection.current

        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveSection("Projects"),
            onEnterBack: () => setActiveSection("Projects"),
        })

    }, [])

    useEffect(() => {
        const elements = document.querySelectorAll('.inner-container')

        for(let i = 0; i<elements.length ; i++){
            
            gsap.fromTo(
                elements[i],
                {
                    opacity: 0,
                    y: 50
                },
                {
                    scrollTrigger:{
                        trigger: elements[i],
                        start: "top 75%",
                        
                    }, 
                    y: 0,
                    opacity: 1,
                    duration: 0.4
                }
    )
            
        }

    }, [])

    return (
        <div className="section projects-section" id="Projects" ref={projectsSection}>
            <div className="container">

                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h2>Projects</h2>
                    </div>
                </div>
            </div>

            <div className="projects-container">
                {data?.map((project, index) => (
                    <div className="project-container" key={index} ref={projectCard}>
                        <div className="container inner-container">
                            
                            <div className="project-screen">
                                <img src={project.screen} alt="project-screen" />
                            </div>

                            <div className="project-details">
                                <div className="project-title">
                                    <h2>{project.name}</h2>
                                </div>
                                <div className="project-description">
                                    <p>{project.description}</p>
                                </div>
                                <div className="actions-btn">
                                    <a href={project.demo_link} className="demo" target="_blank" rel='noreferrer'><Link className='icon'/>Demo</a>
                                    <a href={project.repo_link} className="outlined repo" target="_blank" rel='noreferrer'><Github className='icon'/>Repo</a>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Projects