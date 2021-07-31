import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

function Navbar() {
    const [clicked, setClick] = useState (false);

    const handleClick = () => setClick (!clicked);

    const mobileMenu = () => setClick (false);

    return (
        <nav className = 'navibar'>
                <Link to = "/" className = "navibar-logo">
                Swift Tailor <i className = "fas fa-cut"></i>
                </Link>
                <div className = "menu-icon" onClick = {handleClick}>
                    <i className = {clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
                <ul className = { clicked ? 'navi-menu active' : 'navi-menu'}>
                    <li className = 'navi-item'>
                        <Link to= "/" className = 'navi-links' onClick = {mobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className = 'navi-item'>
                        <Link to= "/scanner" className = 'navi-links' onClick = {mobileMenu}>
                            Scanner
                        </Link>
                    </li>

                    <li className = 'navi-item'>
                        <Link to= "/body-shapes" className = 'navi-links' onClick = {mobileMenu}>
                            Body Shapes
                        </Link>
                    </li>

                    <li className = 'navi-item'>
                        <Link to= "/shop" className = 'navi-links' onClick = {mobileMenu}>
                            Shop
                        </Link>
                    </li>

                    <li className = 'navi-item'>
                        <Link to= "/about-us" className = 'navi-links' onClick = {mobileMenu}>
                            About Us
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar