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

import { useFormik } from "formik";
import { toast } from "react-toastify";
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
});

const AccountPage = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  let usr = isAuthenticated ? user?.data?.data?.fabAccountDetails : null;
  const { data, status } = useGetUserById(usr?.Id);
  const mutation = useUpdateUserAccount();
  const changePassword = useChangePassword();
  const formik = useFormik({
    initialValues: {
      Id: data ? data.Id : "",
      PhoneNumber: data ? data?.PhoneNumber : "",

      ShippingAddress: data ? data?.ShippingAddress : "",
    },
    enableReinitialize: true,

    onSubmit: (values, { setSubmitting }) => {
      mutation.mutate(values, {
        onSuccess() {
          setSubmitting(false);
        },
        onError() {
          setSubmitting(false);
        },
      });
    },
  });

  const passwordForm = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    onSubmit(values, { setSubmitting }) {
      changePassword.mutate(values, {
        onSuccess(res) {
          console.log(res);
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

            <div className="py-3 mt-5">
              <div className="p-2 ps-4 pt-4 bg-light border rounded-top">
                <h5 className="text-muted">CHANGE PASSWORD</h5>
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
          </div>
        </>
      )}
    </div>
  );
};

export default AccountPage;
