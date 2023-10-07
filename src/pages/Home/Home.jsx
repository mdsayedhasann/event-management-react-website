import React, { useContext } from "react";
import Navbar from "../../shared/Header/Navbar";
import TopHeader from "../../shared/Header/TopHeader";
import Logo from "../../shared/Logo/Logo";


// React Toast
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Banner from "../../shared/Banner/Banner";
import Footer from "../../shared/Footer/Footer";
import Events from "../../shared/Events/Events";

const Home = () => {
    const {user} = useContext(AuthContext)

  return (
    <div>
      <TopHeader></TopHeader>
      <Logo></Logo>
      <Navbar></Navbar>
      <Banner></Banner>
      <Events></Events>

    <Footer></Footer>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
