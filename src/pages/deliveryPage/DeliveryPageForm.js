import React from 'react'
import { useState } from 'react'
import "./styles.scss";
import Delivery from '../../assets/images/delievryImage.svg';

const DeliveryPageForm = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')




  const handleSubmit = (e) => {
    e.preventDefault();

    const deliveryDetails = { fullName, email, number, address, state }

    console.log(deliveryDetails);
  }

  return (
    <div className="container deliveryPage mt-5">
      <div className="row p-4">
        <div className="col-md-6">
          <div className="deliveryLeftCol">
            <h1 className='deliveryHeader'>Delivery Address Form</h1>
            <p className='deliverParagrapgh'>Kindly fill this form to help you get your order delivered at your doorstep.</p>
            <form className='my-5' onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="labelTitle form-label">Full name</label>
                <input placeholder='Noah Abraham' value={fullName} onChange={(e)=> setFullName(e.target.value)} type="text" className=" p-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="labelTitle form-label">Email address</label>
                <input placeholder='Noahabraham@conclase.com.ng' value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className=" p-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className="mb-4">
                <label htmlFor="number" className="labelTitle form-label">Phone number</label>
                <input placeholder='08041941941' type="number" value={number} onChange={(e)=> setNumber(e.target.value)} className=" p-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="labelTitle form-label">Address</label>
                <input placeholder='10,Wole Ogunjimi, Opebi-Ikeja' type="text" value={address} onChange={(e)=> setAddress(e.target.value)} className=" p-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div className="mb-5">
                <label htmlFor="Select" className="labelTitle form-label">State</label>
                <select id="Select" className="form-select p-2 " value={state} onChange={(e)=> setState(e.target.value)}>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Kano</option>
                  <option>Port Harcourt</option>
                  <option>Delta</option>
                </select>
              </div>
              
              <div className='mt-5'>
                <button type="submit" className="btn-primary w-100 p-2 deliveryButton">Continue</button>
              </div>
              

            </form>
          </div>

        </div>








        <div className="col-md-6 deliveryImageContainer d-xs-none">
          <img className='img-fluid' src={Delivery} alt='' />
          
        </div>





    </div>

    </div>
    
  )
}

export default DeliveryPageForm