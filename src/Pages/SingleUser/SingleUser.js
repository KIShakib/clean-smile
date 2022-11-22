import React from 'react';

const SingleUser = ({ singleUser, handleMakeAdmin }) => {
    const { _id, name, email } = singleUser;
    return (
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-semibold">{name}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{email}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">
                    {
                        singleUser?.role !== "Admin" ? <button onClick={() => handleMakeAdmin(_id, name)} className="btn btn-xs rounded">Make Admin</button>
                            : <button className='btn btn-xs btn-secondary'>{singleUser?.role}</button>
                    }
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-lg text-center">
                    <button className="btn btn-xs rounded bg-red-700 border-none">Remove</button>
                </div>
            </td>
        </tr>
    );
};

export default SingleUser;