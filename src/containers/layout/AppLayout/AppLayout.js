import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/navbar/Header";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
