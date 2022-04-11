import React from 'react'
import './style.scss';

const DeliveryAddress = () => {
  return (
    <div className='p-4 orderSummaryContainer me-4 bg-light mb-4'>
        
        <div className='d-flex justify-content-between'>
            <p className='deliveryName'>Noah Abraham</p>
            <button className='deliveryButton'>Change</button>
        </div>

        <p>10,Wole Ogunjimi, Opebi-Ikeja</p>
        <p>09016247864</p>
        

    </div>
  )
}

export default DeliveryAddress