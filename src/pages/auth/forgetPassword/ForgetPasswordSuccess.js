import React from "react";
import "./style.scss";
import Envelope from "../../../assets/icons/envelope.svg";



const ForgetPasswordSuccess = () => {
  return (
    <div className="fpassword-wrapper">
      <div className="fpassword-wrapper-container mt-5">
        <h2>Reset password</h2>
        <p className="mb-4">
          We have sent you an e-mail with instructions on how to reset your
          password. Check your inbox and click on the link provided.
        </p>

        <div className="w-100  d-flex justify-content-center mt-5">
          <img src={Envelope} alt="reset email success" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordSuccess;
