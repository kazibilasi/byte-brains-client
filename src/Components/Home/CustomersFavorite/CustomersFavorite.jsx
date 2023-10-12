/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../../assets/photos/shop-2.webp'

const CustomersFavorite = () => {
    return (
        <div className=' mt-10 mb-20'>
            <p className='font-medium text-5xl text-center mt-20 mb-10'>Customer's Favorite</p>
            <div className='lg:flex container mx-auto p-8 justify-center items-center'>

                <div>
                    <img className='lg:w-[600px]' src={img} alt="" />
                </div>
                <div className='lg:w-1/2 lg:space-x-14 lg:space-y-0 space-y-5'>
                    <p className='font-medium text-2xl ml-14 lg:mt-0 mt-10'>Plastic Robert</p>
                 
                    <p className='font-medium mt-5 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam consequuntur magnam labore ratione, neque fugiat maiores repellat, voluptatibus perferendis et ullam nihil, illum libero perspiciatis sit laudantium quas. Nisi, ea.</p>

                    <p>$5.99</p>
                </div>
            </div>
        </div>
    );
};

export default CustomersFavorite;