import "./style.scss";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/cucumislogo.svg";
import CartLogo from "../../assets/icons/carticon.svg";
import Searchbar from "../../containers/searchbar/Searchbar";
import { FaAngleDown, FaAngleRight, FaArrowDown } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../services/slices/authSlice";
import { Offcanvas } from "react-bootstrap";
import useIsMobileScreen from "../../utils/hooks/useIsMobileScreen";

const Header = () => {
  const isMobile = useIsMobileScreen();
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
          <div className="brand col-8  col-sm-2 align-items-center">
            <Link to={"/"}>
              <img src={Logo} alt="fabgarage brand" className="logo" />
            </Link>

            <div className="category">
              <p>Shop by category</p>

              <FaAngleDown size={14} />
            </div>
          </div>
          <div className="col-sm searchbar">
            <Searchbar />
          </div>
          <IconContext.Provider value={{ size: "24px" }}>
            <div className="col-4 col-sm-3 nav-icons">
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
        <Navbar expand="lg" className="d-sm-none d-flex mobile-searchnav">
          <Navbar.Toggle
            aria-controls="navbar-sidebar"
            className="navtoggle "
          />
          <Navbar.Offcanvas
            id="navbar-sidebar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="w-75"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={CartLogo} alt="cart logo" height={40} width={40} />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 pb-4 mobile-nav">
                <h5>Products</h5>
                <Link to={"/"}>
                  Shutter
                  <FaAngleRight />
                </Link>
                <Link to={"/"}>
                  Metal/Iron <FaAngleRight />
                </Link>
                <Link to={"/"}>
                  Stainless steel <FaAngleRight />
                </Link>
                <Link to={"/"}>
                  Aluminium <FaAngleRight />
                </Link>
                <Link to={"/"}>
                  Shed <FaAngleRight />
                </Link>
                <Link to={"/"}>
                  Metal steel furniture <FaAngleRight />
                </Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3 pb-4 mobile-nav">
                <h5>Services</h5>

                <Link to={"/"}>
                  Home services <FaAngleRight />
                </Link>
                <Link to={"/"}>
                  Contract services <FaAngleRight />
                </Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3 pb-5 mobile-nav">
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
                  <Link to={"logout"} className="pt-5">
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
