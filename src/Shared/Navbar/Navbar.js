import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';



const Navbar = () => {


    const { user } = useContext(AuthContext);

    const navbarLink =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            {
                user?.uid && <li><Link to="/dashboard">DashBoard</Link></li>
            }
            <li><Link>Reviews</Link></li>
            <li><Link>Contact Us</Link></li>
            {
                user?.uid
                    ? <li className='flex items-center justify-center'>
                        <Link to="/user">
                            <img className='w-12 h-12 rounded-full p-1 bg-secondary' src={user?.photoURL} alt="" />
                        </Link>
                    </li>
                    : <li><Link to="/login">Login</Link></li>
            }
        </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-neutral font-semibold">
                        {navbarLink}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">DOCTOR'S PORTAL</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-neutral font-semibold">
                    {navbarLink}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;