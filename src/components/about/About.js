import React from 'react';
import './About.css'

export default function About() {
    return (<>
        <div className='about'>
            <div className='about-container'>
                <div className='text-holder'>
                    <div className='about-title'>
                        <div>Transform your brand</div>
                    </div>
                    <div className='about-body'>
                        We are full-service creative agency specializing in helping
                        brands grow fast. Engage your clients through compelling visuals
                        that do most of the marketing for you.
                    </div>
                    <a href="#" className='transform-button'>LEARN MORE</a>
                </div>
            </div>
            <div className='image-holder egg-img'></div>
        </div>
        <div className='about reverse'>
            <div className='about-container'>
                <div className='text-holder'>
                    <div className='about-title'>
                        Stand out to the right audience
                    </div>
                    <div className='about-body'>
                        Using a collaborative formula of designers, researchers,
                        photographers, videographers, and copywriters, we'll
                        build and extend your brand in digital places
                    </div>
                    <a href="#" className='standout-button'>LEARN MORE</a>
                </div>
            </div>
            <div className='image-holder cup-img'></div>
        </div>
        <div className='about'>
            <div className='graphics-section'>
                <div className='section-holder'>
                    <div className='about-title'>Graphic Design</div>
                    <div className='about-body'>
                        Great design makes you memorable. We deliver
                        artwork that underscores your brand message
                        and captures potential client's attention.
                    </div>
                </div>

            </div>
            <div className='photography-section'>
                <div className='section-holder'>
                    <div className='about-title'>Photography</div>
                    <div className='about-body'>
                        Increase your credibility by getting the most
                        stunning, high-quality photos that improve your
                        business image
                    </div>
                </div>
            </div>
        </div>
    </>);
}
