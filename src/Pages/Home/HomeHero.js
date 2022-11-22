import React from 'react';
import heroImage from "../../assets/images/chair.png"
import heroBg from "../../assets/images/bg.png"
import HomeHeroInfo from './HomeHeroInfo';

const HomeHero = () => {
    return (
        <div className='bg-cover bg-opacity-100 mt-10' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-10">
                    <img src={heroImage} className=" shadow-2xl w-full h-96 rounded-none" alt="Chair For Patients" />
                    <div className=''>
                        <h1 className="text-4xl font-bold">Your New Smile Starts <br /> Here</h1>
                        <p className="py-6">Since 1997, We has served the Rogue Valley community. He helps patients take control of their dental health and achieve the smiles they've always wanted.</p>
                        <button className="btn btn-primary rounded-md border-none btn-sm p-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Get Started</button>
                    </div>
                </div>
            </div>
            <HomeHeroInfo></HomeHeroInfo>
        </div>
    );
};

export default HomeHero;