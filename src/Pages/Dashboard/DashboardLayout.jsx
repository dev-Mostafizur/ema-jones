import React from 'react';
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <>
           <SideNav></SideNav>
           <Outlet></Outlet>
        </>
    );
};

export default DashboardLayout;