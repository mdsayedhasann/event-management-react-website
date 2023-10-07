import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Logo = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="3000" className='w-full mx-auto flex justify-center'>
            <img className='w-[15%]' src="/public/React-Event.png" alt="" />
        </div>
    );
};

export default Logo;