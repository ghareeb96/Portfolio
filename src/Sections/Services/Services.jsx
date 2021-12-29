import React, {useRef, useEffect} from 'react'
import "./Services.scss"
import { data } from "./services-data"
import Card from "../../Components/Service-card/Card"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = ({activeSection, setActiveSection}) => {
    gsap.registerPlugin(ScrollTrigger);
    const serviceSection = useRef(null);
    
    useEffect(()=>{

        const element = serviceSection.current;

        ScrollTrigger.create({
            trigger : element,
            start: "top center",
            end: "bottom center",
            onEnter : ()=> setActiveSection("Services"),
            onEnterBack: ()=> setActiveSection("Services"),
            onLeaveBack:()=> setActiveSection("About")
            
        })
        gsap.fromTo(
            element.querySelectorAll(".service-card"),
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
                    trigger: element.querySelectorAll(".service-card"),
                    start : "top center",
                    end : "top center",
                }
            }
        )
    },[])


    return (
        <div className="section secondary-section services-section" id="Services" ref={serviceSection}>
            <div className="overlay"></div>
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