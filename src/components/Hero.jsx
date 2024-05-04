import React from 'react';

const Hero = () => {
    return (
        <div className='px-20 pb-2 mt-3 bg-red-50'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="../../public/images/woman.bcedfe65ba779d0d808c.png" className="w-1/2 h-1/3 rounded-lg"/>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="w-1/2 py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut
                            assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                            id nisi.</p>
                        <button className="btn btn-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;