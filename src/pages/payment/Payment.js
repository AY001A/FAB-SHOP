import { useState, useEffect } from "react";
import DeliveryAddress from "../../components/delivery/DeliveryAddress";
import DeliveryMethod from "../../components/delivery/DeliveryMethod";
import ShippingDetails from "../../components/delivery/CartItem";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import Currency from "./../../components/currency/Currency";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { paymentReceipt } from "../../services/slices/cartSlice";
import { usePlaceOrder } from "../../hook/useOrder";

const PublicKeyPaystack = "pk_test_f693e92affca9b8d3c0b18e68e26d7b714b82e90";
const Payment = () => {
  const {
    Quantity,
    Items,
    TotalAmount,
    UserDetails,
    customer_address,
    customer_phone,
    customer_name,
    OwnerId,
    Reciept,
    CartId,
  } = useSelector((state) => state.cart);
  const mutation = usePlaceOrder();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Quantity === 0) navigate("/");
  }, [Quantity, navigate]);

  const componentProps = {
    email: OwnerId,
    amount: TotalAmount * 100,
    metadata: {
      name: customer_name,
      phone: customer_phone,
    },
    publicKey: PublicKeyPaystack,
    text: "Make Payment",
    onSuccess: (res) => {
      // setPaystackRef(res.reference);
      //   toast.success("paid");
      dispatch(paymentReceipt(res));
      console.log(res);
      mutation.mutate({
        CartId: CartId,
        OwnerId: OwnerId,
        Status: "approved",
        TotalAmount: TotalAmount,
        DeliveryAddress: customer_address,
        PaymentMethod: "paystack",
        PaymentDetails: res?.reference,
        PaymentReference: res?.reference,
        AdditionalInformation: [
          {
            Name: "ShippingAddress",
            Value: customer_address,
          },
          {
            Name: "CustomerName",
            Value: customer_name,
          },
          {
            Name: "PhoneNumber",
            Value: customer_phone,
          },
        ],
        OrderItems: Items,
      });
    },

    onClose: () => {},
  };

  return (
    <div className="payment-wrapper container my-5 px-4">
      <div className="row">
        <h2 className="paymentSummary">Delivery Address Details </h2>
        <div className="col-lg-7">
          <div>
            <DeliveryAddress
              name={UserDetails?.FullName}
              address={UserDetails?.Address}
              state={UserDetails?.State}
              number={UserDetails?.Phone}
            />
          </div>
          {/* <div className="">
            <h2 className="paymentSummary mb-1 mt-3">Delivery Method</h2>
            <p className="small">Please select a delivery option</p>
            <DeliveryMethod
              delivery={"Priority Delivery"}
              deliveryText={
                "Get the product you ordered for immediately for  ₦7,500"
              }
            />
            <DeliveryMethod
              delivery={"Normal Delivery"}
              deliveryText={
                "Get the product you ordered within 6 - 9 hours for  ₦5,500"
              }
            />
          </div> */}
        </div>

        <div className="col-lg-5">
          <div className="orderSummaryContainer p-4 ">
            <h2 className="paymentSummary mb-3">Order Summary</h2>

            {Items?.map((val) => (
              <div
                className="d-flex justify-content-between"
                key={val.ProductId}
              >
                <p>{val.Quantity} x</p>
                <div>
                  <p className="paymentSummaryProduct">{val.Name}</p>
                </div>
                <div>
                  <p className="paymentSummaryPrice">{val.TotalAmount}</p>
                </div>
              </div>
            ))}

            <div className="d-flex justify-content-between mt-1">
              <div>
                <p className="subTotalSummary">Subtotal</p>
              </div>
              <div>
                <p className="subTotalSummaryPrice fw-bold">
                  <Currency>{TotalAmount}</Currency>
                </p>
              </div>
            </div>

            {/* <div className="d-flex justify-content-between">
              <div>
                <p className="subTotalSummary">Delivery Fee</p>
              </div>
              <div>
                <p className="subTotalSummaryPrice fw-bold">---</p>
              </div>
            </div> */}

            <hr className="m-0" />
            <div className="d-flex justify-content-between ">
              <div>
                <p className="totalSummary">Total</p>
              </div>
              <div>
                <p className="totalSummaryPrice">
                  <Currency>{TotalAmount}</Currency>
                </p>
              </div>
            </div>
            {/* <hr /> */}
            {/* <div className="d-grid gap-2 mt-3">
              <PaystackButton
                className="btn btn-primary py-3 fw-bold"
                type="button"
                {...componentProps}
              />
            </div> */}
          </div>
        </div>

        <div className="col-lg-7">
          <div className="mt-0">
            <h2 className="paymentSummary mt-1">Cart Items</h2>
            {/* <p>Please select a delivery option</p> */}
            {Items?.map((val) => (
              <ShippingDetails
                name={val.Name}
                quantity={val.Quantity}
                price={val.BaseAmount}
                key={val.ProductId}
                image={val.Photo}
              />
            ))}
          </div>

          <div className="mt-5 px-4">
            <div className="d-flex justify-content-between mt-5">
              <div>
                <p className="subTotalSummary">Subtotal</p>
              </div>
              <div>
                <p className="subTotalSummaryPrice fw-bold">
                  <Currency>{TotalAmount}</Currency>
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-1">
              <div>
                <p className="subTotalSummary">Delivery Fee</p>
              </div>
              <div>
                <p className="subTotalSummaryPrice fw-bold">---</p>
              </div>
            </div>
            <hr className="px-5" />

            <div className="d-flex justify-content-between mt-1">
              <div>
                <p className="subTotalSummary">Total</p>
              </div>
              <div>
                <p className="subTotalSummaryPrice fw-bold">
                  <Currency>{TotalAmount}</Currency>
                </p>
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <PaystackButton
                className="btn btn-primary py-3 fw-bold"
                type="button"
                {...componentProps}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
