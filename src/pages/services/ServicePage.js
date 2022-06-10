import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "./services";
import Wielder from "../../assets/images/welder.jpg";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import ServiceIcon from "../../assets/icons/how-it-works/service.svg";
import CallIcon from "../../assets/icons/how-it-works/phone-call.svg";
import RateIcon from "../../assets/icons/how-it-works/rate-review.svg";
import "./servicePage.scss";
import {
  useCreateServiceBooking,
  useGetServiceList,
} from "../../hook/useService";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const serviceSchema = Yup.object().shape({
  firstname: Yup.string().required("Firstname is required"),
  lastname: Yup.string().required("Lastname is required"),
  email: Yup.string()
    .email("must be a valid email")
    .required("email is required"),
  phone: Yup.string()
    .required("phone number is required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(11, "phone number not valid")
    .max(14, "phone number not valid"),
  address: Yup.string().required("address is required"),
  description: Yup.string(),
});

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <Modal.Title id="contained-modal-title-vcenter" className="mb-4">
            Your Service has been booked successfully.
          </Modal.Title>
          {/* <p className="text-bold ">Thank you for your Service Order</p> */}

          <p className="">One of our agents will reach out to you shortly.</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ServicePage = () => {
  const { serviceId, service } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const { data } = useGetServiceList();

  const currentService = data?.data?.data.find(
    (val) => val.Id === Number(serviceId)
  );

  const mutation = useCreateServiceBooking();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      serviceId: "",
      categoryId: "",
    },

    validationSchema: serviceSchema,

    onSubmit: async (values) => {
      setIsLoading(true);
      mutation.mutate(
        {
          fullname: `${values.firstname} ${values.lastname}`,
          emailAddress: values.email,
          subject: currentService?.Name,
          description: values.description,
          phoneNumber: values.phone,
          categoryId: currentService?.Category?.Id,
          serviceId: currentService?.Id,
        },
        {
          onSuccess() {
            setIsLoading(false);
            setModalShow(true);
          },
          onError() {
            toast.warn("oops! something went wrong, try again later");
            setIsLoading(false);
          },
        }
      );
    },
  });

  return (
    <div className="service-wrapper">
      <section className="header-section">
        <div className="header-section-image row g-sm-5">
          <div className="col-sm-7 section-image-wrapper">
            <img
              src={currentService?.MetaData[0].Value}
              alt={currentService?.Name}
              className="rounded w-100  h-sm-75 mb-3"
            />

            <div className="service-header-description">
              <h3 className="fw-bold">{currentService?.Name}</h3>
              <p>{currentService?.description}</p>
              <div className="d-flex">
                {/* <h5 className="">Features:</h5> */}
                {/* <p className=""> Fixing, Repair, Maintainance</p> */}
              </div>

              <div>
                {/* <h5 className="fw-bold">Additional information</h5> */}
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
          <div className="service-form col-sm-5  mb-4 ">
            {/* <h3 className="text-center  pb-2">Book Service</h3> */}
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
                    placeholder="First name"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                    isInvalid={
                      formik.touched.firstname && formik.errors.firstname
                    }
                  />
                  <div className="invalid-feedback">
                    {formik.errors.firstname}
                  </div>
                </div>
                <div className="form-group mb-3 col-6">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Last name"
                    name="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    isInvalid={
                      formik.touched.lastname && formik.errors.lastname
                    }
                  />
                  <div className="invalid-feedback">
                    {formik.errors.lastname}
                  </div>
                </div>
              </div>
              <div className="row g-3">
                <div className="form-group col-6">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="email"
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
                    name="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    isInvalid={formik.touched.address && formik.errors.address}
                  />
                  <div className="invalid-feedback">
                    {formik.errors.address}
                  </div>
                </div>
                <div className="form-group mb-3  ">
                  <textarea
                    rows={"5"}
                    cols="60"
                    className="form-control input-desc"
                    id="description"
                    name="description"
                    placeholder="A brief description of what you need "
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary btn-lg"
                >
                  {isLoading ? (
                    <strong>Submitting...</strong>
                  ) : (
                    <strong>Request Service Quote</strong>
                  )}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="howItWorks mt-5">
        <h3 className="mb-4">HOW IT WORKS</h3>

        <div className="how-it-works-cards ">
          <div className="how-it-works-card shadow-sm border">
            <img
              src={ServiceIcon}
              className="card-icons"
              alt="select service"
            />

            <div>
              <h5 className="fw-bold">Select Service</h5>
              <p>
                Tell us what service you want, shutter work, steel work
                weldering work and others.
              </p>
            </div>
          </div>
          <div className="how-it-works-card shadow-sm border">
            <img src={CallIcon} className="card-icons" alt="provide contact" />

            <div>
              <h5 className="fw-bold">Provide Contact</h5>
              <p>
                Share your contact details including correct email and mobile
                phone number.
              </p>
            </div>
          </div>
          <div className="how-it-works-card shadow-sm border">
            <img src={RateIcon} className="card-icons " alt="hire technician" />

            <div>
              <h5 className="fw-bold">Get quote and hire</h5>
              <p>
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
