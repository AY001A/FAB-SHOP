import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/navbar/Header";

const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="main-wrapper">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
