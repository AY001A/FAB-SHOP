import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import SuccessBar from "../../components/successBar/SuccessBar";
import "./styles.scss";
import { getUserById } from "../../api/user";
import {
  useChangePassword,
  useGetUserById,
  useUpdateUserAccount,
} from "../../hook/useUser";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
<<<<<<< HEAD
import { Spinner } from "react-bootstrap";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const AccountPageSchema = Yup.object().shape({
  Name: Yup.string()
    .required("Name field must not be empty")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

  Email: Yup.string()
    .email("Please provide a valid email address")
    .required("Email field must not be empty."),
  Password: Yup.string()
    .required("Password field must not be empty")
    .min(5, "Password must not be less than 5 characters"),
  PhoneNumber: Yup.string()
    .required("Phone number must be included")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(11, "phone number not valid")
    .max(14, "phone number not valid"),
  Shippingaddress: Yup.string().required("Shipping address must be included"),
=======
import { Form, Spinner } from "react-bootstrap";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const accountSchema = Yup.object().shape({
  PhoneNumber: Yup.string()
    .required("Phone number must be included")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(11, "Should not be less than 11")
    .max(14, "phone number not valid"),

  // ShippingAddress: Yup.string()
});

const passwordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("input old password "),
  newPassword: Yup.string()
    .required("Password is required")
    .min(5, "Password must be longer than 5 letters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password"),
>>>>>>> 0aa28646d1df865a050520b4afd639dffdfe4e03
});

