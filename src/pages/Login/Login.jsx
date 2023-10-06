import React from "react";
import Navbar from "../../shared/Header/Navbar";
import Logo from "../../shared/Logo/Logo";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <Navbar></Navbar>
      <Logo></Logo>
      <div className="hero min-h-screen bg-orange-50">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              For checking event details, you must login first. We offer to add
              events or see details of a event only for registered users
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                <button className="btn bg-orange-400">Login</button>
              </div>
            </form>
          </div>
          <div className="my-3">
            <p>
              Don't have a account?
              <span className="text-orange-500 px-3"> <Link to='/register'>Register</Link> </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
