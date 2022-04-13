import React from 'react'
import './style.scss';

const DeliveryMethod = ({ delivery, deliveryText}) => {
  return (
    <div className='p-4 orderSummaryContainer bg-light mb-4 sm-me-0'>
        
        <div className='d-flex justify-content-between'>
            <p className='deliveryName'>{delivery}</p>
            <input className="form-check-input checkBox" type="checkbox" value="" id="flexCheckDefault" />
        </div>

        <p className="text-secondary">{deliveryText}</p>
    </div>
  )
}

export default DeliveryMethod