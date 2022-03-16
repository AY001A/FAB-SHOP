import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { login, reset } from "../../../services/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Please provide a valid email")
    .required("Email field must not be empty"),
  password: Yup.string().required("Password field must not be empty"),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const { isLoading, error, errorMessage, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

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

      {error && (
        <div className="alert alert-danger h-25" role="alert">
          {errorMessage}
        </div>
      )}
      <Form
        noValidate
        validate="true"
        onSubmit={formik.handleSubmit}
        autoComplete="true"
      >
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <Form.Control
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="username"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.username}
            isInvalid={formik.touched.username && formik.errors.username}
          />
          <div className="invalid-feedback">{formik.errors.username}</div>
        </div>
        <div className="form-group mb-1">
          <label htmlFor="password">Password</label>
          <Form.Control
            type="password"
            className="form-control"
            id="password"
            name="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            isInvalid={formik.touched.password && formik.errors.password}
          />
          <div className="invalid-feedback">{formik.errors.password}</div>
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
