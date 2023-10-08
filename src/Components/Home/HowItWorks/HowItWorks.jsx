/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../../assets/icon/icon-1 (1).png'
import img2 from '../../../assets/icon/icon-2.png'
import img3 from '../../../assets/icon/icon-3.png'
import cover from '../../../assets/photos/bg-1.webp'

const HowItWorks = () => {
    return (
        <div>
            <p className='font-bold text-5xl text-center mt-20 mb-10'>Here's How It Works</p>
            <div className=' mt-10 p-6 lg:flex lg:space-x-10 lg:space-y-0 space-y-10 justify-center items-center'>
                <div className='w-[350px] text-center  '>
                    <img className=' ml-[110px]' src={img2} alt="" />
                    <p className='mt-3 mb-3 font-bold text-2xl'>Inspires</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cum? Possimus aut sunt assumenda labore!</p>
                </div>

                <div className='w-[350px] text-center '>
                    <img className=' ml-[110px]' src={img3} alt="" />
                    <p className='mt-3 mb-3 font-bold text-2xl'>Encouraging</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cum? Possimus aut sunt assumenda labore!</p>
                </div>

                <div className='w-[350px] text-center '>
                    <img className=' ml-[110px]' src={img} alt="" />
                    <p className='mt-3 mb-3 font-bold text-2xl'>Creative</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cum? Possimus aut sunt assumenda labore!</p>
                </div>

            </div>
          
        </div>
    );
};

export default HowItWorks;