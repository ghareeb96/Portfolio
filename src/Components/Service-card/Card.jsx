import React, { useState, useEffect } from 'react'
import "./Card.scss"


const Card = (props) => {

    const appendElement = (icon, target) => {
        var parser = new DOMParser().parseFromString(icon, 'text/html');
        const svgTag = parser.body.firstChild
        if (document.getElementById(target).childElementCount === 0) {
            document.getElementById(target).appendChild(svgTag)
        }
    }


    useEffect(() => {
        if (props.data.icon) {

            appendElement(props.data.icon, props.data.id)
        }
    }, [props.data.icon])


    return (
        <div className="service-card">
            <div className="icon-container">
                <div className="icon" id={props.data.id}>
                </div>
            </div>

            <div className="card-content">
                <div className="title">
                    <h3>
                        {props.data.title}
                    </h3>
                </div>
                <div className="desc">
                    <p>
                        {props.data.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card