import React from 'react';
import Lottie from 'lottie-react'
import heroBg from "../../assets/images/bg.png"
import HomeHeroInfo from './HomeHeroInfo';
import doctorCare from "../../assets/82890-dentist.json";
import { Link } from 'react-router-dom';

const HomeHero = () => {
    return (
        <div className='bg-cover bg-opacity-100 mt-10' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-10">
                    <div className="w-full rounded-none">
                        <Lottie animationData={doctorCare} loop={true} />
                    </div>
                    <div className=''>
                        <h1 className="text-4xl font-bold">Your best life begins with a <br />
                            <span className='text-5xl tracking-wider text-secondary' style={{ fontFamily: "'Kaushan Script', cursive" }}>Smile.</span>
                        </h1>
                        <p className="py-6">Since 1997, We has served the Rogue Valley community. He helps patients take control of their dental health and achieve the smiles they've always wanted.</p>
                        <Link to="/appointment" className="btn btn-primary rounded-md border-none btn-sm p-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Get Started</Link>
                    </div>
                </div>
            </div>
            <HomeHeroInfo></HomeHeroInfo>
        </div>
    );
};

export default HomeHero;