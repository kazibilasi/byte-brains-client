/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }

 
    const navbar = <>
        <li style={{ color: location.pathname === '/' ? '#FFD700' : 'black' }}>
            <Link to='/'>HOME</Link>
        </li>

        <li style={{ color: location.pathname === '/allToys' ? '#FFD700' : 'black' }}>
            <Link to='/allToys'>ALL TOYS</Link>
        </li>
        {
            user && <div className='flex space-x-8'>

                <li style={{ color: location.pathname === '/addAToy' ? '#FFD700' : 'black' }} ><Link to='/addAToy'>ADD TOY</Link></li>
                <li  style={{ color: location.pathname === '/myToys' ? '#FFD700' : 'black' }}><Link to='/myToys'>MY TOYS</Link></li>
            </div>
        }
        <li style={{ color: location.pathname === '/blogs' ? '#FFD700' : 'black' }}><Link to='/blogs'>BLOG</Link></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100 p-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navbar
                            }
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-[50px] h-full' src='https://media.istockphoto.com/id/1032869448/vector/creative-thinking.jpg?s=612x612&w=0&k=20&c=0PdDG2ZdoHlLLWZoHykWFgNFBSXz6KwIWMCyyztMzyM=' alt="" />
                        <p className=' text-3xl  text-red-500 font-extrabold'>Byte<span className='text-amber-400'>Brains</span></p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal space-x-8 px-1">
                        {navbar}
                    </ul>
                </div>
                <div className='navbar-end' >
                    {
                        user?.email ? <>
                            <button onClick={handleLogOut} className='border lg:px-5 md:px-5 text-xl font-medium border-gray-800 lg:mr-5 py-2'>Sign Out</button><img className="h-[50px] w-[50px] ml-3 rounded-full" onMouseMove={user.displayName} src={user.photoURL} alt="" />

                        </> : <Link to="/login" className="border lg:px-5 md:px-5 text-xl font-medium border-gray-800 mr-5 py-2">Log In</Link >
                    }
                </div>
                {/* <div className="navbar-end">
                    <Link to='/login'><p className=" border px-5 text-xl font-medium border-gray-800 mr-5 py-2">login</p></Link>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;