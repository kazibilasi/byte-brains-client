/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import HowItWorks from './HowItWorks/HowItWorks';
import PopularProducts from './PopularProducts/PopularProducts';
import Featured from './Featured/Featured';
import ExtraCover from './ExtraCover/ExtraCover';








const Home = () => {
    return (
        <div>
            <Header></Header>
            <Featured></Featured>
            <HowItWorks></HowItWorks>
            <ExtraCover></ExtraCover>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;