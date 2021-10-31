import React from 'react';
import AboutUS from '../AboutUs/AboutUS';
import Banner from '../Banner/Banner';
import GetFromOurs from '../GetFromOurs/GetFromOurs';
import Packages from '../Packages/Packages';


const Home = () => {
    return (
        <div style={{ backgroundColor: "#f8f9fa" }}>

            <Banner></Banner>
            <Packages></Packages>
            <AboutUS></AboutUS>
            <GetFromOurs></GetFromOurs>
        </div>
    );
};

export default Home;