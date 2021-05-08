import React, { useState } from 'react'
import "./Skills.scss"
import { data } from "./skills-data"
import SkillCard from "../../Components/Skill-Card/Skill-Card"

const Skills = () => {


    const [skillsData, setSkillsData] = useState(data)
    return (
        <div className="skills">

            <h5 className="headline">MY TECHNICAL SKILLS</h5>

            <div className="filter-bar">
                <ul>
                    <li className="category active"><button>All</button></li>
                    <li className="category"><button>Web Design</button></li>
                    <li className="category"><button>Web Development</button></li>
                    <li className="category"><button>UI / UX</button></li>
                    <li className="category"><button>Programming Languages</button></li>
                </ul>
            </div>
            <div className="skills-container">

                {skillsData.map((skill, index) => (
                    <SkillCard data={skill} key={index} />
                ))}

            </div>
        </div>
    )
}

export default Skills;