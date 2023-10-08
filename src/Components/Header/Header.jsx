/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../assets/photos/slider3-bg.webp'
import img1 from '../../assets/photos/slider2-bg.webp'
import img2 from '../../assets/photos/slider1-bg.webp'
import img3 from '../../assets/photos/slider4-bg.webp'

const Header = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img} className="w-full" />
                    <div className=' absolute  lg:mt-[10%] lg:ml-[60%]  p-8'>
                        <p className='text-3xl font-bold'>Fuel the imagination!</p>
                        <p className='text-red-700 text-5xl font-extrabold mt-4 mb-4'>Extraordinary learning Toy</p>
                        <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, doloremque!</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-yellow-400 hover:bg-black hover:text-white border-none">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-yellow-400 hover:bg-black hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-yellow-400 hover:bg-black hover:text-white border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-yellow-400 hover:bg-black hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-yellow-400 hover:bg-black hover:text-white border-none">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-yellow-400 hover:bg-black hover:text-white border-none">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-yellow-400 hover:bg-black hover:text-white border-none">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-yellow-400 hover:bg-black hover:text-white border-none">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;