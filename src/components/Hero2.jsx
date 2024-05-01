import React from 'react';

const Hero2 = () => {
    return (
        <div>
            <div className='px-20 bg-red-50'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row gap-40">
                        <img
                            src="../../public/images/face.27102e00075d27c19e79 (1).png"
                            className="w-1/2 rounded-lg"/>
                        <div className='bg-red-50'>
                            <h1 className="text-4xl font-bold">Let us handle your
                                <br/>
                                <span className='text-pink-600'>screen Professionally.</span>
                            </h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut
                                assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a</p>
                            <div className="flex gap-10">
                                <div className="place-items-start">
                                    <div className="text-xl font-bold text-secondary">500+</div>
                                    <div className="text-xl font-bold text-secondary">Happy Customers</div>
                                </div>
                                <div className="place-items-start">
                                    <div className="text-xl font-bold text-secondary">16</div>
                                    <div className="text-xl font-bold text-secondary">Total Users</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero2;