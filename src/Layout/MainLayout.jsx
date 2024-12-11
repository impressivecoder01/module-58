import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="py-16">

      <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <footer className="py-10">

      <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
