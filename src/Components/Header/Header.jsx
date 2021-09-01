import React from 'react'
import "./Header.scss";

const Nav = () => {
    return (
        <header>
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
        </header>

    )

}



export default Nav;