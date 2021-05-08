import React, { useEffect } from 'react'
import "./Skill-Card.scss"
import LinearProgressWithLabel from "./ProgressBar"


const SkillCard = ({ data }) => {

    const appendElement = (icon, target) => {
        var parser = new DOMParser().parseFromString(icon, 'text/html');
        const svgTag = parser.body.firstChild
        if (document.getElementById(target).childElementCount === 0) {
            document.getElementById(target).appendChild(svgTag)
        }
    }


    useEffect(() => {
        if (data.icon) {
            appendElement(data.icon, data.id)
        }
    })


    return (
        <div className="skill-card">
            <div className="icon" id={data.id}></div>
            <div className="title-bar">
                <div className="title">
                    <h3>
                        {data.title}
                    </h3>

                </div>
                <div className="progress-bar">
                    <LinearProgressWithLabel value={data.rate} />
                </div>

            </div>
        </div>
    )
}

export default SkillCard;