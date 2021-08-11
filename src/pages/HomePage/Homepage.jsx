import React from 'react';
import { PilatesCard } from '../../Util/Utils';
import Contents from './Contents';
import FAQ from './FAQ';
import Fitness from './Fitness';
import Footer from './Footer';
import { Header } from './Header';
import InfroDataTable from './InfroDataTable';
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
        <InfroDataTable/>
        <FAQ/>
        <Footer/>
        {/* for porpup */}
        <PilatesCard/>
        </>
    );
};

export default Homepage;