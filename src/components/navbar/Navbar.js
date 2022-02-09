import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <h5>Navbar </h5>

      <div>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Nav;
