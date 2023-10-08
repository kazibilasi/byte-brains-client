/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import cover from '../../../assets/photos/bg-1.webp'

const ExtraCover = () => {
    return (
        <div>
            <div>

                <div className='font-bold absolute lg:text-2xl ml-[40%] text-white lg:mt-[15%] z-10 w-3/5 p-6 '>
                    <p className='mb-3 lg:text-4xl text-xl font-extrabold text-gray-100'>Toys are all your baby need better toys for better growth.</p>
                    <p className=''>
                        Learning toys often provide an open-ended play environment that encourages creativity and imagination.
                    </p>
                    <p className='text-gray-100 lg:block hidden'>
                        Learning toys often provide an open-ended play environment that encourages creativity and imagination. From art supplies that allow for self-expression to open-ended building sets that prompt imaginative constructions, these toys empower children to think outside the box.
                    </p>
                </div>
                <img className='mt-10' src={cover} alt="" />

            </div>
        </div>
    );
};

export default ExtraCover;