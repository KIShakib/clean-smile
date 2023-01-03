import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import useToken from '../../Hooks/useToken';
import SmallSpinner from '../../Shared/SmallSpinner/SmallSpinner';

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [loginUserEmail, seLoginUserEmail] = useState("");
    const [token] = useToken(loginUserEmail);
    const { signInWithGoogle, loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useDynamicTitle("Login");


    const from = location.state?.from?.pathname || "/user";

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = e => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;
        const gmail = form.userEmail.value;
        const password = form.password.value;

        loginUser(gmail, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login Successful");
                form.reset();
                setLoading(false);
                seLoginUserEmail(gmail);

            })
            .catch(err => {
                toast.error(err.message.slice(10));
            })
    };


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                if (user.uid) {
                    toast.success("Login Successful With Google...")
                }
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message.slice(10))
            })
    }

    return (
        <div className="hero min-h-screen text-neutral">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 rounded">
                <div className="card-body font-semibold">
                    <h2 className='text-center text-2xl font-bold'>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='userEmail' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-outline rounded-sm border hover:border-none hover:text-slate-600 font-semibold hover:bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">{
                                loading ? <SmallSpinner></SmallSpinner>
                                    : "Login"
                            }</button>
                        </div>
                        <div>
                            <p className='text-sm text-center'>New to Clean Smile? <Link to="/signup" className='text-primary font-semibold'>Create new account</Link></p>
                        </div>
                        <div>
                            <p className='text-center'>OR</p>
                        </div>
                    </form>
                    <div className="form-control">
                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-outline rounded-sm border hover:border-none hover:text-slate-600 font-semibold hover:bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]">LOGIN WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;