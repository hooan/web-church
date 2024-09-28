import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Details from '../components/Details';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Intro />
            <Details />
            <Highlights />
            <Footer />
            
        </>
    );
};

export default Home;