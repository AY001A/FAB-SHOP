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
          <div className="offset-lg-1 mb-3 links  col-md col-4">
            <h5 className="footerLinkHeader mb-3">Products</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/productCategory/5/shutter"} className="footerLinks">
                  Shutter
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/productCategory/6/metal-iron"}
                  className="footerLinks"
                >
                  Metal/Iron
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/productCategory/4/stainless-steel"}
                  className="footerLinks"
                >
                  Stainless steel
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/productCategory/3/aluminium"}
                  className="footerLinks"
                >
                  Aluminium
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/productCategory/7/shed"} className="footerLinks">
                  Shed
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/productCategory/8/furnitures"}
                  className="footerLinks"
                >
                  Metal steel furniture
                </Link>
              </li>
            </ul>
          </div>
          
          
          
          <div className="mb-3 col-md col-4">
            <h5 className="footerLinkHeader mb-3">Sercives</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/services"} className="footerLinks">
                  Home service
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/services"} className="footerLinks">
                  Contract service
                </Link>
              </li>
            </ul>
          </div>
          <div className=" mb-3 col-md col-4">
            <h5 className="footerLinkHeader mb-3">Quick links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/policy"} className="footerLinks">
                  Policy
                </Link>
              </li>
            </ul>
          </div>


          <div className="col-md mb-3 col-4">
            <h5 className="footerLinkHeader mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/help"} className="footerLinks">
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

          <div className=" col-md mb-3 col-4">
            <h5 className="footerLinkHeader mb-3">Contact us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  (+234) 819 567 6703
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/"} className="footerLinks">
                  Info@cucumislush.com
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
