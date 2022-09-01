import React, {useRef, useEffect} from 'react'
import "./Services.scss"
import { data } from "./services-data"
import Card from "../../Components/Service-card/Card"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = ({setActiveSection}) => {
    gsap.registerPlugin(ScrollTrigger);
    const serviceSection = useRef(null);
    
    useEffect(()=>{

        const element = serviceSection.current;

        ScrollTrigger.create({
            trigger : element,
            start: "top center",
            end: "bottom center",
            onEnter : ()=> {
                setActiveSection("Services")
                document.querySelector("header").classList.add("white-header")
            },
            onEnterBack: ()=> setActiveSection("Services"),
            onLeaveBack:()=> {
                setActiveSection("About")
                document.querySelector("header").classList.remove("white-header")
            }
            
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
                duration: 0.4,
                stagger: 0.1,
                yoyo: true,
                scrollTrigger:{
                    trigger: element.querySelectorAll(".service-card"),
                    start : "top center",
                    end: "bottom center+=10",
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
                        <h2>What can i do</h2>
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