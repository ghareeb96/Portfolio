import React from 'react'
import "./Experience.scss"
import { data } from "./ExperienceData"
import ExperienceCard from "../../Components/Experience-Card/Experience-Card"

const Experience = () => {

    return (
        <div className="section secondary-section experience-section" id="Experience">
            <div className="container">

            <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>My Previous Experience</h5>
                    </div>
                </div>
                <div className="experience-container">
                    <div className="timeline-container">
                        <div className="timeline">
                            {
                                data?.map((item, index) => (
                                    <ExperienceCard data={item} key={index} pos={index % 2 === 0 ? "left" : "right"} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;