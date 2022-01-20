import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg'
import HamburgerIcon from '../../../assets/images/icon-hamburger.svg';
import './Navbar.css'

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <a href="#" className='logo'><Logo fill="white" /></a>
                </div>
                <div className='navbar-content'>
                    <div className='navbar-menu' id={isMobile ? "hidden" : ""}>
                        <div className='navbar-menu-items'>
                            <div className='clip-triangle'></div>
                            <a href="#" className='navbar-menu-item' onClick={() => setIsMobile(!isMobile)}>About</a>
                            <a href="#" className='navbar-menu-item' onClick={() => setIsMobile(!isMobile)}>Services</a>
                            <a href="#" className='navbar-menu-item' onClick={() => setIsMobile(!isMobile)}>Projects</a>
                            <a href="#" className='navbar-menu-item' onClick={() => setIsMobile(!isMobile)}>
                                <div className='contact-button'>
                                    CONTACT
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="#" className='hamburger-link' onClick={() => setIsMobile(!isMobile)}>
                        <img src={HamburgerIcon} alt=""></img>
                    </a>
                </div>
            </div>
        </>
    );
}
