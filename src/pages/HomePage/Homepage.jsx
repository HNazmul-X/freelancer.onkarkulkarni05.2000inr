import React from 'react';
import Contents from './Contents';
import Fitness from './Fitness';
import { Header } from './Header';
import Mirror from './Mirror';
import ServicesSection from './ServicesSection';
import Skills from './Skills';

const Homepage = () => {
    return (
        <>
        <Header/>
        <Mirror/>
        <ServicesSection/>
        <Fitness/>
        <Skills/>
        <Contents/>
        </>
    );
};

export default Homepage;