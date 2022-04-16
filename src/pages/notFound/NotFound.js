import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    
    <div className="mt-5 text-center">
      <p className=" display-1 fw-700">404</p>
      <p className="h3 mb-5">page not found</p>

      <Link to="/">
        {" "}
        <button className="btn btn-primary fw-bold" type="button">
          Return to Homepage
        </button>
      </Link>
      
    </div>
  );
};

export default NotFound;
