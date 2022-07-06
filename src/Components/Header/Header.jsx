import React, { useEffect } from 'react'
import "./Header.scss";
import { ReactComponent as Menu } from './Menu.svg'


const Nav = ({ activeSection }) => {


    const toggleSidebar = () => {
        const headerElement = document.getElementById("header");
        headerElement.classList.toggle("open");
    }

    const closeSidebar = (e) => {
        const headerElement = document.getElementById("header");
        if (!e.target.classList.contains("navbar-links") && headerElement.classList.contains("open")) {
            headerElement.classList.remove("open");
        }
    }
    useEffect(() => {
        const links = document.querySelectorAll(".nav-link")
        links.forEach(link => link.classList.remove("active"))

        document.querySelector(`#${activeSection}-link`).classList.add("active")
    }, [activeSection])



    return (
        <header id="header" >
            <div className="container">


                <div className="logo">
                    <h2>GHAREEB</h2>
                </div>
                <nav className="navbar" onClick={closeSidebar}>

                    <div className="navbar-links">
                        <ul>
                            <li className="nav-link" id="About-link"><a href="#About">About</a></li>
                            <li className="nav-link" id="Services-link"><a href="#Services">Services</a></li>
                            <li className="nav-link" id="Skills-link"><a href="#Skills">Skills</a></li>
                            <li className="nav-link" id="Projects-link"><a href="#Projects">Projects</a></li>
                            <li className="nav-link" id="Contact-link"><a href="#Contact">Contact</a></li>

                        </ul>
                    </div>
                </nav>

                <div className="menu-btn" onClick={toggleSidebar}>
                    <Menu className='icon menu-icon' />
                </div>

            </div>
        </header>

    )

}



export default Nav;