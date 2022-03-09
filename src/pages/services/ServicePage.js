import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "./services";
import Wielder from "../../assets/images/welder.jpg";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import ServiceIcon from "../../assets/icons/how-it-works/service.svg";
import CallIcon from "../../assets/icons/how-it-works/phone-call.svg";
import RateIcon from "../../assets/icons/how-it-works/rate-review.svg";
import "./servicePage.scss";

const serviceSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string()
    .email("must be a valid email")
    .required("email is required"),
  phone: Yup.string().required("phone number is required"),
  address: Yup.string().required("address is required"),
});

const ServicePage = () => {
  const { service } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = services.find((val) => val.url_path === service);
    setData(res);
  }, [service]);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      description: "",
    },

    validationSchema: serviceSchema,

    onSubmit: async (values, { setSubmitting }) => {
      // dispatch(login(values));
      console.log(values);
    },
  });

  console.log(data);
  return (
    <div className="service-wrapper">
      <section className="header-section mt-4">
        <div className="header-section-image row g-sm-5">
          <div className="col-sm-7 section-image-wrapper">
            <img
              src={Wielder}
              alt="welder"
              className="rounded w-100  h-sm-75 mb-5 "
            />

            <div className="service-header-description">
              <h3 className="fw-bold">{data?.name}</h3>
              <p>{data?.description}</p>
              <div className="d-flex">
                <h5 className="">Features:</h5>
                <p className=""> Fixing, Repair, Maintainance</p>
              </div>

              <div>
                <h5 className="fw-bold">Additional information</h5>
                <p>
                  We offer high class services to all our clients, and we
                  guarantee that our professionals are highly trained and will
                  offer the best repair you can ever find in the market....Just
                  know that all our agents are just one call away, when you make
                  a booking with us.
                </p>
              </div>
            </div>
          </div>
          <div className="service-form col-sm-5  ">
            <h3 className="text-center  pb-2">Book Service</h3>
            <Form noValidate validate="true" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    isInvalid={
                      formik.touched.firstname && formik.errors.firstname
                    }
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="invalid-feedback">
                      {formik.errors.firstname}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mb-3 col-6">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Last name"
                    name="lastname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    isInvalid={
                      formik.touched.lastname && formik.errors.lastname
                    }
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="invalid-feedback">
                      {formik.errors.lastname}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    isInvalid={formik.touched.email && formik.errors.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="form-group mb-3 col-6">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    isInvalid={formik.touched.phone && formik.errors.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="invalid-feedback">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mb-3 ">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                    isInvalid={formik.touched.address && formik.errors.address}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="invalid-feedback">
                      {formik.errors.address}
                    </div>
                  ) : null}
                </div>
                <div className="form-group mb-3  ">
                  <Form.Control
                    type="text"
                    className="form-control input-desc"
                    id="desc"
                    name="desc"
                    placeholder="A brief description of what you need "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    isInvalid={
                      formik.touched.description && formik.errors.description
                    }
                  />
                  {/* {formik.touched.description && formik.errors.description ? (
                    <div className="invalid-feedback">
                      {formik.errors.description}
                    </div>
                  ) : null} */}
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <strong>Request Service Quote</strong>
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>
      <div className="howItWorks">
        <h1>HOW IT WORKS</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="card p-5">
              <div className="howItWorksIcon">
                <img src={ServiceIcon} alt="" className="howItWorksIcons" />
              </div>
              <h5 className="card-title mb-2 ">Select the service</h5>
              <p className="card-text text-muted">
                Tell us what service you want, shutter work, steel work
                weldering work and others.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-5">
              <div className="howItWorksIcon">
                <img src={CallIcon} alt="" className="howItWorksIcons" />
              </div>
              <h5 className="card-title mb-2 ">Provide Contact </h5>
              <p className="card-text text-muted">
                Share your contact details including correct email and mobile
                phone number.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-5">
              <div className="howItWorksIcon">
                <img src={RateIcon} alt="" className="howItWorksIcons" />
              </div>
              <h5 className="card-title mb-2 ">Get quote and hire</h5>
              <p className="card-text text-muted">
                Share your requirements and get the best price in the the
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
