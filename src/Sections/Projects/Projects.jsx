import React, { useState, useEffect } from 'react'
import "./Projects.scss"
import { data } from "./projects-data"
import Card from "../../Components/Project-Card/Card"

const Projects = () => {
    const [projectsData, setProjectsData] = useState(data)

    return (
        <div className="section projects" id="Portfolio">

            <h6 className="headline">My Projects</h6>

            <div className="filter-bar">
                <ul>
                    <li className="category active"><button>All</button></li>
                    <li className="category"><button>Javascript</button></li>
                    <li className="category"><button>React.js</button></li>
                    <li className="category"><button>MERN</button></li>
                </ul>
            </div>

            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <Card
                        key={index}
                        data={project}
                    />

                ))}
            </div>
        </div>
    )
}

export default Projects