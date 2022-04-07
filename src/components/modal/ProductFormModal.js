import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import "./style.scss";

const ProductFormModal = (props) => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      description: "",
    },

    // validationSchema: serviceSchema,

    onSubmit: async (values, { setSubmitting }) => {
      // dispatch(login(values));
      console.log(values);
    },
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="example-modal-sizes-title-lg"
      backdrop="static"
      centered
      className="service-modal"
    >
      <Modal.Header closeButton>
        {/* <Modal.Title>Place Order</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          className="requires-validation"
          onSubmit={formik.handleSubmit}
        >
          <div className="row g-3">
            <div className="form-group col-6">
              <Form.Control
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                size="lg"
                placeholder="First name"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                isInvalid={formik.touched.firstname && formik.errors.firstname}
              />
              <div className="invalid-feedback">{formik.errors.firstname}</div>
            </div>
            <div className="form-group mb-3 col-6">
              <Form.Control
                type="text"
                className="form-control"
                id="lastname"
                size="lg"
                placeholder="Last name"
                name="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                isInvalid={formik.touched.lastname && formik.errors.lastname}
              />
              <div className="invalid-feedback">{formik.errors.lastname}</div>
            </div>
          </div>
          <div className="row g-3">
            <div className="form-group col-6">
              <Form.Control
                type="email"
                className="form-control"
                id="email"
                size="lg"
                placeholder="Email Address"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <div className="invalid-feedback">{formik.errors.email}</div>
            </div>

            <div className="form-group  col-6">
              <Form.Control
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                size="lg"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                isInvalid={formik.touched.phone && formik.errors.phone}
              />
              <div className="invalid-feedback">{formik.errors.phone}</div>
            </div>
            <div className="form-group ">
              <Form.Control
                type="text"
                className="form-control"
                id="address"
                size="lg"
                name="address"
                placeholder="Address"
                onChange={formik.handleChange}
                value={formik.values.address}
                isInvalid={formik.touched.address && formik.errors.address}
              />
              <div className="invalid-feedback">{formik.errors.address}</div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg mt-5 mb-4">
              Request Service Quote
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductFormModal;
