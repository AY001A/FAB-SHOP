import React from 'react'
import './style.scss';
import  Chair  from '../../assets/images/chair.jpg'

const ShippingDetails = () => {
  return (
    <div className='p-4 w-100 shippingSummaryContainer me-4 bg-light mb-4 d-flex justify-content '>
        <div>
            <img src={Chair} alt='' className='summaryImage' />
        </div>

        <div className='ms-4 d-block align-content-between'>
            <h2 className='shippingDetailsProductName mb-6'>Gold Metal Iron Fabricated gate</h2>
            <p className='shippingDetailsProductColor'>Color: Black</p>
            <p className='shippingDetailsProductMeasurement'>Measurement: 2438 x 925 mm</p>
            <p className='shippingDetailsProductQuantity'>Quantity: 1</p>
        </div>
        
    </div>
  )
}

export default ShippingDetails