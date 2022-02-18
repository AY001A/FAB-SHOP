import React from "react";
import SuccessIcon from "../../../assets/icons/success-check.svg";

const PasswordResetSuccess = () => {
  return (
    <div className="fpassword-wrapper">
      <div className="fpassword-wrapper-container mt-5">
        <h2>Successful</h2>
        <p className="mb-4 text-center">
          Thank you, your password has being reset successfully. You will be
          redirect to login page shortly.
        </p>

        <div className="w-100  d-flex justify-content-center mt-5">
          <img src={SuccessIcon} alt="reset email success" />
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccess;
