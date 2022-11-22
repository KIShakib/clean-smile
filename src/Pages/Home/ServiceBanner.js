import React from 'react';
import childTreatmentImg from "../../assets/images/treatment.png";

const ServiceBanner = () => {
    return (
        <div className="hero lg:w-[90%] mx-auto mt-28">
            <div className="hero-content flex-col lg:flex-row lg:px-10 gap-20">
                <img src={childTreatmentImg} className=" shadow-2xl w-full h-full rounded" alt="Chair For Patients" />
                <div className='w-full'>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care <br /> On Your Terms</h1>
                    <p className="py-6 text-justify">We are professionals in dental hygiene and teeth whitening in Bangladesh. Our goal is to provide superior services in the field of teeth whitening and dental hygiene, which include an individual approach, customer education and various benefits that customers can use. We perform professional dental hygiene and gentle teeth whitening without hydrogen peroxide in our modern premises, using the most modern methods and technologies in our work.</p>
                    <button className="btn btn-primary rounded-md border-none btn-sm p-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;