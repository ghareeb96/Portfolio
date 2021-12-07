import React, {useRef, useEffect} from 'react'
import "./Services.scss"
import { data } from "./services-data"
import Card from "../../Components/Service-card/Card"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
    gsap.registerPlugin(ScrollTrigger);
    const serviceContainer = useRef(null);
    useEffect(()=>{
        const container = serviceContainer.current;
        gsap.fromTo(
            container.querySelectorAll(".service-card"),
            {
                y:20,
                opacity:0
            },
            {
                y:0,
                opacity:1,
                stagger:{
                    each: 0.2,
                    yoyo: true
                },
                duration: 0.2,
                scrollTrigger:{
                    trigger: container.querySelectorAll(".service-card"),
                    start : "top center",
                    end : "top center",
                    // scrub: true
                }
            }
        )
    })


    return (
        <div className="section secondary-section services-section" id="Services">
            <div className="overlay"></div>
            <div className="container">
                <div className="headline">
                    <div className="left-line"></div>
                    <div className="headline-typo">
                        <h5>What can i do</h5>
                    </div>
                </div>

                <div className="cards-section" ref={serviceContainer}>
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