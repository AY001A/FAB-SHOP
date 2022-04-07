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
                <p className="fw-bold fs-5">{name}</p>
                <p className="fw-normal text-muted">
                  Product Code: {productId}
                </p>
              </div>

              <div className="cart-delete-btn">
                {/* <img src={DeleteIcon} /> */}
                <DeleteIcon
                  width={35}
                  height={35}
                  onClick={() => dispatch(removeFromCart(product))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cart-item-details">
          <div className="row align-items-start quantityRow">
            <div className="col">
              <div className="quantityAdjustment row align-items-center fs-6 text-secondary">
                Quantity :{" "}
              </div>
            </div>

            <div className="col quantityCol">
              <button
                className="decreaseButton"
                onClick={() => dispatch(decreaseProductQuantity(productId))}
                disabled={prodQuantity === 1}
              >
                -
              </button>
              <p className="quantityFigure">{prodQuantity}</p>
              <button
                className="increaseButton"
                onClick={() => dispatch(increaseProductQuantity(productId))}
              >
                +
              </button>
            </div>
          </div>

          <div className="row align-items-center unitRow">
            <div className="col">
              <div className="unitPrice row align-items-center fs-6 text-secondary">
                Unit :{" "}
              </div>
            </div>
            <div className="col">
              <div className="text-dark unitPriceFigure">₦{price}</div>
            </div>
          </div>

          <div className="row align-items-end subtotalRow">
            <div className="col">
              <div className="subtotalPrice row align-items-center fs-6 text-secondary">
                Sub total:
              </div>
            </div>
            <div className="col">
              <div className="subtotalPriceFigure text-dark">
                ₦{price * prodQuantity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
