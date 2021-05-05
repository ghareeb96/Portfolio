import React, { useState, useEffect } from 'react'
import "./Services.scss"
import { data } from "./services-data"
import Card from "../../Components/Service-card/Card"

const Services = () => {
    const [servicesData, setServicesData] = useState(data)




    return (
        <div className="services" id="Services">

            <h5 className="headline">WHAT CAN I DO</h5>

            <div className="cards-container">
                {servicesData.map((service, index) => (
                    <Card
                        key={index}
                        data={service}
                    />

                ))}
            </div>
        </div>
    )
}

export default Services