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
import About from "../About/About";
import Faq from "../FAQ/Faq";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <TopHeader></TopHeader>
      <Logo></Logo>
      <Navbar></Navbar>
      <Banner></Banner>

      <About></About>
      <Events></Events>
      <Faq></Faq>
      <Footer></Footer>
      <div></div>
    </div>
  );
};

export default Home;
