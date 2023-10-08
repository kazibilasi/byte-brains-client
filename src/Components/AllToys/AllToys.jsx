/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';

const AllToys = () => {
 
    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])
    return (
        <div>
         
            <div className='grid grid-cols-3 container mx-auto gap-9 mt-10'>
                {
                    allToys.map(item => <div key={item._id} className='container mx-auto'>
                        <img src={item.toyImage} className='w-[300px]' alt="" />
                        <p className=' mt-5 text-xl font-extrabold'>{item.toyName}</p>
                        <p className=' mt-3 font-extrabold'>$ {item.price}</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllToys;







