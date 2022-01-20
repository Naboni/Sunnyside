import React from 'react';
import './Hero.css'
import { ReactComponent as ArrowDown } from '../../assets/images/icon-arrow-down.svg'
import Navbar from '../common/navbar/Navbar';

export default function Hero() {
    return (
        <>
            <div className='hero'>
                <Navbar />
                <div className='hero-container'>
                    <div className='hero-title'>WE ARE CREATIVES</div>
                    <div className='hero-down-arrow'><ArrowDown /></div>
                </div>
            </div>
        </>
    );
}
