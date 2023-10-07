import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Logo from "../../shared/Logo/Logo";
import Navbar from "../../shared/Header/Navbar";
import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  return (
    <div>
      <Logo></Logo>
      <Navbar></Navbar>

      <div data-aos='zoom-in' data-aos-duration='2000' className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row gap-32">
          <img
            src={user && user.photoURL}
            className="w-80 rounded-lg shadow-2xl mask mask-squircle"
          />
          <div>
            <h1 className="text-5xl font-bold">{user && user.displayName}</h1>

            <h2 className="text-2xl py-3">
                Email:  {user && user.email}
            </h2>

            <Link to='/'>
            <button className="btn btn-primary">Back Home</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
