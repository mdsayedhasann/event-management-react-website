import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import SingleEvent from "../shared/Events/SingleEvent";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";
import BookingForm from "../pages/BookingForm/BookingForm";
import Error from "../Error/Error";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
          path: '/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: '/event/:id',
          element: <PrivateRoute><SingleEvent></SingleEvent></PrivateRoute> ,
          loader: () => fetch('./event.json')
        },
        {
          path: '/booking/:id',
          element: <PrivateRoute>
            <BookingForm></BookingForm>
          </PrivateRoute>,
          loader: () => fetch('/event.json')
        }
        
    ]
  },
]);
export default Router;
