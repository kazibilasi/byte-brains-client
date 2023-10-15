/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import cover from '../../../assets/photos/bg-1.webp'

const ExtraCover = () => {
    return (
        <div >
            <div data-aos="zoom-in-up">

                <div className=' absolute lg:text-2xl ml-[43%] text-white lg:mt-[10%] z-10 w-2/5 h-1/4 p-6 '>
                    <p className='mb-3 lg:text-4xl text-sm font-extrabold text-gray-100'>Toys are all your baby need better toys for better growth.</p>
                 
                    <p className='text-gray-100 lg:block md:block hidden '>
                        Learning toys often provide an open-ended play environment that encourages creativity and imagination. From art supplies that allow for self-expression to open-ended building sets that prompt imaginative constructions.
                    </p>
                </div>
                <img className='mt-10' src={cover} alt="" />

            </div>
        </div>
    );
};

export default ExtraCover;