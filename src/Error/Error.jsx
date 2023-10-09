import React from "react";
import { Link } from "react-router-dom";
import TopHeader from "../shared/Header/TopHeader";
import Logo from "../shared/Logo/Logo";
import Navbar from "../shared/Header/Navbar";

const Error = () => {
  return (
      <div>
        <TopHeader></TopHeader>
        <Logo></Logo>
        <Navbar></Navbar>
      <div className="h-screen text-center flex justify-center items-center flex-col">
          <img src="https://i.ibb.co/M8bgh9n/image.png" alt="" />
        <h2 className="text-3xl font-bold text-5xl"> Page not found</h2>{" "}
        <p>
          <Link to="/">
            <button className="px-3 py-2 rounded-md text-white bg-gradient-to-r from-purple-950 to-pink-500 my-6">
              Back to home
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
