import React from "react";
import "./style.scss";
import RatingsViewOnly from "../../rating/RatingsViewOnly";
import ReviewCount from "../../review-count/ReviewCount";
import DoorImage from "../../../assets/images/door.jpg";

const ProductCard = () => {
  return (
    <div className="card border-0 products-card mb-4">
      <div className="products-card-image-wrapper card-img">
        <img
          src={DoorImage}
          alt={"door for sale"}
          className="card-img products-card-image"
        />
      </div>
      <div className="topdeals-description-wrapper pt-2">
        <div className="product-title-wrapper">
          <p className="topdeals-title text-truncate fw-normal">Metal Gate</p>
          <p className="topdeals-price mb-0 fw-bold">&#8358;70,000</p>
        </div>

        <div className="d-flex">
          <RatingsViewOnly value={4} />
          <ReviewCount count={15} />
        </div>
        <p className="services-description card-text small d-none d-sm-block">
          A random description about the product
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
