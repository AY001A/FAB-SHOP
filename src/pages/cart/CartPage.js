import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import CartCard from "../../components/cards/cart-card/CartCard";

const CartPage = () => {
  const { cartQuantity, products } = useSelector((state) => state.cart);

  return (
    // <div className="cart-page-wrapper">
    //   <div className="cart-container-wrapper">
    //     <div className="cart-card-wrapper">
    //       <div className="cart-header">
    //         <h2>Cart </h2> <p>({cartQuantity} Items)</p>
    //       </div>
    //       <CartCard />
    //     </div>

    //     {/* <div className="cart-price-card"> */}
    //     <div className="cart-price-card-container">
    //       <h3>Order Summary</h3>

    //       <p></p>
    //       {/* </div> */}
    //     </div>
    //   </div>
    // </div>
    // <div className="row">
    //   <div className=" col-8 ">main menul</div>
    //   <div className="col-4  ">
    //     {" "}
    //     <div>side bar</div>
    //   </div>
    // </div>

    <div className="cartpage-wrapper">
      <div className="cart-header">
        <h2>Cart </h2> <p>({cartQuantity} Items)</p>
      </div>

      <div className="row">
        <div className="col-8">
          {products.map((cartproduct) => (
            <CartCard
              name={cartproduct.name}
              price={cartproduct.price}
              subtotal={cartproduct.subtotal}
              productId={cartproduct.productId}
              key={cartproduct.productId}
              product={cartproduct}
            />
          ))}
        </div>
        <div className="col-4">
          <div className="cart-price-card">
            <h3>Order Summary</h3>

            <div className="row justify-between">
              <p className="col-6">Delivery Fee:</p>
              <p className="col-6"></p>
            </div>
            <div className="row justify-between ">
              <p className="col-6">Subtotal:</p>
              <p className="col-6 fw-bold">N40,000</p>
            </div>
            {/* <div className="border-bottom w-"></div> */}
            <div className="row justify-between">
              <p className="col-6">Main total:</p>
              <p className="col-6 fw-bold">N59,0000</p>
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
