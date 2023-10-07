import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import SingleEvent from "../shared/Events/SingleEvent";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/event/:id',
          element: <PrivateRoute><SingleEvent></SingleEvent></PrivateRoute> ,
          loader: () => fetch('../../public/event.json')
        }
    ]
  },
]);
export default Router;
