import "./style.scss";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/cucumislogo.svg";
import CartLogo from "../../assets/icons/carticon.svg";
import Searchbar from "../../containers/searchbar/Searchbar";
import { FaAngleDown, FaAngleRight, FaArrowDown } from "react-icons/fa";
import { FiShoppingCart, FiUser, FiArrowDown } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../services/slices/authSlice";
import { NavDropdown, Offcanvas } from "react-bootstrap";
import useIsMobileScreen from "../../utils/hooks/useIsMobileScreen";
import { useState } from "react";
import Cart from "../cart/Cart";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const { Quantity } = useSelector((state) => state.cart);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);
  const cachedUser = localStorage.getItem("fabUser");
  let firstName;

  const profile = cachedUser ? JSON.parse(cachedUser) : user;

  if (profile.isAuthenticated) {
    firstName = profile.user.data.data.fabAccountDetails.FirstName;
  }

  return (
    <>
      <header className="sticky-top">
        {/* Top banner */}
        <div className="top-banner border-bottom">
          {profile.isAuthenticated ? (
            <span>{`Welcome, ${firstName}`}</span>
          ) : (
            <span>
              Hi <Link to="/login">Sign in</Link> or{" "}
              <Link to="/register">Register</Link>
            </span>
          )}
        </div>

        {/* Navbar */}
        <Navbar expand="lg" className="bar row align-items-center shadow-sm">
          <div className="brand col-8  col-sm-3 align-items-center">
            <Link to={"/"}>
              <img src={Logo} alt="fabgarage brand" className="logo" />
            </Link>
          </div>
          <div className="col-sm searchbar">
            <Searchbar />
          </div>
          <IconContext.Provider value={{ size: "24px" }}>
            <div className="col-4 col-sm-3 nav-icons ">
              <Link
                to={profile.isAuthenticated ? "/profile" : "/login"}
                className="account_btn "
                style={{ textDecoration: "none" }}
              >
                <FiUser color="black" />
                <NavDropdown
                  title={
                    profile.isAuthenticated ? `Hi, ${firstName}` : "Account"
                  }
                  className="d-flex align-items-center account_dropdown d-none d-sm-block"
                >
                  {/* <p className="">Account</p>
                  <FaAngleDown color="black" size={14} /> */}

                  {profile.isAuthenticated ? (
                    <>
                      <Link to={"/profile"} className={"text-decoration-none"}>
                        <li
                          className="mt-2 text-center p-2  navdropli"
                          style={{ fontSize: "14px" }}
                        >
                          My Account
                        </li>
                      </Link>
                      <Link to={"/orders"} className={"text-decoration-none"}>
                        <li
                          className="mt-2 text-center p-2  navdropli"
                          style={{ fontSize: "14px" }}
                        >
                          My Orders
                        </li>
                      </Link>

                      <button
                        className="btn btn-outline-primary border-0 btn-sm dropdown_btn mt-4"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to={"/login"}>
                        <button className="btn btn-primary btn-sm dropdown_btn mt-4">
                          Login
                        </button>
                      </Link>
                      <Link to={"/register"}>
                        <button
                          className="btn  dropdown_btn  btn-sm"
                          style={{ backgroundColor: "#FEF7D8" }}
                        >
                          Register
                        </button>
                      </Link>
                    </>
                  )}
                </NavDropdown>
              </Link>
              <Link
                to={"cart"}
                className="cart_btn"
                style={{ textDecoration: "none" }}
              >
                <Cart count={Quantity} />{" "}
                {/* <p className="d-none d-sm-block">Cart</p> */}
              </Link>
            </div>
          </IconContext.Provider>
        </Navbar>

        {/* bottom bar */}
        <Navbar className="top-banner border-top border-bottom">
          <Nav as="ul" className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <ul>
              <li className="nav-dropdown-menu">
                Products <FaAngleDown size={14} />
                <div className="nav-dropdown-menu-content border shadow-sm">
                  <ul>
                    <Link to={"productCategory/5/shutter"}>
                      <li>Shutter</li>
                    </Link>
                    <Link to={"productCategory/7/sheds"}>
                      <li>Sheds</li>
                    </Link>

                    <Link to={"productCategory/6/metal-irons"}>
                      <li>Metal/Iron</li>
                    </Link>

                    <Link to={"productCategory/4/stainless-steel"}>
                      <li>Stainless Steel</li>
                    </Link>
                    <Link to={"productCategory/3/aluminium"}>
                      <li>Aluminium</li>
                    </Link>
                    <Link to={"productCategory/8/furnitures"}>
                      <li>Metal steel furnitures</li>
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
            <Link to="/services">
              <li className="nav-dropdown-menu ">Services</li>
            </Link>
          </Nav>

          <div className="top-banner-contact">
            <Nav as="ul">
              <Link to="/">
                <li>Help</li>
              </Link>
              <Link to="/Products">
                <li>About us</li>
              </Link>
              <Link to="/Services">
                <li>Contact us</li>
              </Link>
            </Nav>
          </div>
        </Navbar>
        <Navbar expand="lg" className="d-sm-none d-flex mobile-searchnav">
          <Navbar.Toggle
            aria-controls="navbar-sidebar"
            className="navtoggle "
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            id="navbar-sidebar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="w-75"
            show={showSidebar}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={CartLogo} alt="cart logo" height={40} width={40} />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 pb-4 mobile-nav">
                <h5 className="border-bottom">Products</h5>
                <Link to={"/productCategory/5/shutter"} onClick={handleClose}>
                  Shutter
                  <FaAngleRight />
                </Link>
                <Link
                  to={"/productCategory/6/metal-iron"}
                  onClick={handleClose}
                >
                  Metal/Iron <FaAngleRight />
                </Link>
                <Link
                  to={"/productCategory/4/stainless-steel"}
                  onClick={handleClose}
                >
                  Stainless steel <FaAngleRight />
                </Link>
                <Link to={"/productCategory/3/aluminium"} onClick={handleClose}>
                  Aluminium <FaAngleRight />
                </Link>
                <Link to={"/productCategory/7/sheds"} onClick={handleClose}>
                  Shed <FaAngleRight />
                </Link>
                <Link
                  to={"/productCategory/8/furnitures"}
                  onClick={handleClose}
                >
                  Metal steel furniture <FaAngleRight />
                </Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3 pb-4 mobile-nav">
                <h5 className="border-bottom">Services</h5>

                <Link to={"services"} onClick={handleClose}>
                  Home services <FaAngleRight />
                </Link>
                <Link to={"services"} onClick={handleClose}>
                  Contract services <FaAngleRight />
                </Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3 pb-5 pt-3 mobile-nav">
                {!user.isAuthenticated ? (
                  <>
                    <Link to={"login"}>
                      <button className="btn btn-primary w-100">
                        <strong>Sign in</strong>
                      </button>
                    </Link>
                    <Link to={"register"}>
                      <button className="btn btn-outline-primary text-black w-100">
                        <strong>Create Account</strong>
                      </button>
                    </Link>
                  </>
                ) : (
                  // TODO: work on logout button
                  <Link
                    to={"/"}
                    className="pt-5"
                    onClick={() => dispatch(logout())}
                  >
                    <button className="btn btn-outline-primary text-black w-100">
                      <strong>logout</strong>
                    </button>
                  </Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="col">
            <Searchbar />
          </div>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
