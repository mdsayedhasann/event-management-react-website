import React from 'react';
import Navbar from '../../shared/Header/Navbar';
import TopHeader from '../../shared/Header/TopHeader';
import Logo from '../../shared/Logo/Logo';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Logo></Logo>
            <Navbar></Navbar>
            <h2>This Is Home</h2>
        </div>
    );
};

export default Home;