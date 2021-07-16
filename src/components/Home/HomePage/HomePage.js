import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar'
import About from '../About/About';
import FlowersCollection from '../FlowersCollection/FlowersCollection';
import HeaderMain from '../HeaderMain/HeaderMain';
import MessageSection from '../MessageSection/MessageSection';
import Services from '../Services/Services';
import WonderfulArrangements from '../WonderfulArrangements/WonderfulArrangements';
import './HomePage.css'
const HomePage = () => {
    return (
        <div>
            <div className="headerContainer">
                <Navbar state={true}></Navbar>
                <HeaderMain></HeaderMain>   
            </div>
            <div className="" style={{ backgroundColor: '#fff0e9'}}>
                <About></About>
                <FlowersCollection></FlowersCollection>
                <WonderfulArrangements></WonderfulArrangements>
                <MessageSection></MessageSection>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomePage;