import React from 'react'
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



    return (
        <header id="header" >
            <div className="container">

                <nav className="navbar" onClick={closeSidebar}>
                    <div className="navbar-links">
                        <ul>
                            <li className={activeSection.About} ><a href="#About">About</a></li>
                            <li className={activeSection.Services} ><a href="#Services">Services</a></li>
                            <li className={activeSection.Skills} ><a href="#Skills">Skills</a></li>
                            <li className={activeSection.Experience}><a href="#Experience">Experience</a></li>
                            <li className={activeSection.Portfolio} ><a href="#Projects">Projects</a></li>
                            <li className={activeSection.Contact} ><a href="#Contact">Contact</a></li>

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