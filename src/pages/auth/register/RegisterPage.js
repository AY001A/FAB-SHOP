import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { register, login, reset } from "../../../services/slices/authSlice";

const registrationSchema = Yup.object().shape({
  FirstName: Yup.string()
    .required("First name field must not be empty")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
  LastName: Yup.string()
    .required("Last name field must not be empty")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
  EmailAddress: Yup.string()
    .email("Please provide a valid email address")
    .required("Email field must not be empty."),
  Password: Yup.string()
    .required("Password field must not be empty")
    .min(5, "Password must not be less than 5 characters"),
  PhoneNumber: Yup.number().required("Phone number must be included"),
  AcceptTerms: Yup.bool().oneOf(
    [true],
    "Accept our terms and conditions to continue"
  ),
});

const RegisterPage = () => {
  const { isAuthenticated, status, error, errorMessage, isLoading } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(reset());
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      FirstName: "",
      LastName: "",
      EmailAddress: "",
      LastLogin: !Date.now ? +new Date() : Date.now(),
      AccountType: "CUSTOMER",
      Password: "",
      PhoneNumber: "",
      AcceptTerms: false,
    },

    validationSchema: registrationSchema,

    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  if (!error && status === "successful") {
    const cred = {
      username: formik.values.EmailAddress,
      password: formik.values.Password,
    };
    dispatch(login(cred));
  }
  if (isAuthenticated && !error) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container pb-5">
      <h3>
        <strong>REGISTER</strong>
      </h3>
      <p className="text-muted">
        Register with us today to access lots of fabricated product of your
        choice.{" "}
      </p>

      {error &&
        errorMessage.map((err) => (
          <div className="alert alert-danger h-25" role="alert">
            {err}
          </div>
        ))}

      <Form
        noValidate
        validate="true"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group mb-3 is-invalid">
          <label htmlFor="firstName" className="mb-1">
            First Name
          </label>
          <Form.Control
            type="text"
            className="form-control"
            id="FirstName"
            name="FirstName"
            onChange={formik.handleChange}
            isInvalid={formik.touched.FirstName && formik.errors.FirstName}
            value={formik.values.FirstName}
          />
          <div className="invalid-feedback">{formik.errors.FirstName}</div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="LastName">Last Name</label>
          <Form.Control
            type="text"
            className="form-control"
            id="LastName"
            name="LastName"
            onChange={formik.handleChange}
            isInvalid={formik.touched.LastName && formik.errors.LastName}
            value={formik.values.LastName}
          />
          <div className="invalid-feedback">{formik.errors.LastName}</div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="EmailAddress" className="mb-1">
            Email
          </label>
          <Form.Control
            type="email"
            className="form-control"
            id="EmailAddress"
            name="EmailAddress"
            aria-describedby="EmailAddress"
            onChange={formik.handleChange}
            isInvalid={
              formik.touched.EmailAddress && formik.errors.EmailAddress
            }
            value={formik.values.EmailAddress}
          />
          <div className="invalid-feedback">{formik.errors.EmailAddress}</div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <Form.Control
            type="password"
            className="form-control"
            id="password"
            name="Password"
            onChange={formik.handleChange}
            isInvalid={formik.touched.Password && formik.errors.Password}
            value={formik.values.Password}
          />
          <div className="invalid-feedback">{formik.errors.Password}</div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="phone">Phone</label>
          <Form.Control
            type="tel"
            className="form-control"
            id="phone"
            name="PhoneNumber"
            onChange={formik.handleChange}
            isInvalid={formik.touched.PhoneNumber && formik.errors.PhoneNumber}
            value={formik.values.PhoneNumber}
          />
          <div className="invalid-feedback">{formik.errors.PhoneNumber}</div>
        </div>

        <div className="form-check pt-4 pb-4">
          <Form.Check.Input
            type="checkbox"
            id="checkbox"
            name="AcceptTerms"
            onChange={formik.handleChange}
            isInvalid={formik.touched.AcceptTerms && formik.errors.AcceptTerms}
            value={formik.values.AcceptTerms}
          />
          <label className="form-check-label" htmlFor="checkbox">
            Accept our terms and conditions and privacy policy.
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-md mt-3"
          disabled={isLoading}
        >
          {isLoading ? "Please wait..." : "Register"}
        </button>
      </Form>

      <p className="small mt-4 text-center">
        {`Already have an account?  
        `}
        <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
