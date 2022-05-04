import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import THUMBSUP from "../../assets/icons/thumbsup.svg";
import { refreshCart } from "../../services/slices/cartSlice";

import "./checkoutSuccess.scss";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshCart());
  }, [dispatch]);

  return (
    <div className="checkout_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center thumb">
            <img src={THUMBSUP} alt="fabgarage brand" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-bold">Thank you for shopping with us</p>

        <p className="">Our agents will reach out to you soon.</p>

        <Link to="/">
          {" "}
          <button className="btn btn-primary mt-2" type="button">
            Return to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
