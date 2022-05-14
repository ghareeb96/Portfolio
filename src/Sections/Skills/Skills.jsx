import React, { useRef, useEffect } from 'react'
import "./Skills.scss"
import { data } from "./skills-data"
import SkillCard from "../../Components/Skill-Card/Skill-Card"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = ({ setActiveSection }) => {
    gsap.registerPlugin(ScrollTrigger);
    const skillsSection = useRef(null)

    useEffect(() => {
        const element = skillsSection.current;

        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
                setActiveSection("Skills")
                document.querySelectorAll(".skill-card").forEach(item=>{
                    item.classList.add("active-skill-card")
                })
            }
            ,
            onEnterBack: () => setActiveSection("Skills"),

        })


        gsap.from(
            element.querySelectorAll(".progress-inner"),
            {
                width: 0,
                duration: 1,
                ease: "ease-out",
                scrollTrigger:{
                    trigger: element.querySelector(".skill-card"),
                    start: "top center",
                    end: "bottom center+=10",
                },
            },
            {
                

            }
        )
    }, [])

    return (
        <div className="section skills-section" id="Skills" ref={skillsSection}>
            <div className="container">


                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>Technical Skills</h5>
                    </div>
                </div>

                <div className="skills-container">

                    {data?.map((skill, index) => (
                        <SkillCard data={skill} key={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skills;