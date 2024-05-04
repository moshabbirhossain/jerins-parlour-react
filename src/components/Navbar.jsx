import React from 'react';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
    const [theme,setTheme] = useState('light')
    useEffect(() => { 
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html') .setAttribute('data-theme', localTheme) },
    [theme]);
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    //console.log(theme);
    return (
        <div className='nav'>
            <div className="px-10  navbar shadow-xl">
                <Link to='/' className="flex-1">
                    <img
                        src="../../public/images/logo.f07059ac3cd8ba600f56.png"
                        alt=""
                        className='w-14'/>
                    <h1>
                        <span className='text-xl font-medium text-black'>Jerin's</span>
                        <br/>
                        <span className='text-xl font-small text-black'>
                            Parlour</span>
                    </h1>
                </Link>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <Link to='/' className='text-black text-small text-lg pl-4 py-2'>
                            {/* <a className='text-black text-small text-lg pl-4 py-2'>Home</a> */}
                            Home
                        </Link>
                        <Link to='/portfolio' className='text-black text-small text-lg pl-4 py-2'>
                            {/* <a href="" className='text-black text-small text-lg pl-4 py-2'>Our Portfolio</a> */}
                            Our Portfolio
                        </Link>
                        <Link to='/team' className='text-black text-small text-lg pl-4 py-2'>
                            {/* <a href="" className='text-black text-small text-lg pl-4 py-2'>Team</a> */}
                            Team
                        </Link>
                        <Link to='/contact' className='text-black text-small text-lg pl-4 py-2'>
                            {/* <a href="" className='text-black text-small text-lg pl-4 py-2'>Contact Us</a> */}
                            Contact Us
                        </Link>
                        <Link to='/signup' className='text-black text-small text-lg pl-4 py-2'>
                            {/* <a href="" className='text-black text-small text-lg pl-4 py-2'>Sign Up</a> */}
                            Sign Up
                        </Link>
                        <Link to='/login' className='text-black text-small text-lg pl-4 py-2'>
                            {/* <a href="" className='text-black text-small text-lg pl-4 py-2'>Login</a> */}
                            Login
                        </Link>
                    </ul>
                    <label className="cursor-pointer grid place-items-center">
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                        <svg
                            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <svg
                            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;