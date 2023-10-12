/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PopularItem from '../../PopularItem/PopularItem';

const PopularProducts = () => {
    const [popularToy1, setPopularToy1] = useState([])
    const [popularToy2, setPopularToy2] = useState([])
    const [popularToy3, setPopularToy3] = useState([])
    useEffect(() => {
        fetch('https://byte-brains-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                const toy1 = data.filter(item => item.subcategory === 'Building Blocks')
                const toy2 = data.filter(item => item.subcategory === 'Plush Toys')
                const toy3 = data.filter(item => item.subcategory === 'Outdoor Exploration')

                setPopularToy1(toy1.slice(0, 3))
                setPopularToy2(toy2.slice(0, 3))
                setPopularToy3(toy3.slice(0, 3))
            })
    }, [])


   

    return (
        <div className=' container mx-auto mt-10 mb-10 '>
            <p className='text-center font-medium text-5xl mb-10 mt-5'>Popular Category</p>
            <Tabs>

                <TabList>
                    <Tab><p className='font-bold text-xl'>Building Blocks</p></Tab>
                    <Tab><p className='font-bold text-xl'>Plush Toys</p></Tab>
                    <Tab><p className='font-bold text-xl'>Outdoor Exploration</p></Tab>
                </TabList>

                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2  p-8'>
                        {
                            popularToy1.map(item => <PopularItem key={item._id} item={item}></PopularItem>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2  p-8 '>
                        {
                            popularToy2.map(item =>  <PopularItem key={item._id} item={item}></PopularItem>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 p-8 '>
                        {
                            popularToy3.map(item =>  <PopularItem key={item._id} item={item}></PopularItem>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default PopularProducts;