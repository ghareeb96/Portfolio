import React, { useEffect } from 'react'
import "./Experience-Card.scss"

const ExperienceCard = ({ data, pos }) => {
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
        <div className={pos === "left" ? "experience-card left-sided" : "experience-card right-sided"}>
            <div className="box-container">
                <div className="box">
                    <div className="arrow"></div>

                    <div className="organization"><h6>{data.org}</h6></div>
                    <div className="position">
                        <h6>{data.position}, ({data.period})</h6>
                    </div>
                    <div className="desc"><p>{data.desc}</p></div>
                </div>
            </div>
            <div className="icon-node" id={data.id}></div>

        </div>
    )
}

export default ExperienceCard;