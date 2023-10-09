import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="h-screen text-center flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold">404 - Page not found</h2>{" "}
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
