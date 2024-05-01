import React from 'react';

const Navbar = () => {
    return (
        <div className='px-20 py-8 bg-red-50'>
            <div className="navbar">
                <div className="flex-1">
                    <h1><span className='text-xl font-medium text-black'>Jerin's</span><span className='text-xl font-small text-black'> Parlour</span></h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-black text-small text-lg px-4 py-2'>Home</li>
                        <li className='text-black text-small text-lg px-4 py-2'>Our Portfolio</li>
                        <li className='text-black text-small text-lg px-4 py-2'>Team</li>
                        <li className='text-black text-small text-lg px-4 py-2'>Contact Us</li>
                        <li className='text-black text-small text-lg px-4 py-2'>Sign Up</li>
                        <li className='text-black text-small text-lg px-4 py-2'>Login</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;