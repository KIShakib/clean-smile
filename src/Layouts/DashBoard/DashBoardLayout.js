import React from 'react';
import { Outlet } from 'react-router-dom';
import DashBoard from '../../Pages/DashBoard/DashBoard';
import DashBoardNavbar from '../../Pages/DashBoardNavbar/DashBoardNavbar';

const DashBoardLayout = () => {
    return (
        <div className='lg:flex'>
            <DashBoard></DashBoard>
            <DashBoardNavbar></DashBoardNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;