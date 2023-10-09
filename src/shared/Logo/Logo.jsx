import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1000" className='w-full mx-auto flex justify-center'>
            <Link to='/'>
            <img className='w-[300px] rounded-full' src="https://i.ibb.co/stCT0Kz/React-Event.png" alt="" />
            </Link>
        </div>
    );
};

export default Logo;