import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const loader = useLoaderData()
    console.log(loader)
    return (
        <div className=' mt-10 ' >
            <img className=' mt-10 mx-auto w-[300px]' src={loader.toyImage} alt="" />
            <div className=' mt-10 text-center'>
                <p ><span className='font-medium text-xl'>Toy Name:</span> {loader.toyName}</p>
                <p > <span className='font-medium text-xl'>Sub Category:</span> {loader.subcategory}</p>
                <p > <span className='font-medium text-xl'>Size:</span> {loader.size}</p>
                <p > <span className='font-medium text-xl'>Price:</span> ${loader.price}</p>
                <p > <span className='font-medium text-xl'>Available Quantity:</span> {loader.availableQuantity}</p>
                <p > <span className='font-medium text-xl'>Product Details:</span> {loader.productDetails}</p>
            </div>


            {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-3/5 h-[400px]'><img className=' mt-10 mx-auto w-cover h-cover' src={loader.toyImage} alt="Movie" /></figure>
                <div className="card-body">
                    <div className=' mt-10'>
                        <p className='mt-2' ><span className='font-medium text-xl'>Toy Name:</span> {loader.toyName}</p>
                        <p className='mt-2' > <span className='font-medium text-xl'>Sub Category:</span> {loader.subcategory}</p>
                        <p className='mt-2' > <span className='font-medium text-xl'>Size:</span> {loader.size}</p>
                        <p className='mt-2' > <span className='font-medium text-xl'>Price:</span> ${loader.price}</p>
                        <p className='mt-2' > <span className='font-medium text-xl'>Available Quantity:</span> {loader.availableQuantity}</p>
                        <p className='mt-2' > <span className='font-medium text-xl'>Product Details:</span> {loader.productDetails}</p>
                    </div>
                    
                </div>
            </div> */}
        </div>
    );
};

export default ViewDetails;