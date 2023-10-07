import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-2 items-center">
        <div>
          <div
            data-aos="flip-up"
            data-aos-duration="2000"
            className="text-center w-3/4 mx-auto py-10"
          >
            <h2 className="font-bold text-center text-5xl ">About Us</h2>
            <div className="divider divider-vertical divide-orange-500 text-pink-500">Tech Everyday, From 1998 to Present</div>
            <p className="w-3/2 mx-auto py-3 text-gray-500">
            Welcome to [Event Management Company Name]. We specialize in crafting exceptional events that leave lasting impressions. Founded in [Year of Establishment], our passion for creativity and commitment to excellence drive us to create unforgettable experiences. From corporate conferences to weddings, our skilled team ensures every detail is executed flawlessly. Let's make your next event extraordinary.
            </p>
          </div>
        </div>
        <div data-aos='zoom-in' data-aos-duration="3000">
            <img src="https://img.freepik.com/premium-vector/event-management-wedding-planner-manager-planning-event-conference-party_501813-2157.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
