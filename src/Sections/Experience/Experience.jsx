import React, { useState } from 'react'
import "./Experience.scss"
import { data } from "./ExperienceData"
import ExperienceCard from "../../Components/Experience-Card/Experience-Card"

const Experience = () => {

    const [exData, setExData] = useState(data);
    return (
        <div className="experience" id="Experience">
            <h6 className="headline">My Previous Experience</h6>

            <div className="experience-container">
                <div className="filter-bar">
                    <ul>
                        <li className="category active"><button>Education</button></li>
                        <li className="category"><button>Work</button></li>
                    </ul>
                </div>

                <div className="timeline-container">
                    <div className="timeline">
                        {
                            exData.map((item, index) => (
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