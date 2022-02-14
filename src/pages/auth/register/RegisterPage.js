import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";

const registrationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name field must not be empty"),
  lastName: Yup.string().required("Last name field must not be empty"),
  email: Yup.string()
    .email("Please provide a valid email")
    .required("Email field must not be empty."),
  password: Yup.string()
    .required("Password field must not be empty")
    .min(5, "Password must not be less than 5 characters"),
  phone: Yup.number().required("Phone number must be included"),
  terms: Yup.bool().oneOf(
    [true],
    "Accept our terms and conditions to continue"
  ),
});

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      terms: false,
    },

    validationSchema: registrationSchema,

    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="container">
      <h3>
        <strong>REGISTER</strong>
      </h3>
      <p className="text-muted">
        Register with us today to access lots of fabricated product of your
        choice.{" "}
      </p>

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
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.firstName && formik.errors.firstName}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="invalid-feedback">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="lastName">Last Name</label>
          <Form.Control
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.lastName && formik.errors.lastName}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="invalid-feedback">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <Form.Control
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && formik.errors.email}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <Form.Control
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.password && formik.errors.password}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-feedback">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="phone">Phone</label>
          <Form.Control
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.phone && formik.errors.phone}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="invalid-feedback">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="form-check pt-4 pb-4">
          <Form.Check.Input
            type="checkbox"
            id="checkbox"
            name="terms"
            onChange={formik.handleChange}
            isInvalid={formik.touched.terms && formik.errors.terms}
            value={formik.values.terms}
          />
          <label className="form-check-label" htmlFor="checkbox">
            Accept our terms and conditions and privacy policy.
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-md mt-3">
          Register
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
