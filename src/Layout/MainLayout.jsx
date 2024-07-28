import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Header/Navbar';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {
    return (
        <>
         <div>
            <Navbar></Navbar>
         </div>
         <div>
         <Outlet></Outlet> 
         </div>
         <div>
            <Footer></Footer>
         </div>
        </>
    );
};

export default MainLayout;