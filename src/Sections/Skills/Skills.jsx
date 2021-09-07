import React from 'react'
import "./Skills.scss"
import { data } from "./skills-data"
import SkillCard from "../../Components/Skill-Card/Skill-Card"

const Skills = () => {


    return (
        <div className="section skills-section" id="Skills">
            <div className="container">


                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>My Technical Skills</h5>
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