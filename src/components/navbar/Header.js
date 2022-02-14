import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo.png";
import Searchbar from "../../containers/searchbar/Searchbar";
import { FaAngleDown, FaArrowDown, FaPhone } from "react-icons/fa";
import { FiBell, FiShoppingCart, FiUser } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

const Header = () => {
  return (
    <header className="sticky-top">
      {/* Top banner */}
      <div className="top-banner border-bottom">
        <span>
          Hi <Link to="/login">Sign in</Link> or{" "}
          <Link to="/register">Register</Link>
        </span>
        <div className="top-banner-contact">
          <span>Help & Contact</span> <FaPhone />
        </div>
      </div>

      {/* Navbar */}
      <div className="bar row ">
        {/* <Searchbar /> */}
        <div className="brand  col-sm-2">
          <img src={Logo} alt="fabgarage brand logo" />
          <div className="category">
            <p>Shop by category</p>
            <FaAngleDown />
          </div>
        </div>
        <div className="col-sm">
          <Searchbar />
        </div>
        <IconContext.Provider value={{ size: "24px" }}>
          <div className="col-sm-3  nav-icons">
            <FiUser />
            <FiBell />
            <div id="ex4">
              <span class="p1 fa-stack fa-2x has-badge" data-count="4">
                <FiShoppingCart />
              </span>
            </div>
          </div>
        </IconContext.Provider>
      </div>

      {/* bottom bar */}
      <div className="top-banner border-top border-bottom">
        <Nav defaultActiveKey="/home" as="ul" className="nav-links">
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/login">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">
              <Link to="/Products">Products</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">
              <Link to="/Services">Services</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="top-banner-contact">
          <Nav defaultActiveKey="/home" as="ul" className="nav-links">
            <Nav.Item as="li">
              <Nav.Link>
                <Link to="/">Top deals</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">
                <Link to="/Products">Top products</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">
                <Link to="/Services">Top services</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">
                <Link to="/Services">Top categories</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
