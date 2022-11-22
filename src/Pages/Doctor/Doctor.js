import React from 'react';

const Doctor = ({ doctor, i, setDeletingDoctor }) => {
    return (
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{i + 1}</div>
            </td>
            <td>
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src={doctor?.image} alt="Doctor" />
                    </div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <h3 className="text-left text-lg font-semibold">{doctor?.doctorName}</h3>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{doctor?.specialty}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error text-left rounded">
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default Doctor;