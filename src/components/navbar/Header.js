import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Logo } from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        {/* <img src={} alt="brand logo" /> */}
        Logo
      </Navbar.Brand>

      <div>
        {/* <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link> */}
      </div>
    </Navbar>
  );
};

export default Header;
