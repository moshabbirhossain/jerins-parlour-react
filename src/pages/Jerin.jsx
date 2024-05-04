import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Hero2 from '../components/Hero2';
import Testimonials from '../components/Testimonials';
import Message from '../components/Message';

const Jerin = () => {
    return (
        <div>
            <div>
                {/* <Navbar/> */}
                <Hero/>
                <Services/>
                <Hero2/>
                <Testimonials/>
                <Message/>
                {/* <Footer/> */}
            </div>
        </div>
    );
};

export default Jerin;