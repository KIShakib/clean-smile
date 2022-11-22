import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleUser from '../SingleUser/SingleUser';

const AllUsers = () => {

    const { data: allUsers = [], isLoading, refetch } = useQuery({
        queryKey: ["allusers"],
        queryFn: () => fetch('https://doctors-portal-server-nine.vercel.app/allusers')
            .then(res => res.json())
    });


    const handleMakeAdmin = (_id, name) => {
        console.log(_id);
        fetch(`https://doctors-portal-server-nine.vercel.app/user/admin/${_id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success(`${name} Is Now An Admin...!!`);
                    refetch();
                }
                if (data.message) {
                    toast.error(data.message)
                }
            })
    }


    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4 w-full">
            <div className="flex flex-col justify-center h-full">
                <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800 text-center text-2xl">All Users</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-lg font-bold uppercase text-gray-800 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Email</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Role</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Remove User</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {
                                        allUsers?.map(singleUser =>
                                            <SingleUser
                                                key={singleUser._id}
                                                singleUser={singleUser}
                                                handleMakeAdmin={handleMakeAdmin}
                                            >

                                            </SingleUser>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllUsers;