import React from 'react';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import ContactUs from './ContactUs/ContactUs';
import HomeHero from './HomeHero';
import OurServices from './OurServices';
import Reviews from './Reviews/Reviews';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const Home = () => {
    useDynamicTitle("Home")
    return (
        <div>
            <HomeHero></HomeHero>
            <OurServices></OurServices>
            <HomeAppointment></HomeAppointment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;