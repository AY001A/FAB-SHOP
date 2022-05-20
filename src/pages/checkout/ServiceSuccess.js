import { Link } from "react-router-dom";
import THUMBSUP from "../../assets/icons/thumbsup.svg";

import "./checkoutSuccess.scss";

const ServiceSuccess = () => {
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
        <p className="text-bold">Thank you for your Service Order</p>

        <p className="">
          We’ve sent an email and SMS with all the details of your order
        </p>

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

export default ServiceSuccess;
