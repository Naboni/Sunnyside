import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg'
import HamburgerIcon from '../../../assets/images/icon-hamburger.svg';
import './Navbar.css'

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <a href="#" className='logo'><Logo fill="white" /></a>
                </div>
                <div className='navbar-content'>
                    <div className='navbar-menu' id={isMobile ? "hidden" : ""}>
                        <div className='navbar-menu-items'>
                            <div className='spacer'></div>
                            <a href="#" className='navbar-menu-item'>About</a>
                            <a href="#" className='navbar-menu-item'>Services</a>
                            <a href="#" className='navbar-menu-item'>Projects</a>
                            <a href="#" className='navbar-menu-item'>
                                <div className='contact-button'>
                                    CONTACT
                                </div>
                            </a>
                        </div>
                    </div>
                    <a href="#" className='hamburger-link'>
                        <img src={HamburgerIcon} alt=""></img>
                    </a>
                </div>
            </div>
        </>
    );
}
