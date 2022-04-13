import React from 'react'
import DeliveryAddress from '../../components/delivery/DeliveryAddress'
import DeliveryMethod from '../../components/delivery/DeliveryMethod'
import ShippingDetails from '../../components/delivery/ShippingDetails'
import './style.scss'

const Payment = () => {
  return (
    <div className="payment-wrapper container my-3 px-4">
        <div className="row">
            <h2 className='paymentSummary mb-3'>Delivery Address Details </h2>
            <div className='col-sm-7 col-lg-7'>
                <div>
                    <DeliveryAddress />
                </div>
                <div className="mt-5">
                    <h2 className='paymentSummary mb-3 mt-3'>Delivery Method</h2>
                    <p>Please select a delivery option</p>
                        <DeliveryMethod />
                        <DeliveryMethod /> 
                </div>
            </div>

            <div className="col-sm-5">
                <div className="orderSummaryContainer p-4 bg-light">
                    <h2 className='paymentSummary mb-4'>Order  Summary</h2>
                    <div className="d-flex justify-content-between">
                        <p>1 x</p>
                        <div>
                            <p className='paymentSummaryProduct'>Gold Metal Iron Fabricated gate (2438 x 1050 mm)</p>
                        </div>
                        <div>
                            <p className='paymentSummaryPrice'>₦70,000</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <p>1 x</p>
                        <div>
                            <p className='paymentSummaryProduct'>Gold Metal Iron Fabricated gate (2438 x 1050 mm)</p>
                        </div>
                        <div>
                            <p className='paymentSummaryPrice'>₦70,000</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <p>1 x</p>
                        <div>
                            <p className='paymentSummaryProduct'>Gold Metal Iron Fabricated gate (2438 x 1050 mm)</p>
                        </div>
                        <div>
                            <p className='paymentSummaryPrice'>₦70,000</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <p className='subTotalSummary'>Subtotal</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'>₦70,000</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div>
                            <p className='subTotalSummary'>Delivery Fee</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'>₦70,000</p>
                        </div>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className='totalSummary'>Total</p>
                        </div>
                        <div>
                            <p className='totalSummaryPrice'>₦270,000</p>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>

            <div className='col-sm-7'>
                <div className="mt-5">
                    <h2 className='paymentSummary mb-3 mt-3'>Shipment Details</h2>
                    <p>Please select a delivery option</p>
                        <ShippingDetails /> 
                        <ShippingDetails /> 

                </div>

                <div className="mt-5 px-4">
                    <div className="d-flex justify-content-between mt-5">
                        <div>
                            <p className='subTotalSummary'>Subtotal</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'>₦70,000</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-1">
                        <div>
                            <p className='subTotalSummary'>Delivery Fee</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'>₦70,000</p>
                        </div>
                    </div>
                    <hr className='px-5'/>

                    <div className="d-flex justify-content-between mt-1">
                        <div>
                            <p className='subTotalSummary'>Total</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'>₦700,000</p>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary py-3 fw-bold" type="button">Proceed to make Payment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment