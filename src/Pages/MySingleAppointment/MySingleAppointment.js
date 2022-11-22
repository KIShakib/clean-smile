import React from 'react';
import { Link } from 'react-router-dom';

const MySingleAppointment = ({ mySingleAppointment, handleRemoveBooking }) => {
    const { _id, treatmentName, slot, date } = mySingleAppointment;
    return (
        <tr className="bg-gray-400 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">TREATMENT NAME</span>
                <span className="rounded bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-2 font-bold">{treatmentName}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">DATE</span>
                <span className="rounded bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-2 font-bold">{date}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">SLOT</span>
                <span className="rounded bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-2 font-bold">{slot}</span>
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                {
                    mySingleAppointment?.paid
                        ?
                        <div className="mr-1 text-black border-none rounded ">Paid ✅</div>
                        :
                        <>
                            <Link to={`/dashboard/appointment/payment/${_id}`}>
                                <button className="mr-1 btn btn-sm text-black bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none rounded ">Payment</button>
                            </Link>
                            <button
                                onClick={() => handleRemoveBooking(_id, treatmentName)}
                                className="ml-1 btn btn-sm bg-gradient-to-r from-red-500 to-red-600 border-none rounded">
                                Remove
                            </button>
                        </>
                }
            </td>
        </tr>
    );
};

export default MySingleAppointment;