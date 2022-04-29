import React from "react";
import { useState } from "react";
import "./styles.scss";
import Delivery from "../../assets/images/delievryImage.svg";
import { addShippingDetails } from "../../services/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

const DeliveryPageForm = () => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [address, setAddress] = useState("");
  // const [state, setState] = useState("Lagos");
  // const [details, setDetails] = useState({});

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      number: "",
      address: "",
      state: "Lagos",
    },
    onSubmit(values) {
      dispatch(addShippingDetails(values));
    },
  });

  const dispatch = useDispatch();

  return (
    <div className="container deliveryPage mt-5">
      <div className="row p-4">
        <div className="col-md-6">
          <div className="deliveryLeftCol">
            <h1 className="deliveryHeader">Delivery Address Form</h1>
            <p className="deliverParagrapgh">
              Kindly fill this form to help you get your order delivered at your
              doorstep.
            </p>
            <form className="my-5" onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="labelTitle form-label">
                  Full name
                </label>
                <input
                  id="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  type="text"
                  className=" p-2 form-control"
                  name="fullName"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="labelTitle form-label">
                  Email address
                </label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="email"
                  className=" p-2 form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="number" className="labelTitle form-label">
                  Phone number
                </label>
                <input
                  type="number"
                  name="number"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  className=" p-2 form-control"
                  id="number"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="labelTitle form-label">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  className=" p-2 form-control"
                  id="address"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="state" className="labelTitle form-label">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  className="form-select p-2 "
                  value={formik.values.state}
                  onChange={formik.handleChange}
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
                  className="btn-primary w-100 p-2 deliveryButton"
                  // onClick={() => dispatch(addShippingDetails(details))}
                >
                  Proceed to Checkout
                </button>
              </div>
            </form>
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
