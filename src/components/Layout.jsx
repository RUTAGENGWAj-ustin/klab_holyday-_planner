import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./common/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
