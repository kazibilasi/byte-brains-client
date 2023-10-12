/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import img from '../../assets/photos/breadcrum.jpg'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [isLoading, setIsLoading] = useState(true);
    

    const [products, setProducts] = useState([]);


    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };



    useEffect(() => {
        fetch('https://byte-brains-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false)
            })
    }, [])


    const renderPaginationButtons = () => {
        const maxButtonsToShow = 5; // You can adjust this number
        const buttons = [];

        if (totalPages <= maxButtonsToShow) {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(
                    <button
                        key={i}
                        className={`mx-2 px-3 py-1 ${currentPage === i ? "bg-yellow-500 text-white" : ""
                            }`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            // Show first page
            buttons.push(
                <button
                    key={1}
                    className={`mx-2 px-3 py-1  ${currentPage === 1 ? "bg-yellow-500 text-white" : ""
                        }`}
                    onClick={() => handlePageClick(1)}
                >
                    1
                </button>
            );

            // Show ellipsis if currentPage is not close to the beginning
            if (currentPage > 3) {
                buttons.push(<span key="ellipsis1">...</span>);
            }

            // Calculate which pages to show around the current page
            const pagesToShow = [];
            const startPage = Math.max(currentPage - 1, 2);
            const endPage = Math.min(currentPage + 1, totalPages - 1);
            for (let i = startPage; i <= endPage; i++) {
                pagesToShow.push(
                    <button
                        key={i}
                        className={`mx-2 px-3 py-1 ${currentPage === i ? "bg-yellow-500 text-white" : ""
                            }`}
                        onClick={() => handlePageClick(i)}
                    >
                        {i}
                    </button>
                );
            }
            buttons.push(...pagesToShow);

            // Show ellipsis if currentPage is not close to the end
            if (currentPage < totalPages - 2) {
                buttons.push(<span key="ellipsis2">...</span>);
            }

            // Show last page
            buttons.push(
                <button
                    key={totalPages}
                    className={`mx-2 px-3 py-1  ${currentPage === totalPages ? "bg-yellow-500 text-white" : ""
                        }`}
                    onClick={() => handlePageClick(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        return buttons;
    };
    return (
        <div>
            <Helmet>
                <title>Blog | ByteBrains</title>
            </Helmet>

            <div className='relative h-[300px] w-full mt-5'>
                <div className='absolute top-0 left-0 w-full h-full bg-yellow-500 opacity-75'></div>
                <img className='w-full h-full' src={img} alt="" />
                <div className='text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Black text-center font-bold '>
                    Blogs / News
                </div>
            </div>

            <div >
                {
                    isLoading ? (<span className="loading loading-dots loading-lg"></span>) : (<div className='grid lg:grid-cols-2 gap-9 mt-10' >
                        {productsToDisplay.map((item) => (<Blog key={item._id} item={item}></Blog>

                        ))}
                    </div>)
                }
            </div>


            <div className="mt-12 mb-6 flex justify-center">
                <button
                    className="mr-2 px-4 py-2 bg-yellow-500  text-white "
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {renderPaginationButtons()}
                <button
                    className="ml-2 px-4 py-2 bg-yellow-500 text-white "
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
            
        
    );
};

export default Blogs;