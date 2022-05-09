import React from "react";
import { useState } from "react";
import "./styles.scss";
import Delivery from "../../assets/images/delievryImage.svg";
import { addShippingDetails } from "../../services/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate, Navigate } from "react-router-dom";
// import { useMutation } from "react-query";
import { useCreateCart } from "../../hook/useOrder";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";

const deliverySchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name field must not be empty")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
  email: Yup.string()
    .email("Please provide a valid email address")
    .required("Email address field must not be empty."),
  number: Yup.number().required("Phone number must be included"),
  address: Yup.string().required("Address field must not be empty"),
  state: Yup.string().required("State field must not be empty"),
});

const DeliveryPageForm = () => {
  const { isAuthenticated, status, error, errorMessage, isLoading } =
    useSelector((state) => state.auth);
  const { Quantity, Items } = useSelector((state) => state.cart);

  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const mutation = useCreateCart();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      number: "",
      address: "",
      state: "Lagos",
    },

    validationSchema: deliverySchema,

    onSubmit(values) {
      setSubmitting(true);
      dispatch(addShippingDetails(values));
      mutation.mutate(
        {
          OwnerId: values.email,
          Items,
        },
        {
          onSuccess() {
            setSubmitting(false);
            navigate("checkout", { replace: true });
          },
          onError() {
            setSubmitting(false);
            toast.warn("oops! something went wrong, try again.");
          },
        }
      );
    },
  });

  const dispatch = useDispatch();

  return (
    <div className="container deliveryPage mt-4">
      <div className="row p-2">
        <div className="col-md-6">
          <div className="deliveryLeftCol">
            <h1 className="deliveryHeader">Delivery Address Form</h1>
            <p className="deliverParagrapgh">
              Kindly fill this form to help you get your order delivered at your
              doorstep.
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
              className="my-2"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-2">
                <label htmlFor="fullName" className="labelTitle form-label">
                  Full name
                </label>
                <Form.Control
                  id="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  type="text"
                  className=" p-2 form-control"
                  name="fullName"
                  aria-describedby="emailHelp"
                  isInvalid={formik.touched.fullName && formik.errors.fullName}
                />
                <div className="invalid-feedback">{formik.errors.fullName}</div>
              </div>

              <div className="mb-2">
                <label htmlFor="email" className="labelTitle form-label">
                  Email address
                </label>
                <Form.Control
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="email"
                  className=" p-2 form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  isInvalid={formik.touched.email && formik.errors.email}
                />
                <div className="invalid-feedback">{formik.errors.email}</div>
              </div>

              <div className="mb-2">
                <label htmlFor="number" className="labelTitle form-label">
                  Phone number
                </label>
                <Form.Control
                  type="number"
                  name="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  className=" p-2 form-control numberinput"
                  id="number"
                  aria-describedby="emailHelp"
                  isInvalid={formik.touched.number && formik.errors.number}
                />
                <div className="invalid-feedback">{formik.errors.number}</div>
              </div>

              <div className="mb-2">
                <label htmlFor="address" className="labelTitle form-label">
                  Address
                </label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  className=" p-2 form-control"
                  id="address"
                  aria-describedby="emailHelp"
                  isInvalid={formik.touched.address && formik.errors.address}
                />
                <div className="invalid-feedback">{formik.errors.address}</div>
              </div>

              <div className="mb-2">
                <label htmlFor="state" className="labelTitle form-label">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  className="form-select p-2 "
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  // isInvalid={formik.touched.state && formik.errors.state}
                >
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Kano</option>
                  <option>Port Harcourt</option>
                  <option>Delta</option>
                </select>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="btn btn-primary w-100 p-2 "
                  disabled={Quantity === 0 || submitting}

                  // onClick={() => dispatch(addShippingDetails(details))}
                >
                  {submitting ? (
                    <Spinner animation="border" />
                  ) : (
                    "Proceed to Checkout"
                  )}
                  {isLoading ? "Please wait..." : "proceed"}
                </button>
              </div>
            </Form>
          </div>
        </div>

        <div className="col-md-6 deliveryImageContainer d-xs-none">
          <img className="img-fluid" src={Delivery} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryPageForm;
