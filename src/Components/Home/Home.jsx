/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import HowItWorks from './HowItWorks/HowItWorks';
import PopularProducts from './PopularProducts/PopularProducts';
import Featured from './Featured/Featured';
import ExtraCover from './ExtraCover/ExtraCover';
import { Helmet } from 'react-helmet-async';








const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | ByteBrains</title>
               
            </Helmet>
            <Header></Header>
            <Featured></Featured>
            <HowItWorks></HowItWorks>
            <ExtraCover></ExtraCover>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;