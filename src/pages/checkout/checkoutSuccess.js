import React, { useState } from "react";
import { Link } from "react-router-dom";
import THUMBSUP from "../../assets/icons/thumbsup.svg";

import "./checkoutSuccess.scss";

const CheckoutSuccess = () => {
  return (
    <div className="checkout_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 thumb">
            <img src={THUMBSUP} alt="fabgarage brand" />
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="display-1 fw-700">Thank you for your Purchase</p>
        <p className="h3 mb-5">
          We’ve sent an email and SMS with all the details <br />
          of your order
        </p>
        <p className="h3 mb-5">
          Your order number is <strong className="span">R6982209887</strong>{" "}
        </p>
        <p class="fw-bold">
          Do you need our expert to help you fix it?{" "}
          {/* <a href="#" class="link-warning">
            Book for installation
          </a> */}
        </p>

        <Link to="/">
          {" "}
          <button className="btn btn-primary fw-bold" type="button">
            Return to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
