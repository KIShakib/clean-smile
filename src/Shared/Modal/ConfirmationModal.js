import React from 'react';

const ConfirmationModal = ({ deletingDoctor, handleDeleteDoctor }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-none">
                    <h3 className="font-bold text-lg text-center">Are You Sure To Delete {" "}
                        <span className='text-red-600'>
                            {deletingDoctor?.doctorName}
                        </span>
                    </h3>
                    <h4 className='text-red-600 font-semibold text-center'>If You Delete, It Can't Be Undone !</h4>
                    <div className="modal-action rounded-none flex justify-center">
                        <button onClick={() => handleDeleteDoctor(deletingDoctor)} className='btn btn-sm rounded-none hover:bg-red-600 bg-red-600 border-none'>Confirm</button>
                        <label htmlFor="confirmation-modal" className="btn btn-sm rounded-none">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;