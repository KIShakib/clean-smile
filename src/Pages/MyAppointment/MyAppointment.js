import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import Spinner from '../../Shared/Spinner/Spinner';
import MySingleAppointment from '../MySingleAppointment/MySingleAppointment';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    useDynamicTitle("My-Appointment");

    const { data: myAppointment = [], isLoading, refetch } = useQuery({
        queryKey: ["myappointments", user?.email],
        queryFn: () => fetch(`https://doctors-portal-server-nine.vercel.app/myappointments?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    })

    const handleRemoveBooking = (_id, name) => {
        console.log(_id, name);
        fetch(`https://doctors-portal-server-nine.vercel.app/delete/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} Deleted Successfully From Your Booking.`);
                    refetch();
                }
            })
    }


    if (isLoading) {
        return <div className='flex justify-center items-center w-full h-full'>
            <Spinner></Spinner>
        </div>
    }

    return (
        <table className="border-collapse w-full lg:mr-20">
            <thead className='bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">TREATMENT NAME</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">DATE</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">SLOT</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    myAppointment.length < 1 && <h3 className='text-center text-lg h-screen w-full flex justify-center items-center'>
                        You Haven't Any Booking Yet. Please
                        <Link to="/appointment" className='underline underline-offset-2 ml-1'>  Booking...</Link></h3>
                }
                {
                    myAppointment?.map(mySingleAppointment =>
                        <MySingleAppointment
                            key={mySingleAppointment._id}
                            mySingleAppointment={mySingleAppointment}
                            handleRemoveBooking={handleRemoveBooking}
                        >

                        </MySingleAppointment>)
                }
            </tbody>
        </table>
    );
};

export default MyAppointment;