import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="container">
      <h3>
        <strong>REGISTER</strong>
      </h3>
      <p className="text-muted">
        Register with us today to access lots of fabricated product of your
        choice.{" "}
      </p>
      <form autoComplete="off">
        <div className="form-group mb-3 is-invalid">
          <label for="firstName" classNameName="mb-1">
            First Name
          </label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="form-group mb-3">
          <label for="lastName">Last Name</label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="form-group mb-3">
          <label for="email" classNameName="mb-1">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group mb-3">
          <label for="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="form-group mb-3">
          <label for="phone">Phone</label>
          <input type="tel" className="form-control" id="phone" />
        </div>

        <div class="form-check pt-4 pb-4">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Accept our terms and conditions and privacy policy.
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-md mt-3">
          Register
        </button>
      </form>

      <p className="small mt-4 text-center">
        {`Already have an account?
          
        `}
        <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
