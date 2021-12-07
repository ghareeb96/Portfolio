import React, {useRef, useEffect} from 'react'
import "./Skills.scss"
import { data } from "./skills-data"
import SkillCard from "../../Components/Skill-Card/Skill-Card"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
    gsap.registerPlugin(ScrollTrigger);
    const skills = useRef(null)

    useEffect(() => {
        const element = skills.current;
        gsap.fromTo(
            element.querySelectorAll(".MuiLinearProgress-barColorPrimary"),
            {
                width: 0
            },
            {
                scrollTrigger:{
                    trigger: element.querySelector(".skill-card"),
                    start: "top center",
                    end: "top center"
                },
                width: "100%",
                duration: 1,
                ease: "power2"
                
            }
        )
    }, [])

    return (
        <div className="section skills-section" id="Skills">
            <div className="container">


                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>Technical Skills</h5>
                    </div>
                </div>

                <div className="skills-container" ref={skills}>

                    {data?.map((skill, index) => (
                        <SkillCard data={skill} key={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skills;