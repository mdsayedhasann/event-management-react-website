import React, { useContext } from "react";
import Navbar from "../../shared/Header/Navbar";
import TopHeader from "../../shared/Header/TopHeader";
import Logo from "../../shared/Logo/Logo";


// React Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext)
  return (
    <div>
      <TopHeader></TopHeader>
      <Logo></Logo>
      <Navbar></Navbar>
      <h2>This Is Home </h2>

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
