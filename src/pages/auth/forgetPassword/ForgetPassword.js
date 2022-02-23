import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { reset, resetPassword } from "../../../services/slices/authSlice";
import * as Yup from "yup";
import "./style.scss";

const ForgetPasswordSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Please provide a valid email")
    .required("Email field must not be empty."),
});

const ForgetPassword = () => {
  const { isLoading, isSuccessful, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(reset());
    }
  }, [error, dispatch]);

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
    },
    validationSchema: ForgetPasswordSchema,

    onSubmit: (values, { setSubmitting }) => {
      dispatch(resetPassword(values));
    },
  });

  if (isSuccessful) {
    return <Navigate to={"success"} />;
  }

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

          <button type="submit" className="btn btn-primary btn-md w-100 bold">
            <strong>{isLoading ? "Submitting..." : "Reset Password"}</strong>
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
