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

const CartCard = (props) => {
  const { Items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const product = Items.find(
      (product) => product.ProductId === props.productId
    );
    setProdQuantity(product.Quantity);
  }, [props.productId, Items]);

  const [prodQuantity, setProdQuantity] = useState(1);

  return (
    <div className="  cart-item-wrapper p-4 mb-4">
      <div className="cart-item-container">
        <div>
          <div className="cart-product-details">
            <div className="cart-image-wrapper ">
              <img src={props.photo} alt={props.name} />
            </div>

            <div>
              <div className="cart-title-wrapper ">
                <p className="cart-title">{props.name}</p>
                <p className="text-muted product-code">
                  Product Code: {props.productId}
                </p>
              </div>
              <div className="cart-delete-btn d-none d-sm-block">
                {/* <img src={DeleteIcon} /> */}
                <DeleteIcon
                  width={20}
                  height={20}
                  onClick={() => dispatch(removeFromCart(props.product))}
                />
              </div>
            </div>
          </div>
          <div className="d-flex d-sm-none mt-2 align-items-center w-100">
            <div className="quantityCol d-flex d-sm-none">
              <button
                onClick={() =>
                  dispatch(decreaseProductQuantity(props.productId))
                }
                disabled={prodQuantity === 1}
                className="btn btn-primary"
              >
                -
              </button>
              <div className="quantity-count">
                <strong>{prodQuantity}</strong>
              </div>
              <button
                className="btn btn-primary"
                onClick={() =>
                  dispatch(increaseProductQuantity(props.productId))
                }
              >
                +
              </button>
            </div>

            <div className="cart-delete-btn d-block d-sm-none ms-5">
              {/* <img src={DeleteIcon} /> */}
              <DeleteIcon
                width={20}
                height={20}
                onClick={() => dispatch(removeFromCart(props.product))}
              />
            </div>
          </div>
        </div>

        <div className="mx-5 cart-item-details">
          <div className=" card-quantity d-none d-sm-flex">
            <div className="">
              <p className="quantityAdjustment row align-items-center ">
                Quantity :{" "}
              </p>
            </div>

            <div className="quantityCol">
              <button
                onClick={() =>
                  dispatch(decreaseProductQuantity(props.productId))
                }
                disabled={prodQuantity === 1}
                className="btn"
              >
                -
              </button>
              <div className="quantity-count">
                <strong>{prodQuantity}</strong>
              </div>
              <button
                className="btn"
                onClick={() =>
                  dispatch(increaseProductQuantity(props.productId))
                }
              >
                +
              </button>
            </div>
          </div>

          <div className="unit-price">
            <div className=" d-none d-sm-block">
              <div className=" row align-items-center">Unit : </div>
            </div>
            <div className="unit-price-value">
              <p className="text-dark small">
                <Currency>{props.price}</Currency>
              </p>
            </div>
          </div>

          <div className="unit-price">
            <div className=" d-none d-sm-block">
              <div className="subtotalPrice row align-items-center  text-secondary">
                Sub total:
              </div>
            </div>
            <div className="unit-price-value">
              <p className="subtotalPriceFigure text-dark small">
                <Currency>{props.price * prodQuantity}</Currency>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
