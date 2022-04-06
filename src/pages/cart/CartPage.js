import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import CartCard from "../../components/cards/cart-card/CartCard";

const CartPage = () => {
  const { cartQuantity } = useSelector((state) => state.cart);

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container-wrapper">
        <div className="cart-card-wrapper">
          <div className="cart-header">
            <h2>Cart </h2> <p>({cartQuantity} Items)</p>
          </div>
          <CartCard />
        </div>
        <div className="cart-price-card">holla</div>
      </div>
    </div>
    // <div className="row">
    //   <div className=" col-8 ">main menul</div>
    //   <div className="col-4  ">
    //     {" "}
    //     <div>side bar</div>
    //   </div>
    // </div>
  );
};

export default CartPage;
