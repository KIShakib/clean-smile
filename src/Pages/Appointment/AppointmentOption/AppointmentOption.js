import React from 'react';

const AppointmentOption = ({ appointmentOption, setAppointment }) => {
    const { _id, name, slots, price } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl rounded-md">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg font-bold text-secondary">{name}</h2>
                <h2 className="card-title text-base font-semibold text-secondary">Visiting Fee : ${price}</h2>
                <p className='text-slate-900 font-semibold'>{slots[1]}</p>
                <p>{slots.length} Slot Available</p>
                <label
                    htmlFor="booking-modal"
                    disabled={slots?.length === 0}
                    className="btn btn-primary rounded-md border-none btn-sm p-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]"
                    onClick={() => setAppointment(appointmentOption)}
                >BOOK APPOINTMENT</label>
            </div>
        </div>
    );
};

export default AppointmentOption;