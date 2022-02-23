import React, { useEffect } from "react";
import * as Yup from "yup";
import { useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  processPasswordReset,
  reset,
} from "../../../services/slices/authSlice";
import PasswordResetSuccess from "../../../pages/auth/forgetPassword/PasswordResetSuccess";

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be longer than 5 letters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password"),
});
const PasswordReset = () => {
  const dispatch = useDispatch();
  const { isLoading, resetCompleted, error, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [searchParams] = useSearchParams();
  const ownerId = searchParams.get("ownerId");
  const emCid = searchParams.get("emCid");

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: passwordSchema,

    onSubmit: (values, { setSubmitting }) => {
      const password = {
        newPassword: values.password,
      };
      const cred = {
        password,
        ownerId,
        emCid,
      };

      dispatch(processPasswordReset(cred));
    },
  });
  if (resetCompleted) {
    return <PasswordResetSuccess />;
  }

  return (
    <div className="fpassword-wrapper">
      <div className="fpassword-wrapper-container mt-5">
        <h2>Set new password</h2>
        <p className="mb-4 text-center">
          Please enter a new password for your Fabgarage account
        </p>

        {error &&
          errorMessage.map((err) => (
            <div className="alert alert-danger h-25" role="alert">
              {err}
            </div>
          ))}
        <Form
          autoComplete="off"
          noValidate
          validate="true"
          onSubmit={formik.handleSubmit}
        >
          <div className="form-group mb-3">
            <label htmlFor="resetpassword">
              <strong>Enter password</strong>
            </label>
            <Form.Control
              type="password"
              className="form-control input-group mb-4"
              id="resetpassword"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.password}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            {formik.isSubmitting && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="confirmpassword">
              <strong>Confirm password</strong>
            </label>
            <Form.Control
              type="password"
              className="form-control input-group mb-4"
              id="confirmpassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              values={formik.values.confirmPassword}
              isInvalid={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            {formik.isSubmitting && formik.errors.confirmPassword ? (
              <div className="invalid-feedback">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary btn-md w-100 bold">
            <strong>{isLoading ? "Submitting..." : "Reset Password"}</strong>
          </button>
        </Form>
      </div>
    </div>
  );
};

export default PasswordReset;
