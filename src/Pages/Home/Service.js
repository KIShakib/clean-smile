import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div data-aos="flip-right" className="card bg-base-100 shadow-xl rounded-md">
            <figure className="px-10 pt-10">
                <img src={img} alt="Treatment Service" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;