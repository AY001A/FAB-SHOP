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
                <p className="fw-bold fs-5">Gold Metal Iron Fabricated gate</p>
                <p className='fw-normal text-muted'>Product Code: 939393</p>
              </div>

              <div className="cart-delete-btn">
                {/* <img src={DeleteIcon} /> */}
                <DeleteIcon width={35} height={35}/>
              </div>
            </div>
          </div>
          
        </div>

        <div className="cart-item-details">
          <div className='row align-items-start quantityRow'>
            <div className='col'>
              <div className='quantityAdjustment row align-items-center fs-6 text-secondary'>Quantity : </div>
            </div>

            <div className='col quantityCol'>
              <button className='decreaseButton'>-</button>
              <p className='quantityFigure'>1</p>
              <button className='increaseButton'>+</button>
            </div>

          </div>

          
          <div className="row align-items-center unitRow">
            <div className="col">
              <div className='unitPrice row align-items-center fs-6 text-secondary'>Unit : </div>

            </div>
            <div className="col">
              <div className='text-dark unitPriceFigure'>₦70,000</div>
            </div>
          </div>

          <div className="row align-items-end subtotalRow">
            <div className="col">
              <div className='subtotalPrice row align-items-center fs-6 text-secondary'>Sub total:</div>

            </div>
            <div className="col">
              <div className='subtotalPriceFigure text-dark'>₦70,000</div>
            </div>
          </div>

          
          
          
        </div>
      </div>
    </div>
  );
};

export default CartCard;
