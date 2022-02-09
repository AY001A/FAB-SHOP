import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container">
      <h3>
        <strong>Login</strong>
      </h3>
      <p className="text-muted">
        Kindly input your details to login into your fabgarage account.
      </p>
      <form autoComplete="off">
        <div className="form-group mb-3">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div classNameName="form-group mb-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <p
          className="form-check-label mb-4 mt-1 text-end small"
          for="exampleCheck1"
        >
          Forget password?
        </p>
        <button type="submit" className="btn btn-primary btn-md">
          Login
        </button>
      </form>

      <p className="small mt-4 text-center">
        {`Dont have an Account yet?
          
        `}
        <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
