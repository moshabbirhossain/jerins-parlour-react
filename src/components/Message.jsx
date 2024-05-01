import React from 'react';

const Message = () => {
    return (
        <div className='bg-red-50'>
            <div>
                <h1 className='text-center text-4xl font-bold py-16'>Let us handle your<br/>project, professionally.</h1>
            </div>
            <div className='w-1/2 mx-auto mb-16'>
                <div className='grid grid-cols-2 gap-6'>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="input input-bordered input-info w-full max-w-xs"/>
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered input-info w-full max-w-xs"/>
                    <input
                        type="email"
                        placeholder="YourEmail"
                        className="input input-bordered input-info w-full max-w-xs"/>
                    <input
                        type="number"
                        placeholder="Phone Number"
                        className="input input-bordered input-info w-full max-w-xs"/>
                </div>
                <div className='mt-6  '>
                    <textarea  name="Message" id="" cols="10" rows="5" placeholder='Your Message' className=' w-full border border-gray-500 rounded-lg p-4'></textarea>
                </div>
            </div>
            <div
                    className="card-actions mx-auto pb-16 flex items-center justify-center">
                    <button className="btn btn-secondary uppercase font-bold">Send Message</button>
            </div>
        </div>
    );
};

export default Message;