import React from 'react'
import "./Card.scss"
import {ReactComponent as View} from '../../Assets/Icons/preview.svg'
import {ReactComponent as Code} from '../../Assets/Icons/code.svg'


const Card = ({ data }) => {


    return (
        <div className="project-card">
            <div className="project-screen">
                <img src={data.screen} alt="Screenshot" />
            </div>
            <div className="project-overlay">
                <div className="title">
                    <h4>{data.name}</h4>
                </div>
                <div className="project-actions">
                    <a className="demo" href={data.demo_link} target='_blank' rel="noreferrer">
                        <View className='icon'/>
                        Visit
                    </a>
                    <a className="repo" href={data.repo_link} target='_blank' rel="noreferrer">
                        <Code className='icon'/>
                        Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;