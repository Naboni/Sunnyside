import React from 'react';
import './Testimonials.css'
import client1 from '../../assets/images/image-emily.jpg'
import client2 from '../../assets/images/image-thomas.jpg'
import client3 from '../../assets/images/image-jennie.jpg'

export default function Testimonials() {
    return (
        <>
            <div className="testimonials">
                <div className="testimonials-section">
                    <div className="testimonials-title">CLIENT TESTIMONIALS</div>
                    <div className="testimonials-inner-wrap">

                        <div className="user-wrap">
                            <img src={client1} alt="" className="user-image" />
                            <div className="user-testimonial">
                                We put our trust in Sunnyside and they
                                delivered, making sure our needs were met
                                and deadlines were always hit.
                            </div>
                            <div className="user-info">
                                <div className="user-name">Emily R.</div>
                                <div className="user-label">Marketing Manager</div>
                            </div>
                        </div>

                        <div className="user-wrap">
                            <img src={client2} alt="" className="user-image" />
                            <div className="user-testimonial">
                                Sunnyside's enthusiasm coupled with their
                                keen interest in our brand's success made it
                                a satisfying and enjoyable experience.
                            </div>
                            <div className="user-info">
                                <div className="user-name">Thomas S.</div>
                                <div className="user-label">Chief Operating Officer</div>
                            </div>
                        </div>

                        <div className="user-wrap">
                            <img src={client3} alt="" className="user-image" />
                            <div className="user-testimonial">
                                Incredible end result! our sales increased
                                over 400% when we worked with Sunnyside.
                                Highly recommended!
                            </div>
                            <div className="user-info">
                                <div className="user-name">Jennie F.</div>
                                <div className="user-label">Business Owner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
