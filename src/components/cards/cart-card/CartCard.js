import React, { useState, useEffect } from "react";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import Chair from "../../../assets/images/chair.jpg";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeFromCart,
} from "../../../services/slices/cartSlice";
import Currency from "../../currency/Currency";

const CartCard = ({ name, productId, price, subtotal, product }) => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find((product) => product.productId === productId);

    setProdQuantity(product.quantity);

    return () => {};
  }, [product.quantity]);

  const [prodQuantity, setProdQuantity] = useState(1);
  // let incrementQuantity = () => {
  //   dispatch(increaseProductQuantity(productId));
  // };

  // let decrementQuantity = () => {
  //   dispatch(increaseProductQuantity(productId));
  // };
  // const handleChangeQuantity = () => {

  // };

  return (
    <div className="cart-item-wrapper mb-4">
      <div className="cart-item-container">
        <div>
          <div className="cart-product-details">
            <div className="cart-image-wrapper">
              <img src={Chair} />
            </div>

            <div>
              <div className="cart-title-wrapper">
                <p className="cart-title">{name}</p>
                <p className="text-muted product-code">
                  Product Code: {productId}
                </p>
              </div>

              <div className="cart-delete-btn">
                {/* <img src={DeleteIcon} /> */}
                <DeleteIcon
                  width={24}
                  height={24}
                  onClick={() => dispatch(removeFromCart(product))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cart-item-details">
          <div className=" card-quantity">
            <div>
              <p className="quantityAdjustment row align-items-center">
                Quantity :{" "}
              </p>
            </div>

            <div className=" quantityCol">
              <button
                onClick={() => dispatch(decreaseProductQuantity(productId))}
                disabled={prodQuantity === 1}
                className="btn"
              >
                -
              </button>
              <div>
                <strong>{prodQuantity}</strong>
              </div>
              <button
                className="btn"
                onClick={() => dispatch(increaseProductQuantity(productId))}
              >
                +
              </button>
            </div>
          </div>

          <div className="unit-price">
            <div className="">
              <div className=" row align-items-center">Unit : </div>
            </div>
            <div className="unit-price-value">
              <p className="text-dark">
                <Currency>{price}</Currency>
              </p>
            </div>
          </div>

          <div className="unit-price">
            <div className="">
              <div className="subtotalPrice row align-items-center  text-secondary">
                Sub total:
              </div>
            </div>
            <div className="unit-price-value">
              <p className="subtotalPriceFigure text-dark">
                <Currency>{price * prodQuantity}</Currency>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
