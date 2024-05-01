import React from 'react';

const Services = () => {
    return (
        <div>
            <div className='px-20 py-8 bg-red-50'>
                <h1 className='text-center text-3xl font-bold pb-10'>Our Awesome Services</h1>
                <div className='flex justify-around'>
                    <div className="card w-96  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="../../public/images/s1.png" alt="Shoes" className="rounded-xl w-20"/>
                        </figure>
                        <div className="card-body items-center text-center pt-0">
                            <h2 className="card-title">Cosmetic Dentistry</h2>
                            <p>$99</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint eum voluptates</p>

                        </div>
                    </div>
                    <div className="card w-96  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="../../public/images/s1.png" alt="Shoes" className="rounded-xl w-20"/>
                        </figure>
                        <div className="card-body items-center text-center pt-0">
                            <h2 className="card-title">Cosmetic Dentistry</h2>
                            <p>$99</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint eum voluptates</p>

                        </div>
                    </div>
                    <div className="card w-96  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="../../public/images/s1.png" alt="Shoes" className="rounded-xl w-20"/>
                        </figure>
                        <div className="card-body items-center text-center pt-0">
                            <h2 className="card-title">Cosmetic Dentistry</h2>
                            <p>$99</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint eum voluptates</p>

                        </div>
                    </div>
                </div>
                <div
                    className="bg-red-50 card-actions mx-auto mt-40 flex items-center justify-center">
                    <button className="btn btn-secondary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Services;