const AccountPage = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  let usr = isAuthenticated ? user?.data?.data?.fabAccountDetails : null;
  const { data, status } = useGetUserById(usr?.Id);
  const mutation = useUpdateUserAccount();
  const changePassword = useChangePassword();
  // console.log(data.Id);
  const formik = useFormik({
    initialValues: {
      Id: data?.Id || "",
      Phone: data?.PhoneNumber || "",

      ShippingAddress: status === "success" ? data?.ShippingAddress : " ",
    },
    enableReinitialize: true,
    validationSchema: accountSchema,
    onSubmit: (values, { setSubmitting }) => {
      mutation.mutate(
        {
          Id: values.Id,
          Phone: values.PhoneNumber,
          ShippingAddress: values.ShippingAddress,
        },
        {
          onSuccess() {
            setSubmitting(false);
          },
          onError() {
            setSubmitting(false);
          },
        }
      );
    },
  });

  const passwordForm = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: passwordSchema,

    onSubmit(values, { setSubmitting }) {
      changePassword.mutate(values, {
        onSuccess(res) {
          setSubmitting(false);
          passwordForm.resetForm();
        },
        onError(err) {
          setSubmitting(false);
          console.log(err);
        },
      });
    },
  });

  if (!isAuthenticated) return <Navigate to={"/login"} replace={true} />;

  return (
    <div className="account container">
      {status === "loading" && (
        <div className="text-center w-100 m-5 p-4 ">
          <Spinner className="text-primary" animation="border" />
        </div>
      )}
      {status === "success" && (
        <>
          <div className="py-3">
            <h1 className="ps-3 pb-3">My account</h1>
            <div className="p-2 ps-4 pt-4 bg-light border rounded-top">
              <p className="text-muted">ACCOUNT DETAIL</p>
              {/* {error &&
        AccountPageError.length &&
        AccountPageError?.map((err) => (
          <div className="alert alert-danger h-25" role="alert">
            {err}
            
            </div>
<<<<<<< HEAD
            ))}   */}
              <Form
                noValidate
                validate="true"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <div className=" w-100 bg-light border p-4 ">
                  <div className="ps-4 pt-2">
                    <p>Name:</p>
                    <input
                      type={"text"}
                      placeholder="name"
                      onChange={formik.handleChange}
                      isInvalid={formik.touched.Name && formik.errors.Name}
                      value={`${data.FirstName} ${data.LastName}`}
                      disabled
                      className="form-control rounded-0 bg-white w-100"
                    />
                  </div>
                </div>
=======
            <div className=" w-100 bg-light border p-4 ">
              <div className="ps-4 pt-2">
                <p>Name:</p>
                <input
                  type={"text"}
                  placeholder="name"
                  value={`${data.FirstName} ${data.LastName}`}
                  disabled
                  className="form-control rounded-0 bg-white w-100"
                />
              </div>
            </div>

            <div className="w-100 bg-light border p-4 ">
              <div className="ps-4 pt-2">
                <p>Email:</p>
                <input
                  type={"email"}
                  placeholder="name"
                  value={data.EmailAddress}
                  className="form-control rounded-0 bg-white w-100"
                  disabled
                />
              </div>
            </div>

            <Form noValidate validate="true" onSubmit={formik.handleSubmit}>
              <div className=" bg-light border p-4 ">
                <div className="ps-4 pt-2">
                  <p>Phone number:</p>
                  <Form.Control
                    type="text"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    isInvalid={
                      formik.touched.PhoneNumber && formik.errors.PhoneNumber
                    }
                    onChange={formik.handleChange}
                    value={formik.values.PhoneNumber}
                    className="form-control rounded-0 bg-white w-100 "
                  />
                  <div className="invalid-feedback">
                    {formik.errors.PhoneNumber}
                  </div>
                </div>
              </div>

              <div className="bg-light border p-4 rounded-bottom ">
                <div className="ps-4 pt-2">
                  <p>Shipping address:</p>

                  <input
                    type={"text"}
                    className="form-control rounded-0 bg-white w-100"
                    id="ShippingAddress"
                    onChange={formik.handleChange}
                    value={formik.values.ShippingAddress}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="btn btn-primary w-100 btn-lg mt-4 mb-5"
              >
                {formik.isSubmitting ? "updating..." : "Save Changes"}
              </button>
            </Form>
          </div>
>>>>>>> 0aa28646d1df865a050520b4afd639dffdfe4e03

                <div className="w-100 bg-light border p-4 ">
                  <div className="ps-4 pt-2">
                    <p>Email:</p>
                    <input
                      type={"email"}
                      placeholder="name"
                      value={data.EmailAddress}
                      onChange={formik.handleChange}
                      isInvalid={
                        formik.touched.EmailAddress &&
                        formik.errors.EmailAddress
                      }
                      className="form-control rounded-0 bg-white w-100"
                      disabled
                    />
                  </div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className=" bg-light border p-4 ">
                    <div className="ps-4 pt-2">
                      <p>Phone number:</p>
                      <input
                        type="number"
                        id="PhoneNumber"
                        name="PhoneNumber"
                        value={formik.values.PhoneNumber}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.PhoneNumber &&
                          formik.errors.PhoneNumber
                        }
                        className="form-control rounded-0 bg-white w-100 "
                      />
                    </div>
                  </div>

                  <div className="bg-light border p-4 rounded-bottom ">
                    <div className="ps-4 pt-2">
                      <p>Shipping address:</p>

                      <input
                        type={"text"}
                        className="form-control rounded-0 bg-white w-100"
                        id="ShippingAddress"
                        value={formik.values.ShippingAddress}
                        onChange={formik.handleChange}
                        isInvalid={
                          formik.touched.ShippingAddress &&
                          formik.errors.ShippingAddress
                        }
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="btn btn-primary w-100 btn-lg mt-4 mb-5"
                  >
                    {formik.isSubmitting ? "updating..." : "Save Changes"}
                  </button>
                </form>
              </Form>
            </div>
<<<<<<< HEAD

            <div className="py-3 mt-5">
              <div className="p-2 ps-4 pt-4 bg-light border rounded-top">
                <h5 className="text-muted">CHANGE PASSWORD</h5>
=======
            <Form
              noValidate
              validate="true"
              onSubmit={passwordForm.handleSubmit}
            >
              <div className=" w-100 bg-light border p-4 ">
                <div className="ps-4 pt-2">
                  <p>Old Password</p>
                  <Form.Control
                    id="currentPassword"
                    type={"password"}
                    onChange={passwordForm.handleChange}
                    isInvalid={
                      passwordForm.touched.currentPassword &&
                      passwordForm.errors.currentPassword
                    }
                    value={passwordForm.values.currentPassword}
                    className="form-control rounded-0 bg-white w-100"
                  />
                  <div className="invalid-feedback">
                    {passwordForm.errors.currentPassword}
                  </div>
                </div>
              </div>

              <div className="w-100 bg-light border p-4 ">
                <div className="ps-4 pt-2">
                  <p>New Password</p>
                  <Form.Control
                    id="newPassword"
                    type={"password"}
                    isInvalid={
                      passwordForm.touched.newPassword &&
                      passwordForm.errors.newPassword
                    }
                    onChange={passwordForm.handleChange}
                    value={passwordForm.values.newPassword}
                    // value={data.EmailAddress}
                    className="form-control rounded-0 bg-white w-100"
                  />
                  <div className="invalid-feedback">
                    {passwordForm.errors.newPassword}
                  </div>
                </div>
>>>>>>> 0aa28646d1df865a050520b4afd639dffdfe4e03
              </div>
              <form onSubmit={passwordForm.handleSubmit}>
                <div className=" w-100 bg-light border p-4 ">
                  <div className="ps-4 pt-2">
                    <p>Old Password</p>
                    <input
                      id="currentPassword"
                      type={"password"}
                      onChange={passwordForm.handleChange}
                      value={passwordForm.values.currentPassword}
                      isInvalid={
                        formik.touched.Password && formik.errors.Password
                      }
                      className="form-control rounded-0 bg-white w-100"
                    />
                  </div>
                </div>

<<<<<<< HEAD
                <div className="w-100 bg-light border p-4 ">
                  <div className="ps-4 pt-2">
                    <p>New Password</p>
                    <input
                      id="newPassword"
                      type={"password"}
                      onChange={passwordForm.handleChange}
                      isInvalid={
                        formik.touched.Password && formik.errors.Password
                      }
                      value={passwordForm.values.newPassword}
                      // value={data.EmailAddress}
                      className="form-control rounded-0 bg-white w-100"
                    />
                  </div>
                </div>

                <div className=" bg-light border p-4 ">
                  <div className="ps-4 pt-2">
                    <p>Confirm Password</p>
                    <input
                      id="confirmPassword"
                      type={"password"}
                      onChange={passwordForm.handleChange}
                      isInvalid={
                        formik.touched.Password && formik.errors.Password
                      }
                      value={passwordForm.values.confirmPassword}
                      // value={data.PhoneNumber}
                      className="form-control rounded-0 bg-white w-100 "
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={passwordForm.isSubmitting}
                  className="btn btn-primary w-100 btn-lg mt-4 mb-5"
                >
                  {passwordForm.isSubmitting
                    ? "updating..."
                    : "Change Password"}
                </button>
              </form>
            </div>
=======
              <div className=" bg-light border p-4 ">
                <div className="ps-4 pt-2">
                  <p>Confirm Password</p>
                  <Form.Control
                    id="confirmPassword"
                    type={"password"}
                    onChange={passwordForm.handleChange}
                    value={passwordForm.values.confirmPassword}
                    isInvalid={
                      passwordForm.touched.confirmPassword &&
                      passwordForm.errors.confirmPassword
                    }
                    // value={data.PhoneNumber}
                    className="form-control rounded-0 bg-white w-100 "
                  />
                  <div className="invalid-feedback">
                    {passwordForm.errors.confirmPassword}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={passwordForm.isSubmitting}
                className="btn btn-primary w-100 btn-lg mt-4 mb-5"
              >
                {passwordForm.isSubmitting ? "updating..." : "Change Password"}
              </button>
            </Form>
>>>>>>> 0aa28646d1df865a050520b4afd639dffdfe4e03
          </div>
        </>
      )}
    </div>
  );
};

export default AccountPage;
