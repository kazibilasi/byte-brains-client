/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;