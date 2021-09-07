import React from 'react'
import "./Projects.scss"
import { data } from "./projects-data"
import Card from "../../Components/Project-Card/Card"

const Projects = () => {

    return (
        <div className="section projects-section" id="Portfolio">
            <div className="container">

                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>My Projects</h5>
                    </div>
                </div>

                <div className="projects-container">
                    {data?.map((project, index) => (
                        <Card
                            key={index}
                            data={project}
                        />

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects