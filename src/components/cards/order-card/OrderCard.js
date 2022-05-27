import React from "react";
import "./style.scss";
import Chair from "../../../assets/images/chair.jpg";
import Currency from "../../currency/Currency";

const OrderCard = ({
  orderNum,
  dateOrdered,
  productName,
  image,
  quantity,
  price,
}) => {
  return (
    <div class="order-card-wrapper mt-4">
      <div class="order-card-container02">
        <div class="order-card-container03">
          <span class="order-card-text">{`Order #${orderNum}`}</span>
        </div>
        <span class="order-card-text1">
          {`Order placed  ${new Date(dateOrdered).toLocaleString()}`}
        </span>
      </div>
      <div class="order-card-container04">
        <div class="order-card-container05">
          <img src={image} alt={productName} class="order-card-image" />
          <div class="order-card-container06">
            <span class="order-card-text2">{productName}</span>
            <div class="order-card-container07">
              <span class="order-card-text3">Qty: {quantity}</span>
              <span class="order-card-text4">
                <Currency>{price}</Currency>
              </span>
            </div>
          </div>
        </div>
        <div class="order-card-container08">
          <span class="order-card-text5">Status</span>
          <span class="order-card-text6">In - Progress</span>
        </div>
        <div class="order-card-container09">
          <span class="order-card-text7">Date</span>
          <span class="order-card-text8 ">
            {new Date(dateOrdered).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
