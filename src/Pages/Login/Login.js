import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useToken from '../../Hooks/useToken';
import SmallSpinner from '../../Shared/SmallSpinner/SmallSpinner';

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [loginUserEmail, seLoginUserEmail] = useState("");
    const [token] = useToken(loginUserEmail);
    const { signInWithGoogle, loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


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
                console.log(result.user);
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
                <div className="card-body">
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
                            <button type='submit' className="btn btn-neutral">{
                                loading ? <SmallSpinner></SmallSpinner>
                                    : "Login"
                            }</button>
                        </div>
                        <div>
                            <p className='text-sm text-center'>New to Doctors Portal? <Link to="/signup" className='text-primary font-semibold'>Create new account</Link></p>
                        </div>
                        <div>
                            <p className='text-center'>OR</p>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button
                            onClick={handleGoogleLogin}
                            className="btn hove:bg-neutral bg-white text-neutral hover:text-slate-300">LOGIN WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;