import React from 'react';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const ContactUs = () => {
    useDynamicTitle("Contact-Us")
    const handleContactForm = e => {
        e.preventDefault();
    }
    return (
        <div className='py-20 bg-bottom bg-no-repeat' >
            <div className='text-center mb-4'>
                <p className='text-secondary font-bold text-2xl'>Contact Us</p>
                <h4 className="text-3xl text-white font-semibold">Stay connected with us</h4>
            </div>
            <div>
                <form onSubmit={handleContactForm} className='flex flex-col lg:w-1/3 mx-auto gap-5 px-5'>
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                    <input type="text" placeholder="Your Subject" className="input input-bordered w-full" />
                    <textarea className="textarea textarea-bordered" placeholder="Your Message..."></textarea>
                    <input className="input input-bordered w-1/4 mx-auto text-bold text-white rounded-md border-none btn-sm bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]" type="submit" value="SUBMIT" />
                </form>
            </div>

        </div>
    );
};

export default ContactUs;