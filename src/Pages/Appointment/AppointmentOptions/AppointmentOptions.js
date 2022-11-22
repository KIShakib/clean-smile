import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../../../Shared/Spinner/Spinner';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentOptions = ({ selectedDate }) => {
    const [appointment, setAppointment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], isLoading, refetch } = useQuery({
        queryKey: ["appointmentOptions", date],
        queryFn: () => fetch(`https://doctors-portal-server-nine.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })


    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='my-40'>
            <h2 className='text-center text-secondary text-xl font-bold'>
                Available Appointments on {format(selectedDate, 'PP')}
            </h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 my-10'>
                {
                    appointmentOptions?.map(appointmentOption =>
                        <AppointmentOption
                            key={appointmentOption._id}
                            appointmentOption={appointmentOption}
                            setAppointment={setAppointment}
                        >

                        </AppointmentOption>)
                }
            </div>
            {
                appointment &&
                <BookingModal
                    appointment={appointment}
                    setAppointment={setAppointment}
                    selectedDate={selectedDate}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AppointmentOptions;