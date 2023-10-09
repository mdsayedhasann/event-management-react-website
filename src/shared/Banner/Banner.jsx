import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
    <div data-aos="fade-left" 
    data-aos-duration="3000" className="w-full -z-10">
      <div className="bg-[url('/banner.jpg')] py-24 md:py-80 bg-cover -z-10"></div>
    </div>
  );
};

export default Banner;
