import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import logo from "../../assets/icons/logo.jpg";



const Navbar = () => {


    const { user } = useContext(AuthContext);

    const navbarLink =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/appointment">Appointment</NavLink></li>
            {
                user?.uid && <li><NavLink to="/dashboard">DashBoard</NavLink></li>
            }
            <li><NavLink to="/reviews">Reviews</NavLink></li>
            <li><NavLink to="/about-us">About</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            {
                user?.uid
                    ? <li className='flex items-center justify-center'>
                        <NavLink to="/user">
                            <img className='w-12 h-12 rounded-full p-1 bg-secondary' src={user?.photoURL} alt="" />
                        </NavLink>
                    </li>
                    : <li><NavLink to="/login">Login</NavLink></li>
            }
        </>



    return (
        <div className="navbar bg-base-100 lg:w-[90%] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-neutral font-semibold">
                        {navbarLink}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl tracking-wider" style={{ fontFamily: "'Kaushan Script', cursive" }}>
                    <img className='w-8' src={logo} alt="" />
                    CLEAN SMILE
                </Link>
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