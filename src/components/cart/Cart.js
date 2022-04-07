import React from "react";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import "./style.scss";

const Cart = ({ count }) => {
  return (
    <div className="cart-wrapper">
      <CartIcon />
      {count > 0 && <div className="badge bg-primary cart-count">{count}</div>}
    </div>
  );
};

export default Cart;
