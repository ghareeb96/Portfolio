import React, { useEffect } from 'react'
import "./Card.scss"

const Card = ({ data }) => {

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
        <div className="service-card">
            <div className="icon-container">
                <div className="icon" id={data.id}>
                </div>
            </div>
            <div className="title">
                <h6>
                    {data.title}
                </h6>
            </div>

            <div className="desc">
                <p>
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default Card