import React from "react";
import Navbar from "../../shared/Header/Navbar";
import TopHeader from "../../shared/Header/TopHeader";
import Logo from "../../shared/Logo/Logo";


// React Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <Logo></Logo>
      <Navbar></Navbar>
      <h2>This Is Home</h2>

      <div>
        <ToastContainer
          position="Register Success"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Home;
