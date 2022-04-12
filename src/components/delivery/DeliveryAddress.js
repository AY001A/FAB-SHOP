import React from 'react'
import './style.scss';

const DeliveryAddress = () => {
  return (
    <div className='p-4 orderSummaryContainer bg-light mb-4'>
        
        <div className='d-flex justify-content-between'>
            <p className='deliveryName'>Noah Abraham</p>
        </div>

        <p className='text-secondary'>10,Wole Ogunjimi, Opebi-Ikeja</p>
        <p className='text-secondary'>09016247864</p>
        

    </div>
  )
}

export default DeliveryAddress