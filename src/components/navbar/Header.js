import "./style.scss";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logo.png";
import Searchbar from "../../containers/searchbar/Searchbar";
import { FaAngleDown } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../services/slices/authSlice";
import { Offcanvas } from "react-bootstrap";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
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
          <div className="top-banner-contact">
            {profile.isAuthenticated && (
              <span
                className="text-decoration-underline"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(logout())}
              >
                Logout
              </span>
            )}
          </div>
        </div>

        {/* Navbar */}
        <Navbar expand="lg" className="bar row align-items-center shadow-sm">
          <div className="brand col-8  col-sm-2">
            {/* MOBILE SCREEN  */}
            <Navbar.Toggle
              aria-controls="navbar-sidebar"
              className="navtoggle"
            />
            <Navbar.Offcanvas
              id="navbar-sidebar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              className="w-75"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  {firstName ? `Hi, ${firstName}` : ""}
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <h5 className="text-primary">Products</h5>
                <Nav className="justify-content-end flex-grow-1 pe-3 pb-3 mobile-nav">
                  <Link to={"/"}>Shutter</Link>
                  <Link to={"/"}>Metal/Iron</Link>
                  <Link to={"/"}>Stainless steel</Link>
                  <Link to={"/"}>Aluminium</Link>
                  <Link to={"/"}>Shed</Link>
                  <Link to={"/"}>Metal steel furniture</Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3 pb-5 mobile-nav">
                  <h5 className="text-primary">Services</h5>

                  <Link to={"/"}>Home services</Link>
                  <Link to={"/"}>Contract services</Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3 pb-5 mobile-nav">
                  <h5 className="text-primary">Account</h5>
                  <Link to={"register"}>Register</Link>
                  <Link to={"login"}>Login</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <img src={Logo} alt="fabgarage brand" />

            <div className="category">
              <p>Shop by category</p>

              <FaAngleDown size={14} />
            </div>
          </div>
          <div className="col-sm searchbar">
            <Searchbar />
          </div>
          <IconContext.Provider value={{ size: "24px" }}>
            <div className="col-4 col-sm-3  nav-icons">
              <FiUser />
              <FiShoppingCart />
            </div>
          </IconContext.Provider>
        </Navbar>

        {/* bottom bar */}
        <Navbar className="top-banner border-top border-bottom">
          <Nav defaultActiveKey="/home" as="ul" className="nav-links">
            <Link to="/">
              <Nav.Item as="li">Home</Nav.Item>
            </Link>
            <Link to="/Products">
              <Nav.Item as="li" className="nav-dropdown-menu">
                Products <FaAngleDown size={14} />
                <div className="nav-dropdown-menu-content border shadow-sm">
                  <ul>
                    <li>Shutter</li>
                    <li>Metal/Iron</li>
                    <li>Stainless steel</li>
                    <li>Aluminium</li>
                    <li>Shed</li>
                    <li>Metal steel furniture</li>
                  </ul>
                </div>
              </Nav.Item>
            </Link>
            <Link to="/Services">
              <Nav.Item as="li" className="nav-dropdown-menu ">
                Services <FaAngleDown size={14} />
                <div className="nav-dropdown-menu-content border shadow-sm ">
                  <ul>
                    <li>Home services</li>
                    <li>Contract services</li>
                  </ul>
                </div>
              </Nav.Item>
            </Link>
          </Nav>

          <div className="top-banner-contact">
            <Nav defaultActiveKey="/home" as="ul" className="nav-links">
              <Link to="/">
                <Nav.Item as="li">Top deals</Nav.Item>
              </Link>
              <Link to="/Products">
                <Nav.Item as="li">Top products</Nav.Item>
              </Link>
              <Link to="/Services">
                <Nav.Item as="li">Top services</Nav.Item>
              </Link>
              <Link to="/Services">
                <Nav.Item as="li">Top categories</Nav.Item>
              </Link>
            </Nav>
          </div>
        </Navbar>
        <div className="d-sm-none">
          <Searchbar />
        </div>
      </header>
    </>
  );
};

export default Header;
