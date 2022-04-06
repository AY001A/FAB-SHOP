import React from "react";
import  {ReactComponent as DeleteIcon} from '../../../assets/icons/delete.svg'
import Chair from '../../../assets/images/chair.jpg'
import './style.scss'

const CartCard = () => {
  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-container">
        <div>
          <div className="cart-product-details">
            <div className="cart-image-wrapper">
            <img src={Chair} />
            </div>

            <div>
              <div className="cart-title-wrapper">
                <p>Gold Metal Iron Fabr</p>
                <p>Product Code: 939393</p>
              </div>

              <div className="cart-delete-btn">
                {/* <img src={DeleteIcon} /> */}
                <DeleteIcon width={20} height={20}/>
              </div>
            </div>
          </div>
          
        </div>

        <div className="cart-item-details">
          counter
        </div>
      </div>
    </div>
  );
};

export default CartCard;
