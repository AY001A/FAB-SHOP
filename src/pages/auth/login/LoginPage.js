import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import { login } from "../../../api/auth";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { login, logout, reset } from "../../../services/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Please provide a valid email")
    .required("Email field must not be empty"),
  password: Yup.string().required("Password field must not be empty"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { profile, isLoading, error, errorMessage, isAuthenticated } =
    useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: async (values, { setSubmitting }) => {
      dispatch(login(values));
    },
  });

  if (isAuthenticated && !error) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container">
      <h3>
        <strong>Login</strong>
      </h3>
      <p className="text-muted">
        Kindly input your details to login into your fabgarage account.
      </p>
      <Form
        noValidate
        validate="true"
        // autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <Form.Control
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            isInvalid={formik.touched.username && formik.errors.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="invalid-feedback">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="form-group mb-1">
          <label htmlFor="password">Password</label>
          <Form.Control
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={formik.touched.password && formik.errors.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-feedback">{formik.errors.password}</div>
          ) : null}
        </div>
        <p className=" mb-4 mt-1 text-end small">
          <Link to={"/forget-password"}>Forget password?</Link>
        </p>
        <button
          type="submit"
          className="btn btn-primary btn-md"
          disabled={isLoading}
        >
          {isLoading ? "Please wait..." : "Login"}
        </button>
      </Form>

      <p className="small mt-4 text-center">
        {`Dont have an Account yet?
          
        `}
        <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
