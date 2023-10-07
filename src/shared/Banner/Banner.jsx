import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
    <div data-aos="fade-left"
    data-aos-duration="3000" className="w-full">
      <div className="bg-[url('/banner.jpg')] py-80 bg-cover"></div>
    </div>
  );
};

export default Banner;
