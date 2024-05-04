import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
// import Home from '../pages/Home';
// import Portfolio from '../pages/Portfolio';

const MainLayout = () => {
    return (
        <div className=''>
            <div className="h-16">
                <Navbar/>
            </div>
            {/* <Home/>
            <Portfolio/> */}
            <Outlet/>
            <div>
                <Footer/> 
            </div>
        </div>
    );
};

export default MainLayout;