import moment from "moment";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gradient-to-r text-white from-purple-950 to-pink-500 py-16">
        <div className="flex justify-center items-center flex-col">
          <img
            className="w-[150px] rounded-full mx-auto"
            src="/public/React-Event.png"
            alt=""
          />
          
        </div>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="bg-gray-100 py-1">
        <p className="text-center">Copyright @ {moment().format('YYYY')}</p>
      </div>
    </div>
  );
};

export default Footer;
