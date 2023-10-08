/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import grid1 from '../../../assets/photos/grid-1.webp'
import grid2 from '../../../assets/photos/grid-2.webp'
import grid3 from '../../../assets/photos/grid-3.webp'

const Featured = () => {
    return (
        <div>
            <div className='p-8'>
                <p className='font-extrabold text-5xl text-center lg:mt-20 mb-10'>It's never been easier to invest in your kid's toys</p>
                <div className='lg:flex justify-center items-center lg:mt-20'>
                    <div className='lg:w-[600px] bg-slate-50 lg:mt-0 mt-10 lg:mb-0 mb-10  lg:h-[250px] px-4 py-10 shadow-xl lg:rounded-2xl lg:-mr-28 z-10'>
                        <p className='mb-3 text-4xl font-extrabold'>Toys are all your baby need better toys for better growth.</p>
                        <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit expedita, aut possimus sequi, omnis reprehenderit esse nulla, alias laborum dignissimos sit libero aperiam vero quasi voluptatum cum amet dolore fugiat.</p>
                    </div>
                    <img className='lg:w-[600px]' src={grid1} alt="" />
                </div>
                <div className='lg:flex justify-center items-center lg:flex-row-reverse'>
                    <div className='lg:w-[600px] bg-slate-50 lg:mt-0 mt-10 lg:mb-0 mb-10  lg:h-[250px] px-4 py-10 shadow-xl lg:rounded-2xl lg:-ml-28 z-10'>
                        <p className='mb-3 text-4xl font-extrabold'>Creative modern wooden toys for kids development.</p>
                        <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit expedita, aut possimus sequi, omnis reprehenderit esse nulla, alias laborum dignissimos sit libero aperiam vero quasi voluptatum cum amet dolore fugiat.</p>
                    </div>
                    <img className='lg:w-[600px]' src={grid2} alt="" />
                </div>
                <div className='lg:flex justify-center items-center '>
                    <div className='lg:w-[600px] bg-slate-50 lg:mt-0 mt-10 lg:mb-0 mb-10 lg:h-[250px] px-4 py-10 shadow-xl lg:rounded-2xl lg:-mr-28 z-10'>
                        <p className='mb-3 text-4xl font-extrabold'>Wooden toys that will delight your little one a lot</p>
                        <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit expedita, aut possimus sequi, omnis reprehenderit esse nulla, alias laborum dignissimos sit libero aperiam vero quasi voluptatum cum amet dolore fugiat.</p>
                    </div>
                    <img className='lg:w-[600px]' src={grid3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Featured;