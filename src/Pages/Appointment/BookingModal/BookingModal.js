import { format } from 'date-fns';
import el from 'date-fns/esm/locale/el/index.js';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';

const BookingModal = ({ appointment, setAppointment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, "PP")
    const { name, slots, _id, price } = appointment;


    const handleModalForm = e => {
        e.preventDefault();
        const form = e.target;
        const treatmentName = name;
        const patientName = form.patientName.value;
        const slot = form.slot.value;
        console.log(slot);
        const phone = form.phone.value;
        const email = form.email.value;
        const booking = {
            treatmentName,
            date,
            slot,
            patientName,
            phone,
            email,
            price
        }

        fetch("https://doctors-portal-server-nine.vercel.app/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success("Your Booking Is Confirmed...! Stay With Us.");
                    refetch();
                    form.reset();
                    setAppointment(null);
                }
                else {
                    toast.error(result.message)
                    form.reset();
                    setAppointment(null);
                }
            })



    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative rounded bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div>
                        <form onSubmit={handleModalForm}>
                            <input type="text" defaultValue={date} disabled className="input input-bordered w-full my-2" />
                            <select name="slot" className="select select-bordered w-full my-2">
                                {
                                    slots?.map((slot, idx) => <option defaultValue={slot} key={idx}>{slot}</option>)
                                }
                            </select>
                            <input name='patientName' defaultValue={user?.displayName} type="text" placeholder='Full Name' className="input input-bordered w-full my-2" />
                            <input name='phone' type="phone" placeholder='Phone Number' required className="input input-bordered w-full my-2" />
                            <input name='email' type="email" defaultValue={user?.email} required placeholder='Email' className="input input-bordered w-full my-2" />
                            <input type="submit" value="SUBMIT" className="input input-bordered w-full my-2 bg-neutral text-slate-300 font-bold" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;