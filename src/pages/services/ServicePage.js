import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "./services";
import Wielder from "../../assets/images/welder.jpg";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
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
        <div className="header-section-image row">
          <div className="col-sm-7">
            <img
              src={Wielder}
              alt="welder"
              className="rounded w-100  h-sm-75 mb-5"
            />

            <div className="service-header-description">
              <h3>Shutter Technician</h3>
              <p>
                Our technicians are highly trained to offer you the best service
                possible, we fix all types of shutter errors no matter how
                complex and difficult the problem is, our agents are always
                readily available to handle all form of requests
              </p>
              <div className="d-flex">
                <h5 className="">Features:</h5>
                <p className=""> Fixing, Repair, Maintainance</p>
              </div>
            </div>
          </div>
          <div className="service-form col-sm-5 d-none d-sm-block ">
            <h3 className="text-center  pb-4">Book Service</h3>
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
    </div>
  );
};

export default ServicePage;
