import React from 'react';
import Navbar from '../components/Navbar';
import Phone from '../components/Phone';

const Portfolio = () => {
    return (
        <div>
            {/* <div className="h-16">
                <Navbar/>
            </div> */}
            <h1 className='text-center font-bold m-10'>This is Portfolio section</h1>
            <Phone/>
        </div>
    );
};

export default Portfolio;