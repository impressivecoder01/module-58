import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply";
import MyApplication from "../Pages/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>Not found</h1>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/jobs/:id',
          element:<PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: '/myApplications',
          element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path: '/addJob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: '/myPostedJob',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: 'register', 
          element: <Register></Register>
        },
        {
          path: 'signIn',
          element: <SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;