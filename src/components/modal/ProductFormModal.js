import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useFormik } from 'formik'
import './style.scss'
import { useCreateServiceBooking } from '../../hook/useService'
import { toast } from 'react-toastify'

const ProductFormModal = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [modalShow, setModalShow] = useState(false)

  const mutation = useCreateServiceBooking()

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      description: '',
    },

    // validationSchema: serviceSchema,

    onSubmit: async values => {
      setIsLoading(true)
      mutation.mutate(
        {
          fullname: `${values.firstname} ${values.lastname}`,
          emailAddress: values.email,
          phoneNumber: values.phone,
          // categoryId: currentService?.Category?.Id,
          // serviceId: currentService?.Id,
        },
        {
          onSuccess() {
            setIsLoading(false)
            toast.success('awesome!')
          },
          onError() {
            toast.warn('oops! something went wrong, try again later')
            setIsLoading(false)
          },
        }
      )
    },
  })

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='example-modal-sizes-title-lg'
      backdrop='static'
      centered
      className='service-modal service-modal'
    >
      <Form
        noValidate
        className='requires-validation'
        onSubmit={formik.handleSubmit}
      >
        <Modal.Header closeButton>
          <Modal.Title>Place order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row g-3'>
            <div className='form-group col-6'>
              <Form.Control
                type='text'
                className='form-control service-modal-input'
                id='firstname'
                name='firstname'
                size='md'
                placeholder='First name'
                onChange={formik.handleChange}
                value={formik.values.firstname}
                isInvalid={formik.touched.firstname && formik.errors.firstname}
              />
              <div className='invalid-feedback'>{formik.errors.firstname}</div>
            </div>
            <div className='form-group mb-3 col-6'>
              <Form.Control
                type='text'
                className='form-control'
                id='lastname'
                size='md'
                placeholder='Last name'
                name='lastname'
                onChange={formik.handleChange}
                value={formik.values.lastname}
                isInvalid={formik.touched.lastname && formik.errors.lastname}
              />
              <div className='invalid-feedback'>{formik.errors.lastname}</div>
            </div>
          </div>
          <div className='row g-3'>
            <div className='form-group col-6'>
              <Form.Control
                type='email'
                className='form-control'
                id='email'
                size='md'
                placeholder='Email Address'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <div className='invalid-feedback'>{formik.errors.email}</div>
            </div>

            <div className='form-group  col-6'>
              <Form.Control
                type='text'
                className='form-control'
                id='phone'
                name='phone'
                size='md'
                placeholder='Phone Number'
                onChange={formik.handleChange}
                value={formik.values.phone}
                isInvalid={formik.touched.phone && formik.errors.phone}
              />
              <div className='invalid-feedback'>{formik.errors.phone}</div>
            </div>
            <div className='form-group '>
              <Form.Control
                type='text'
                className='form-control'
                id='address'
                size='md'
                name='address'
                placeholder='Address'
                onChange={formik.handleChange}
                value={formik.values.address}
                isInvalid={formik.touched.address && formik.errors.address}
              />
              <div className='invalid-feedback'>{formik.errors.address}</div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button type='submit' className='btn btn-primary p-2'>
            {isLoading ? (
              <strong>Submitting...</strong>
            ) : (
              <strong>Request Service Quote</strong>
            )}
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ProductFormModal
