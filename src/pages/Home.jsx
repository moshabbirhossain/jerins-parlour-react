import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Hero2 from '../components/Hero2';
import Testimonials from '../components/Testimonials';
import Message from '../components/Message';
import Footer from '../components/Footer';

const Home = () => {
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

export default Home;