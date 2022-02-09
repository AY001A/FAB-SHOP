import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../../assets/icons/logo.svg";
import "./style.scss";

const AuthLayout = () => {
  return (
    <div className="outer-wrapper">
      <div className="content-wrapper">
        <div className="nav-wrapper shadow-sm sticky-top bg-white d-flex align-items-center">
          <Link to={"/"}>
            <img src={Logo} className="nav-logo" alt="brand logo" />
          </Link>
        </div>
        <div className="form-container">
          <Outlet />
        </div>
      </div>
      <div className="image-wrapper"></div>
    </div>
  );
};

export default AuthLayout;
