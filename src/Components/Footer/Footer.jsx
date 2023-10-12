/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../assets/icon/logo.png'

const Footer = () => {
    return (
        <div>
            {/* <footer className="footer p-10 bg-white text-black font-medium">
                <nav className='container mx-auto'>
                    <div >
                        <img className='w-[50px] h-full' src='https://media.istockphoto.com/id/1032869448/vector/creative-thinking.jpg?s=612x612&w=0&k=20&c=0PdDG2ZdoHlLLWZoHykWFgNFBSXz6KwIWMCyyztMzyM=' alt="" />
                        <p className='text-3xl  text-red-500 font-extrabold'>Byte<span className='text-amber-400'>Brains</span></p>
                    </div>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">LinkedIn</a>
                </nav>
                <nav className='container mx-auto'>
                    <header className=" text-2xl font-medium mt-10">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='container mx-auto'>
                    <header className="text-2xl font-medium mt-10">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content ">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ByteBrains Industries Ltd</p>
                </aside>
            </footer> */}


            <div className='container mx-auto'>
                <footer className="footer p-10 ">
                    <nav >
                        <div >
                            <img className='w-[50px] h-full' src='https://media.istockphoto.com/id/1032869448/vector/creative-thinking.jpg?s=612x612&w=0&k=20&c=0PdDG2ZdoHlLLWZoHykWFgNFBSXz6KwIWMCyyztMzyM=' alt="" />
                            <p className='text-3xl  text-red-500 font-extrabold'>Byte<span className='text-amber-400'>Brains</span></p>
                        </div>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='mt-16' >
                        <header className="footer-title text-xl">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='mt-16'>
                        <header className="footer-title text-xl">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content ">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ByteBrains Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;