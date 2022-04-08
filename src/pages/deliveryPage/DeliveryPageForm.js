import React from 'react'
import "./styles.scss";
import Delivery from '../../assets/images/delievryImage.svg';

const DeliveryPageForm = () => {
  return (
    <div className="container deliveryPage mt-5">
      <div className="row p-4">
        <div className="col-md-6">
          <div className="deliveryLeftCol">
            <h1 className='deliveryHeader'>Delivery Address Form</h1>
            <p className='deliverParagrapgh'>Kindly fill this form to help you get your order delivered at your doorstep.</p>
            <form className='my-5'>
              <div class="mb-4">
                <label for="exampleInputEmail1" className="labelTitle form-label">Full name</label>
                <input placeholder='Noah Abraham' type="text" className=" p-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div class="mb-4">
                <label for="exampleInputEmail1" className="labelTitle form-label">Email address</label>
                <input placeholder='Noahabraham@conclase.com.ng' type="email" className=" p-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div class="mb-4">
                <label for="exampleInputEmail1" className="labelTitle form-label">Phone number</label>
                <input placeholder='08041941941' type="number" className=" p-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div class="mb-4">
                <label for="exampleInputEmail1" className="labelTitle form-label">Address</label>
                <input placeholder='10,Wole Ogunjimi, Opebi-Ikeja' type="text" className=" p-2 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

              <div class="mb-5">
                <label for="Select" className="labelTitle form-label">State</label>
                <select id="Select" className="form-select p-2">
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Kano</option>
                  <option>Port Harcourt</option>
                  <option>Delta</option>
                </select>
              </div>
              
              <div className='mt-5'>
                <button type="submit" className="btn-primary w-100 p-2">Continue</button>
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