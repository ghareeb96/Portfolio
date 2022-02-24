import React, { useRef, useEffect } from 'react'
import "./Projects.scss"
import { data } from "./projects-data"
import Card from "../../Components/Project-Card/Card"
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = ({setActiveSection}) => {
    // gsap.registerPlugin(ScrollTrigger);
    const projectsSection = useRef(null)
    // useEffect(()=>{
    //     const element = projectsSection.current

    //     ScrollTrigger.create({
    //         trigger : element,
    //         start: "top center",
    //         end: "bottom center",
    //         onEnter : ()=> setActiveSection("Projects"),
    //         onEnterBack: ()=> setActiveSection("Projects"),
    //     })

    //     gsap.fromTo(
    //         element.querySelectorAll(".project-card"),
    //         {
    //             opacity: 0,
    //             y: 40
    //         },
    //         {
    //             scrollTrigger: {
    //                 trigger: element.querySelectorAll(".project-card"),
    //                 start : "top center",
    //                 end: "top bottom"
    //             },
    //             opacity: 1,
    //             y: 0,
    //             stagger: 0.2
    //         }
    //     )
    // },[])
    return (
        <div className="section projects-section" id="Projects" ref={projectsSection}>
            <div className="container">

                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>Projects</h5>
                    </div>
                </div>

                <div className="projects-container">
                    {data?.map((project, index) => (
                        <Card
                            key={index}
                            data={project}
                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects