import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import SingleInfo from './SingleInfo';

const HomeHeroInfo = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: '32 Charpara, Mymensingh',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: '+8801832302170',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ];


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 mt-48'>
            {
                cardData.map(card => <SingleInfo key={card.id} card={card}></SingleInfo>)
            }
        </div>
    );
};

export default HomeHeroInfo;