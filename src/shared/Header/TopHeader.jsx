import React from "react";
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin  } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'



const TopHeader = () => {
  return (
    <div className="bg-purple-950 rounded-t-2xl py-2">
      <div className="flex justify-between px-8">
        <small className="text-white px-4">
          Email: sayed.hasan0011@gmail.com
          <span className="px-3"></span>
          Phone: 01686659001
        </small>


      <div className="text-white">
        <div className="flex gap-4 items-center">
        <a href="https://www.facebook.com/aponhossain0011/">  <BsFacebook> </BsFacebook></a>
        <a href="https://www.facebook.com/aponhossain0011/">  <AiFillTwitterCircle></AiFillTwitterCircle></a>
        <a href="https://www.facebook.com/aponhossain0011/">  <FaLinkedin></FaLinkedin></a>
        <a href="https://www.facebook.com/aponhossain0011/">  <PiInstagramLogoFill></PiInstagramLogoFill></a>
        </div>

        
      </div>
      </div>
    </div>
  );
};

export default TopHeader;
