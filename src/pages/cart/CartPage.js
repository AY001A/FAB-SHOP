import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import CartCard from "../../components/cards/cart-card/CartCard";
import { Link } from "react-router-dom";
import Currency from "../../components/currency/Currency";

const CartPage = () => {
  const { cartQuantity, products, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="cartpage-wrapper">
      <div className="cart-header">
        <h2>Cart </h2> <p>({cartQuantity} Items)</p>
      </div>

      <div className="row">
        <div className="col col-sm-8">
          {products.length > 0 ? (
            products.map((cartproduct) => (
              <CartCard
                name={cartproduct.name}
                price={cartproduct.price}
                subtotal={cartproduct.subtotal}
                productId={cartproduct.productId}
                key={cartproduct.productId}
                product={cartproduct}
              />
            ))
          ) : (
            <div className="cart-isEmpty-wrapper text-center mt-5">
              <p>
                <strong>Your cart is empty!</strong>
              </p>
              <p className="text-muted">
                Browse our categories and discover our best deals
              </p>
              <Link to={"/"}>
                <button className="btn btn-primary mt-2">
                  Continue shopping
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="col-sm-4">
          <div className=" d-none d-sm-block cart-price-card">
            <h3>Order Summary</h3>

            <div className="row justify-between">
              <p className="col-6">Delivery Fee:</p>
              <p className="col-6"></p>
            </div>
            <div className="row justify-between ">
              <p className="col-6">Total:</p>
              <p className="col-6 fw-bold">
                <Currency>{totalPrice}</Currency>
              </p>
            </div>
            <div className="row justify-between">
              <p className="col-6">Accumulated total:</p>
              <p className="col-6 fw-bold">
                <Currency>{totalPrice}</Currency>
              </p>
            </div>

            <button className="btn btn-primary btn-lg w-100 mt-2 mb-2">
              <strong>Checkout</strong>
            </button>
            <button className="btn btn-outline-primary btn-lg w-100 text-black">
              <strong>Continue Shopping</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;