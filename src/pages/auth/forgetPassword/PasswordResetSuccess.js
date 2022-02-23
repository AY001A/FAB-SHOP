import React from "react";
import SuccessIcon from "../../../assets/icons/success-check.svg";
import { Link } from "react-router-dom";

const PasswordResetSuccess = () => {
  return (
    <div className="fpassword-wrapper">
      <div className="fpassword-wrapper-container mt-5">
        <h2>Successful</h2>
        <p className="mb-4 text-center">
          Thank you, your password reset was successful.
        </p>

        <div className="w-100  d-flex justify-content-center mt-5 mb-2">
          <img src={SuccessIcon} alt="reset email success" />
        </div>

        <Link to={"/login"}>
          <button type="submit" className="btn btn-primary btn-md w-100 bold">
            <strong>Continue to login</strong>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
