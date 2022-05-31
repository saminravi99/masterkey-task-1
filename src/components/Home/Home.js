import React from 'react';
import AdFormats from '../AdFormats/AdFormats';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div className="pb-5">
            <Hero></Hero>
            <Services></Services>
            <AdFormats></AdFormats>
            <Summary></Summary>
            <Slider></Slider>
        </div>
    );
};

export default Home;