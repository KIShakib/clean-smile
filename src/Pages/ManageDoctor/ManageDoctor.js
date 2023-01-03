import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import ConfirmationModal from '../../Shared/Modal/ConfirmationModal';
import Spinner from '../../Shared/Spinner/Spinner';
import Doctor from '../Doctor/Doctor';

const ManageDoctor = () => {
    useDynamicTitle("Manage-Doctor  Admin")


    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: () => fetch("https://doctors-portal-server-nine.vercel.app/doctors", {
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    })


    const handleDeleteDoctor = doctor => {

        fetch(`https://doctors-portal-server-nine.vercel.app/delete-doctors/${doctor?._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${doctor.doctorName} Deleted Successfully...`)
                    refetch();
                }
            })

        setDeletingDoctor(null);
    }



    if (isLoading) {
        return <Spinner></Spinner>
    };

    return (
        <div className='w-full'>
            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-8">
                <div className="flex flex-col justify-center h-full">
                    <div className="bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800 text-center text-xl">Manage Doctors</h2>
                        </header>
                        {
                            doctors.length ?
                                <div className="p-3">
                                    <div className="overflow-x-auto">
                                        <table className="table-auto w-full">
                                            <thead className="font-semibold uppercase text-gray-600 bg-gray-50">
                                                <tr>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left"></div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Image</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Name</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Specialty</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Action</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm divide-y divide-gray-100">
                                                {
                                                    doctors?.map((doctor, i) =>
                                                        <Doctor
                                                            key={doctor._id}
                                                            doctor={doctor}
                                                            i={i}
                                                            setDeletingDoctor={setDeletingDoctor}
                                                        >

                                                        </Doctor>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                :
                                <div>
                                    <h3 className='text-lg text-center text-secondary font-semibold py-8'>No Doctor's Available.</h3>
                                </div>
                        }
                    </div>
                </div>
            </section>
            {
                deletingDoctor &&
                <ConfirmationModal
                    deletingDoctor={deletingDoctor}
                    handleDeleteDoctor={handleDeleteDoctor}
                ></ConfirmationModal>}
        </div>
    );
};

export default ManageDoctor;