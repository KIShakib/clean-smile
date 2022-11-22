import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import SmallSpinner from '../../Shared/SmallSpinner/SmallSpinner';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [loading, setLoading] = useState(false)
    const { signUpWithEmailPassword, updateUserProfile, logOutUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState("");

    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate("/login");
    }



    const handleSignUpUser = e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const photoURL = form.photoURL.value;
        const userEmail = form.userEmail.value;
        const password = form.password.value;


        signUpWithEmailPassword(userEmail, password)
            .then(result => {
                handleUpdateProfile(userName, photoURL);

                saveUser(userName, userEmail);
                logOutUser();
                toast.success("Your Account Created Successfully. Thanks For Signup. Now Please Login...");
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message.slice(10))
                setLoading(false);
            })

    }

    const handleUpdateProfile = (userName, photoURL) => {
        const profile = {
            displayName: userName,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.error(err))
    }


    const saveUser = (name, email) => {

        const user = {
            name,
            email
        }
        fetch("https://doctors-portal-server-nine.vercel.app/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // getUserToken(email);
                setCreatedUserEmail(email);
                setLoading(false);
            })
    }

    // const getUserToken = email => {
    //     fetch(`https://doctors-portal-server-nine.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.accessToken) {
    //                 localStorage.setItem("accessToken", data.accessToken);
    //             }
    //         })
    // }

    return (
        <div className="hero min-h-screen text-neutral">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded">
                <div
                    className="card-body">
                    <form onSubmit={handleSignUpUser}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Photo</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='userEmail' placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-neutral">

                                {
                                    loading ? <SmallSpinner></SmallSpinner>
                                        : "SIGNUP"
                                }

                            </button>
                        </div>
                        <div>
                            <p className='text-sm text-center'>Already Have an Account? <Link to="/login" className='text-primary font-semibold'>Login</Link></p>
                        </div>
                        <div>
                            <p className='text-center'>OR</p>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button className="btn hove:bg-neutral bg-white text-neutral hover:text-slate-300">LOGIN WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;