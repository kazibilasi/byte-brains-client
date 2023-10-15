import React from 'react';
import { LiaUserCircle } from "react-icons/lia";
import { MdOutlineDateRange } from "react-icons/md";
import { BsPinAngle } from "react-icons/bs";



const Blog = ({ item }) => {

 
    return (
        <div className='lg:w-[500px] md:w-[600px] w-[300px]container gap-5 mx-auto'>
            <img
                className="lg:w-[500px] md:w-[600px] w-[300px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500"
                src={item.img}
                alt=""
            />
            <div className='mt-4 lg:flex md:flex justify-around items-center '>
                <p className='flex justify-center items-center gap-x-1'><LiaUserCircle className='text-2xl'></LiaUserCircle>{item.bloggerName}</p>
                <p className='flex justify-center items-center gap-x-1'><MdOutlineDateRange className='text-2xl'></MdOutlineDateRange>{item.date}</p>
               
            </div>
            <p className='mt-3 custom-ellipsis lg:w-[500px] md:w-[600px] w-[300px] '>{item.article}</p>
            <button className='btn bg-yellow-500 mt-3 rounded-3xl'> Read More</button>
        </div>



    );
};

export default Blog;