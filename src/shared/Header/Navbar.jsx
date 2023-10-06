import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Header/css/navbar.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
      .then(() => {
        console.log("Logout Success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink className="text-black font-bold hover:bg-green-800" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black font-bold" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black font-bold" to="/register">
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-green-200 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <img className="w-[30px] rounded-full" src={user?.photoURL} alt="" />
          {user ? <p className="font-bold"> {user?.displayName}</p> : ""}

          {user ? (
            <a onClick={handleSignOut} className="btn btn-error text-white">
              Logout
            </a>
          ) : (
            <Link className="btn" to='/login'>Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
