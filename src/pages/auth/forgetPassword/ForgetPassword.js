import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const ForgetPassword = () => {
  return (
    <div className="fpassword-wrapper">
      <div className="fpassword-wrapper-container mt-5">
        <h2>Reset password</h2>
        <p className="mb-4">
          Please enter the e-mail address associated with your Fabgarage
          account. We will send you a link to this e-mail address to reset your
          password.
        </p>

        <form autoComplete="off">
          <div className="form-group mb-3">
            <label for="resetpassword">
              <strong>Email Address</strong>
            </label>
            <input
              type="email"
              className="form-control input-group mb-4"
              id="resetpassword"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-md w-100 bold">
            <strong>Reset password</strong>
          </button>
        </form>
        <p className="text-center mt-4">
          <Link to="/login" className="text-decoration-none">
            Return to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
