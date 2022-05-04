import React from "react";
import "./style.scss";
import Currency from "../currency/Currency";

const ShippingDetails = ({ image, name, price, quantity }) => {
  let amount = <Currency>{price}</Currency>;
  return (
    <div class="card mb-1 p-3 bg-light border-0">
      <div class="row g-0">
        <div class="col-4">
          <img src={image} className="img-fluid summaryImage" alt={name} />
        </div>
        <div class="col-8">
          <h5 class="checkout-card-title fw-bold">{name}</h5>
          <p className=" text-muted checkout-card-price">Price: {amount}</p>
          <p className=" text-muted checkout-card-price">{`Quantity: ${quantity}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
