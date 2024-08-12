import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className=" w-full min-h-screen">
      <div className="flex items-center w-full justify-center fixed  z-[1000]">
        <Nav />
      </div>
      <div className=" relative w-full min-h-screen ">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
