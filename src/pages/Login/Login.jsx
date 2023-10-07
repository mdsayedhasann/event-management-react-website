import React, { useContext } from "react";
import Navbar from "../../shared/Header/Navbar";
import Logo from "../../shared/Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AOS from 'aos'
import 'aos/dist/aos.css'

// React Toast
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { signIn, googleProviderAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        toast.error("Login Failed! Invalid Password", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    console.log(email, password);

   
  };
 const handleGoogleLogin = () => {
  googleProviderAuth()
  .then((success) => {
    console.log(success);
  })
  .catch(error => {
    console.error(error);
  })
 }
  return (
    <div>
      <Logo></Logo>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-purple-50">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              For checking event details, you must login first. We offer to add
              events or see details of a event only for registered users
            </p>
          </div>
          <div data-aos='fade-up' data-aos-duration='3000' className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-950 text-white">Login</button>
              </div>
            </form>

            <div className="flex justify-center py-4">
              <button className="bg-base-950 text-black border px-4 py-2" onClick={handleGoogleLogin}>
               Sign In With Google
              </button>
            </div>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
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
          <div className="my-3">
            <p>
              Don't have a account?
              <span className="text-purple-500 px-3">
                {" "}
                <Link to="/register">Register</Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
