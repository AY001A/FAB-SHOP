import React from "react";
import "./style.scss";
import Chair from "../../assets/images/chair.jpg";
import { useSelector } from "react-redux";
import CartCard from "../../components/cards/cart-card/CartCard";
import { Link, useNavigate } from "react-router-dom";
import Currency from "../../components/currency/Currency";

const CartPage = () => {
  const { Quantity, Items, TotalAmount } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div className="cartpage-wrapper">
      <div className="cart-header">
        <h2>Cart </h2> <p>({Quantity} Items)</p>
      </div>

      <div className="row">
        <div className="col col-sm-8">
          {Items.length > 0 ? (
            Items.map((cartproduct) => (
              <CartCard
                name={cartproduct.Name}
                photo={cartproduct.Photo}
                price={cartproduct.BaseAmount}
                subtotal={cartproduct.TotalAmount}
                productId={cartproduct.ProductId}
                key={cartproduct.ProductId}
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

            <div className="row justify-between ">
              <p className="col-6">Total:</p>
              <p className="col-6 fw-bold">
                <Currency>{TotalAmount}</Currency>
              </p>
            </div>

            <button
              className="btn btn-primary btn-md w-100 mt-3"
              onClick={() => navigate("/cart/proceed", { replace: true })}
              disabled={Quantity === 0}
            >
              <strong>Proceed to checkout</strong>
            </button>
          </div>
        </div>
      </div>

      <div className=" d-block d-sm-none mt-4">
        <h3 className="p-4">Order Summary</h3>

        <div className="row justify-between ">
          <p className="col-6">Total:</p>
          <p className="col-6 fw-bold">
            <Currency>{TotalAmount}</Currency>
          </p>
        </div>

        <button
          className="btn btn-primary btn-lg  w-100 mt-4"
          onClick={() => navigate("/cart/proceed", { replace: true })}
          disabled={Quantity === 0}
        >
          <strong>Proceed to checkout</strong>
        </button>
      </div>
    </div>
  );
};

export default CartPage;
