import React from 'react'
import './style.scss';
import  Chair  from '../../assets/images/chair.jpg'

const ShippingDetails = () => {
  return (

    <div class="card mb-3 p-3 bg-light border-0">
      <div class="row g-0">
        <div class="col-4">
          <img src={Chair} className="img-fluid summaryImage" alt="..." />
        </div>
        <div class="col-8">
          
            <h5 class="card-title fw-bold">Gold Metal Iron Fabricated gate</h5>
            <p className='card-text text-muted shippingDetailsProductColor'>Color: Black</p>
            <p className='card-text text-muted shippingDetailsProductMeasurement'>Measurement: 2438 x 925 mm</p>
            <p className='card-text text-muted shippingDetailsProductQuantity'>Quantity: 1</p>
          
        </div>
      </div>
    </div>  

    
  )
}

export default ShippingDetails