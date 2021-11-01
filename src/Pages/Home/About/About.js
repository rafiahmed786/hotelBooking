import React from 'react';
import './About.css'
import image from '../../Image/about-img.jpg'

const About = () => {
    return (
        <div id="about" className="about-container mb-5">
            <div className="w-50 col">
                <img className="w-100" src={image} alt="" />
            </div>
            <div className="w-50 p-5 text-start col col-right d-flex justify-content-center flex-column">
                <h3 style={{color:'#c5854a'}}>About Booking.com</h3>
                <p className='text-light'><b>Booking.com’s mission is to make it easier for everyone to experience the world.</b>By investing in the technology that helps take the friction out of travel, Booking.com seamlessly connects millions of travellers with memorable experiences, a range of transport options and incredible places to stay - from homes to hotels and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, Booking.com enables properties all over the world to reach a global audience and grow their businesses.</p>
                <p className='text-light'>No matter where you want to go or what you want to do, Booking.com makes it easy and backs it all up with 24/7 customer support.</p>
            </div>
        </div>
    );
};

export default About;