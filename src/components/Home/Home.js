import React from 'react';
import AdFormats from '../AdFormats/AdFormats';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <AdFormats></AdFormats>
        </div>
    );
};

export default Home;