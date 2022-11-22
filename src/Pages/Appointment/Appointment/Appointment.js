import React, { useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import AppointmentTop from '../AppointmentTop/AppointmentTop';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentTop 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            >
            </AppointmentTop>
            <AppointmentOptions selectedDate={selectedDate}></AppointmentOptions>
        </div>
    );
};

export default Appointment;