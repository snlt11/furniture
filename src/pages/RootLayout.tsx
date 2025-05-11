import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header/>
      <div>RootLayout</div>
      <Outlet />
      <Footer/>
    </>
  );
}

export default RootLayout; 
