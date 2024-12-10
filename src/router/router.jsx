import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

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
          path: 'register', 
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;