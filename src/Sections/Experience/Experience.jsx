import React, { useRef, useEffect } from 'react'
import "./Experience.scss"
import { data } from "./ExperienceData"
import ExperienceCard from "../../Components/Experience-Card/Experience-Card"
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = ({setActiveSection}) => {
    // gsap.registerPlugin(ScrollTrigger);
    const experienceSection = useRef(null)
    // useEffect(() => {
    //     const element = experienceSection.current
    //     ScrollTrigger.create({
    //         trigger : element,
    //         start: "top center",
    //         end: "bottom center",
    //         onEnter : ()=> setActiveSection("Experience"),
    //         onEnterBack: ()=> setActiveSection("Experience"),
    //     })

    //     let t1 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: element.querySelector(".icon-node"),
    //             start: "top center",
    //             end: "top center"
    //         }
    //     })
    //     if (window.screen.availWidth > 1240) {


    //         t1.fromTo(
    //             element.querySelectorAll(".icon-node"),
    //             {
    //                 scale: 0,
    //                 opacity: 0,
    //             },
    //             {

    //                 opacity: 1,
    //                 scale: 1,
    //                 duration: 0.4
    //             }
    //         ).from(
    //             element.querySelectorAll(".left-sided .box-container"),
    //             {
    //                 opacity: 0,
    //                 x: -40,
    //             }
    //         )
    //             .from(
    //                 element.querySelectorAll(".right-sided .box-container"),
    //                 {
    //                     opacity: 0,
    //                     x: 40,
    //                     stagger: 0.4
    //                 }
    //             )
    //     } else {
    //         t1.fromTo(
    //             element.querySelectorAll(".icon-node"),
    //             {
    //                 scale: 0,
    //                 opacity: 0,
    //             },
    //             {
    //                 opacity: 1,
    //                 scale: 1,
    //                 duration: 0.4

    //             }
    //         )
    //             .from(
    //                 element.querySelectorAll(".experience-card .box-container"),
    //                 {
    //                     opacity: 0,
    //                     x: 40,
    //                     stagger: 0.4
    //                 }
    //             )
    //     }

    // }, [])

    return (
        <div className="section secondary-section experience-section" id="Experience" ref={experienceSection} onScroll={()=> console.log("Reached")}>
            <div className="overlay"></div>
            <div className="container">

                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>Education</h5>
                    </div>
                </div>
                <div className="timeline-container">
                    <div className="timeline" >
                        {
                            data?.map((item, index) => (
                                <ExperienceCard data={item} key={index} pos={index % 2 === 0 ? "left" : "right"} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;