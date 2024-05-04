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
            <div className='min-h-[calc(100vh-324px)]'>
                <Outlet/>
            </div>
            <div>
                <Footer/> 
            </div>
        </div>
    );
};

export default MainLayout;