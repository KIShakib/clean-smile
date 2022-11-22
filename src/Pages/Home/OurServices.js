import React from 'react';
import fluorideImg from "../../assets/images/fluoride.png"
import cavityImg from "../../assets/images/cavity.png"
import teethWhitingImg from "../../assets/images/whitening.png"
import Service from './Service';
import ServiceBanner from './ServiceBanner';



const OurServices = () => {

    const services = [
        {
            name: "Fluoride Treatment",
            description: "We provide Fluoride Treatment by experienced dentist. It is very useful treatment.",
            img: fluorideImg
        },
        {
            name: "Cavity Filling",
            description: "This treatment is given to those who have broken teeth or cavities.",
            img: cavityImg
        },
        {
            name: "Teeth Whitening",
            description: "This is a  treatment for cleaning teeth and mouth for white teeth and clean mouth.",
            img: teethWhitingImg
        },
    ]


    return (
        <div className='my-40 px-10'>
            <div className='text-center my-6'>
                <p className='text-secondary font-bold'>OUR SERVICES</p>
                <h3 className='text-3xl font-semibold'>Service We Provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map((service, idx) => <Service key={idx} service={service}></Service>)
                }
            </div>
            <div>
                <ServiceBanner></ServiceBanner>
            </div>
        </div>
    );
};

export default OurServices;