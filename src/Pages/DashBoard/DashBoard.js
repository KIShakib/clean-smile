import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/whitening.png";
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div className='lg:w-1/4 hidden lg:block'>
            <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-neutral hover:shadow-lg">
                <div className="lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-6">
                    <div>
                        <Link to="/">
                            <div className="w-max p-2.5 flex items-center gap-4">
                                <img src={logo} className="w-10 rounded-full" alt="" />
                                <p className='text-lg font-bold text-secondary'>Doctors Portal</p>
                            </div>
                        </Link>
                        <ul className="mt-6 space-y-2 tracking-wide">
                            <li className="min-w-max">
                                <Link to="" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                                    <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                    </svg>
                                    <span className="-mr-1 font-medium">DashBoard</span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="mt-6 space-y-2 tracking-wide">
                            <li className="min-w-max">
                                <Link to="/dashboard/myappointment" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                                    <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                        <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                        <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                    </svg>
                                    <span className="-mr-1 font-medium">My Appointment</span>
                                </Link>
                            </li>
                        </ul>
                        {
                            isAdmin &&
                            <ul className="mt-6 space-y-2 tracking-wide">
                                <li className="min-w-max">
                                    <Link to="/dashboard/allusers" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                        </svg>
                                        <span className="-mr-1 font-medium">All Users</span>
                                    </Link>
                                </li>
                            </ul>
                        }
                        {
                            isAdmin &&
                            <ul className="mt-6 space-y-2 tracking-wide">
                                <li className="min-w-max">
                                    <Link to="/dashboard/adddoctor" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                        </svg>
                                        <span className="-mr-1 font-medium">Add Doctor</span>
                                    </Link>
                                </li>
                            </ul>
                        }
                        {
                            isAdmin &&
                            <ul className="mt-6 space-y-2 tracking-wide">
                                <li className="min-w-max">
                                    <Link to="/dashboard/manage-doctor" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                        </svg>
                                        <span className="-mr-1 font-medium">Manage Doctor</span>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                    <div className="w-max -mb-3">
                        <Link className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <span className="group-hover:text-slate-400 text-slate-300">Settings</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;