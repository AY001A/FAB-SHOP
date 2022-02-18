import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";

import * as Yup from "yup";
import "./style.scss";

const ForgetPasswordSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Please provide a valid email")
    .required("Email field must not be empty."),
});

const ForgetPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
    },
    validationSchema: ForgetPasswordSchema,

    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        navigate("/forget-password/success");
      }, 5000);
    },
  });

  return (
    <div className="fpassword-wrapper">
      <div className="fpassword-wrapper-container mt-5">
        <h2>Reset password</h2>
        <p className="mb-4">
          Please enter the e-mail address associated with your Fabgarage
          account. We will send you a link to this e-mail address to reset your
          password.
        </p>

        <Form
          autoComplete="off"
          noValidate
          validate="true"
          onSubmit={formik.handleSubmit}
        >
          <div className="form-group mb-3">
            <label htmlFor="resetpassword">
              <strong>Email Address</strong>
            </label>
            <Form.Control
              type="email"
              className="form-control input-group mb-4"
              id="resetpassword"
              name="emailAddress"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.emailAddress}
              isInvalid={formik.isSubmitting && formik.errors.emailAddress}
            />
            {formik.isSubmitting && formik.errors.emailAddress ? (
              <div className="invalid-feedback">
                {formik.errors.emailAddress}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-md w-100 bold"
            disabled={
              !formik.values.emailAddress ||
              formik.errors.emailAddress ||
              formik.isSubmitting
            }
          >
            <strong>
              {formik.isSubmitting ? "Submitting..." : "Reset Password"}
            </strong>
          </button>
        </Form>
        <p className="text-center mt-4">
          <Link to="/login" className="text-decoration-none">
            Return to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
