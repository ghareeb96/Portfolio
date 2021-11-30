import React from 'react'
import "./Header.scss";
import { ReactComponent as Menu } from './Menu.svg'


const Nav = () => {


    const toggleSidebar = () => {
        const headerElement = document.getElementById("header");
        headerElement.classList.toggle("open");
    }

    return (
        <header id="header" >
            <div className="container">

                <nav className="navbar">
                    <div className="navbar-links">
                        <ul>
                            <li className="nav-link active"><a href="#About">About</a></li>
                            <li className="nav-link"><a href="#Services">Services</a></li>
                            <li className="nav-link"><a href="#Skills">Skills</a></li>
                            <li className="nav-link"><a href="#Experience">Experience</a></li>
                            <li className="nav-link"><a href="#Portfolio">Portfolio</a></li>
                            <li className="nav-link"><a href="#Contact">Contact</a></li>
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