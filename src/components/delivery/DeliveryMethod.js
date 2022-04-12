import React from 'react'
import './style.scss';

const DeliveryMethod = () => {
  return (
    <div className='p-4 orderSummaryContainer bg-light mb-4 sm-me-0'>
        
        <div className='d-flex justify-content-between'>
            <p className='deliveryName'>Priority Delivery</p>
            <input className="form-check-input checkBox" type="checkbox" value="" id="flexCheckDefault" />
        </div>

        <p className="text-secondary">Get the product you ordered for immediately for  ₦7,500 </p>
    </div>
  )
}

export default DeliveryMethod