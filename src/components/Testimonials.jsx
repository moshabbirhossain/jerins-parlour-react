import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <div className='px-20 '>
                <h1 className='text-center text-3xl font-bold py-16'>Testimonials</h1>
                <div className='flex justify-around'>
                    <div className="card w-96 shadow-xl">
                        <div className='flex flex-start pl-10 pt-10'>
                            <figure className='gap-4'>
                                <img src="../../public/images/T1.png" alt="Shoes" className="w-16 rounded-xl"/>
                                <div className="font-bold text-xl">
                                    <p>Nash Patrik</p>
                                    <p>CEO, Manpol</p>
                                </div>
                            </figure>
                        </div>
                        <div className="card-body pl-10">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet
                                ratione dolores facere ducimus.</p>
                            <div>
                                <div className="rating pt-0">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        checked/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 shadow-xl">
                        <div className='flex flex-start pl-10 pt-10'>
                            <figure className='gap-4'>
                                <img src="../../public/images/T2.png" alt="Shoes" className="w-16 rounded-xl"/>
                                <div className="font-bold text-xl">
                                    <p>Miriam Barron</p>
                                    <p>CEO, Manpol</p>
                                </div>
                            </figure>
                        </div>
                        <div className="card-body pl-10">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet
                                ratione dolores facere ducimus.</p>
                            <div>
                                <div className="rating pt-0">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        checked/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 shadow-xl">
                        <div className='flex flex-start pl-10 pt-10'>
                            <figure className='gap-4'>
                                <img src="../../public/images/T3.png" alt="Shoes" className="w-16 rounded-xl"/>
                                <div className="font-bold text-xl">
                                    <p>Bria Malane</p>
                                    <p>CEO, Manpol</p>
                                </div>
                            </figure>
                        </div>
                        <div className="card-body pl-10">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet
                                ratione dolores facere ducimus.</p>
                            <div>
                                <div className="rating pt-0">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        checked/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;