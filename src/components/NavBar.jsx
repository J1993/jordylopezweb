import React from 'react'
import './css/NavBar.css'
import {Link} from "react-router-dom";
import logoWhite from '../images/jordy-lopez-logo-white.png'

const NavBar = () => {
    
    return (
        <nav className="transparent z-depth-0">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo"><img src={logoWhite} alt=""/></Link>
                    <ul className="right ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    </ul>                  
                </div>
            </div>
            

        </nav>
    )
    
}

export default NavBar
