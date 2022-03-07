import React, { Children } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../../assets/icons/cucumislogo.svg";
import "./style.scss";

const AuthLayout = ({ Children }) => {
  return (
    <div className="outer-wrapper">
      <div className="content-wrapper">
        <div className="nav-wrapper shadow-sm sticky-top bg-white d-flex align-items-center">
          <Link to={"/"}>
            <img src={Logo} className="nav-logo logo" alt="brand logo" />
          </Link>
        </div>
        <div className="form-container">{Children}</div>
      </div>
      <div className="image-wrapper"></div>
    </div>
  );
};

export default AuthLayout;
