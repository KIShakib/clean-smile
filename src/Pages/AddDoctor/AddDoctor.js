import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import SmallSpinner from '../../Shared/SmallSpinner/SmallSpinner';

const AddDoctor = () => {
    useDynamicTitle("Add-Doctor   Admin")


    const [loading, setLoading] = useState(false);
    const imgbbKey = process.env.REACT_APP_imgbb_api_key;
    const { data: appointmentName = [], isLoading, refetch } = useQuery({
        queryKey: ["appointment-name"],
        queryFn: () => fetch("https://doctors-portal-server-nine.vercel.app/appointment-name", {
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    })




    const addDoctor = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const doctorName = form.doctorName.value;
        const doctorEmail = form.doctorEmail.value;
        const specialty = form.specialty.value;
        const image = form.image.files[0];

        // Upload To Imgbb
        const formData = new FormData();
        formData.append("image", image)

        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);

                if (imageData.success) {
                    const doctor = {
                        doctorName,
                        doctorEmail,
                        specialty,
                        image: imageData.data.display_url
                    }
                    console.log(doctor);
                    fetch("https://doctors-portal-server-nine.vercel.app/add-doctor", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success(`${doctorName} Added Successfully...`)
                                setLoading(false);
                                form.reset();
                            }
                        })
                }
            })
            .catch(err => {
                console.log(err);
                setLoading(false)
            })

    }

    return (
        <div className="shadow-2xl rounded h-full">
            <h1 className='text-2xl text-center font-semibold pt-4'>Add A Doctor</h1>
            <div className="card-body">
                <form onSubmit={addDoctor}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='doctorName' placeholder="Doctor Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name='doctorEmail' placeholder="Doctor Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select name='specialty' className="select select-bordered w-full max-w-xs">
                            {
                                appointmentName.map(appointment =>
                                    <option
                                        value={appointment.name}
                                        key={appointment._id}>
                                        {appointment.name}
                                    </option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload Your Photo</span>
                        </label>
                        <input type="file" name='image' className="input input-bordered p-2" />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-neutral">{
                            loading ? <SmallSpinner></SmallSpinner>
                                : "Add A Doctor"
                        }</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;