/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';
import img from '../../assets/photos/breadcrum.jpg'
import { AuthContext } from '../AuthProvider/AuthProvider';
const itemsPerPage = 9;

const AllToys = () => {

    const [allToys, setAllToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };
    const { loading } = useContext(AuthContext)



    const [currentPage, setCurrentPage] = useState(1);
    const allToy = [allToys] // Your array of 31 toys

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentToys = allToys.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (

        <div>
            <div className='relative h-[400px] w-full mt-5'>
                <div className='absolute top-0 left-0 w-full h-full bg-yellow-400 opacity-75'></div>
                <img className='w-full h-full' src={img} alt="" />
            </div>

            <div className='flex p-10 justify-center items-center lg:space-x-10'>

                {/* <div className=" mt-11">
                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b border-gray-300">
                            <button
                                className={`w-full p-4 text-left focus:outline-none ${activeAccordion === 0 ? 'text-blue-700 bg-blue-300' : 'text-gray-700'
                                    }`}
                                onClick={() => handleAccordionClick(0)}
                            >
                                Accordion Item #1
                            </button>
                        </div>
                        {activeAccordion === 0 && (
                            <div className="p-4 border-b w-[200px] border-gray-200">
                                <p>price</p>
                                <p>price</p>
                            </div>
                        )}
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className=" border-b border-gray-300">
                            <button
                                className={`w-full p-4 text-left focus:outline-none ${activeAccordion === 1 ? 'text-blue-700 bg-blue-300' : 'text-gray-700'
                                    }`}
                                onClick={() => handleAccordionClick(1)}
                            >
                                Accordion Item #2
                            </button>
                        </div>
                        {activeAccordion === 1 && (
                            <div className="p-4 border-b w-[200px] border-gray-200">
                                [price high to low]
                            </div>
                        )}
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b border-gray-300">
                            <button
                                className={`w-full p-4 text-left focus:outline-none ${activeAccordion === 2 ? 'text-blue-700 bg-blue-300' : 'text-gray-700'
                                    }`}
                                onClick={() => handleAccordionClick(2)}
                            >
                                Accordion Item #3
                            </button>
                        </div>
                        {activeAccordion === 2 && (
                            <div className="p-4 border-b border-gray-200">
                                <p>price</p>
                            </div>
                        )}
                    </div>

                    <div className="bg-white shadow-md rounded-lg">
                        <div className="border-b border-gray-300">
                            <button
                                className={`w-full p-4 text-left focus:outline-none ${activeAccordion === 3 ? 'text-blue-700 bg-blue-300' : 'text-gray-700'
                                    }`}
                                onClick={() => handleAccordionClick(3)}
                            >
                                Accordion Item #4
                            </button>
                        </div>
                        {activeAccordion === 3 && (
                            <div className="p-4 border-b border-gray-200">
                                <p>price</p>
                            </div>
                        )}
                    </div>
                </div> */}

                <div>
                    <div className='grid lg:grid-cols-3 gap-9 mt-10'>
                        {currentToys.map((item) => (
                            <div key={item._id} className='container mx-auto'>
                                <img src={item.toyImage} className='w-[300px]' alt='' />
                                <p className='mt-5 text-xl font-extrabold'>{item.toyName}</p>
                                <p className='mt-3 font-extrabold'>$ {item.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className='flex justify-center mt-4'>
                        {Array.from({ length: Math.ceil(allToys.length / itemsPerPage) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-yellow-500 text-white' : 'bg-gray-300'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AllToys;







