import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/cucumislogo.svg";
import Facebook from "../../assets/icons/uit_facebook-f.svg";
import LinkedIn from "../../assets/icons/feather_linkedin.svg";
import Whatsapp from "../../assets/icons/bi_whatsapp.svg";
import Instagram from "../../assets/icons/akar-icons_instagram-fill.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="bd-footer align-middle mt-5">
      <div className="container py-5 ">
        <div className="row">
          <div className="col-lg-3 mb-3 col-sm-12">
            <Link to={"/"} className="flex-start">
              <img src={Logo} alt="fabgarage brand" className="logo" />
            </Link>
            <p className="footerDesc mt-3">
              Welcome to Nigeria’s First Online Fabrication Service Provider.
            </p>

            <div className="socialMedia">
              <Link to={"/"}>
                <img
                  src={Facebook}
                  alt="fabgarage brand"
                  className="socialMediaIcons"
                />
              </Link>

              <Link to={"/"}>
                <img
                  src={Instagram}
                  alt="fabgarage brand"
                  className="socialMediaIcons"
                />
              </Link>

              <Link to={"/"}>
                <img
                  src={LinkedIn}
                  alt="fabgarage brand"
                  className="socialMediaIcons"
                />
              </Link>

              <Link to={"/"}>
                <img
                  src={Whatsapp}
                  alt="fabgarage brand"
                  className="socialMediaIcons"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg offset-lg-1 mb-3 links col-sm-12">
            <h5 className="footerLinkHeader mb-3">Products</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Shutter
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Metal/Iron
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Stainless steel
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Aluminium
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Shed
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Metal steel furniture
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg mb-3">
            <h5 className="footerLinkHeader mb-3">Sercives</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Home service
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Contract service
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg mb-3">
            <h5 className="footerLinkHeader mb-3">Quick links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg mb-3">
            <h5 className="footerLinkHeader mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Help center
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg mb-3">
            <h5 className="footerLinkHeader mb-3">Contact us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  (+234) 819 567 6703
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Fabgarage@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
