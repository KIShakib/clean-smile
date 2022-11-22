import React from 'react';
import dentist from "../../../assets/images/doctor.png";
import appointmentBg from "../../../assets/images/appointment.png";

const HomeAppointment = () => {
    return (
        <div data-aos="fade-right" className="hero" style={{ backgroundImage: `url(${appointmentBg})` }}>
            <div className="hero-content flex-col lg:flex-row pb-2">
                <img src={dentist} className=" w-[600px] -mt-40 rounded-lg -mb-2" alt='Dentist' />
                <div>
                    <h4 className='text-secondary font-bold mb-4'>Appointment</h4>
                    <h1 className="text-3xl text-white font-semibold">Make An Appointment Today.</h1>
                    <p className="py-6 text-white text-justify">You should make an appointment by calling or by email. Do not try to make appointments by text, unless you are simply asking a good friend if they would like to have lunch. When making an appointment you should give the person your name and the reason for wanting an appointment.</p>
                    <button className="btn btn-primary rounded-md border-none btn-sm p-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Take Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;