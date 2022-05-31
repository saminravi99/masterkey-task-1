import React from 'react';
import AdFormats from '../AdFormats/AdFormats';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div className="pb-5">
            <Hero></Hero>
            <Services></Services>
            <AdFormats></AdFormats>
            <Summary></Summary>
        </div>
    );
};

export default Home;