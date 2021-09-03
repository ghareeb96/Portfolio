import React from 'react'
import "./Services.scss"
import { data } from "./services-data"
import Card from "../../Components/Service-card/Card"

const Services = () => {

    return (
        <div className="section secondary-section services-section" id="Services">
            <div className="container">
                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>What can i do</h5>
                    </div>
                </div>

                <div className="cards-section">
                    <div className="cards-container">
                        {data?.map((service, index) => (
                            <Card
                                key={index}
                                data={service}
                            />

                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services