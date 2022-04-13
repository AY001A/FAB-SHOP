import React from 'react'
import DeliveryAddress from '../../components/delivery/DeliveryAddress'
import DeliveryMethod from '../../components/delivery/DeliveryMethod'
import ShippingDetails from '../../components/delivery/ShippingDetails'
import { useSelector } from "react-redux";
import './style.scss'
import Currency from './../../components/currency/Currency';

const Payment = () => {
    const { cartQuantity, products, totalPrice } = useSelector(
        (state) => state.cart
      );


  return (
    <div className="payment-wrapper container my-5 px-4 ">
        <div className="row">
            <h2 className='paymentSummary mb-3'>Delivery Address Details </h2>
            <div className='col-lg-7'>
                <div>
                    <DeliveryAddress />
                </div>
                <div className="mt-5">
                    <h2 className='paymentSummary mb-3 mt-3'>Delivery Method</h2>
                    <p>Please select a delivery option</p>
                        <DeliveryMethod delivery={'Priority Delivery'} deliveryText={'Get the product you ordered for immediately for  ₦7,500' }/>
                        <DeliveryMethod delivery={'Normal Delivery'} deliveryText={'Get the product you ordered within 6 - 9 hours for  ₦5,500' }/> 
                </div>
            </div>

            <div className="col-lg-5">
                <div className="orderSummaryContainer p-4 bg-light">
                    <h2 className='paymentSummary mb-4'>Order  Summary</h2>
                    <div className="d-flex justify-content-between">
                        <p>{cartQuantity}</p>
                        <div>
                            <p className='paymentSummaryProduct'>{products.name}</p>
                        </div>
                        <div>
                            <p className='paymentSummaryPrice'>{products.price}</p>
                        </div>
                    </div>

                    

                    

                    <div className="d-flex justify-content-between mt-3">
                        <div>
                            <p className='subTotalSummary'>Subtotal</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'><Currency>{totalPrice}</Currency></p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div>
                            <p className='subTotalSummary'>Delivery Fee</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'>---</p>
                        </div>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className='totalSummary'>Total</p>
                        </div>
                        <div>
                            <p className='totalSummaryPrice'><Currency>{totalPrice}</Currency></p>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>

            <div className='col-lg-7'>
                <div className="mt-5">
                    <h2 className='paymentSummary mb-3 mt-3'>Shipment Details</h2>
                    <p>Please select a delivery option</p>
                        <ShippingDetails />  

                </div>

                <div className="mt-5 px-4">
                    <div className="d-flex justify-content-between mt-5">
                        <div>
                            <p className='subTotalSummary'>Subtotal</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'><Currency>{totalPrice}</Currency></p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-1">
                        <div>
                            <p className='subTotalSummary'>Delivery Fee</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'>---</p>
                        </div>
                    </div>
                    <hr className='px-5'/>

                    <div className="d-flex justify-content-between mt-1">
                        <div>
                            <p className='subTotalSummary'>Total</p>
                        </div>
                        <div>
                            <p className='subTotalSummaryPrice fw-bold'><Currency>{totalPrice}</Currency></p>
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