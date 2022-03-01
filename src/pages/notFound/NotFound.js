import React from "react";
import { Link } from "react-router-dom";
import "./notFound.scss"

const NotFound = () => {


  
  return  <div className="notFound p-5 m-5 ">
      <p className="fs-1 fw-bold">404</p>
      <p className="fs-2 fw-normal">page not found</p>
      <h5 className="p-3 m-3">This page you are looking for does not exit or was removed.<br/>we have alot of interesting products for you on the homepage</h5>
       <Link to="/"> <button className="btn btn-primary d-grid gap-2 col-6 fw-bold" type="button">Return to Homepage</button></Link>
      </div>
  
};

export default NotFound;


