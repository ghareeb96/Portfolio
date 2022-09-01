import React, { useEffect } from 'react'
import "./Skill-Card.scss"


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
    },[])


    return (
        <div className="skill-card">
            <div className="icon" id={data.id}></div>
            <div className="title-bar">
                <div className="title">
                    <h4>
                        {data.title}
                    </h4>

                </div>
                <div className="progress-bar">
                    <div className="progress-container">
                        <div className="progress-inner" style={{width: data.rate +"%"}}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SkillCard;