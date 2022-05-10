import React from "react";
import "./style.scss";
import RatingsViewOnly from "../../rating/RatingsViewOnly";
import ReviewCount from "../../review-count/ReviewCount";
import DoorImage from "../../../assets/images/chair.jpg";
import { Link } from "react-router-dom";
import Currency from "../../currency/Currency";

const ProductCard = ({ className, id, title, image, description, price }) => {
  const link = `${title}`.split(" ").join("-");
  return (
    <div className={`card border-0 products-card mb-4 ${className}`}>
      <Link to={`/products/${id}/${link}`}>
        <div className="products-card-image-wrapper card-img">
          <img
            src={image}
            alt={"door for sale"}
            loading="lazy"
            className="card-img products-card-image"
          />
        </div>
      </Link>

      <div className="topdeals-description-wrapper pt-2">
        <div className="product-title-wrapper">
          <Link to={`/products/${id}/${link}`}>
            <p className="topdeals-title text-truncate  fw-bold">{title}</p>
          </Link>
          <p className="topdeals-price mb-0 fw-bold">
            <Currency>{price}</Currency>
          </p>
        </div>

        <div className="d-flex">
          <RatingsViewOnly value={4} />
          <ReviewCount count={15} />
        </div>
        <div className="product-description card-text small d-none d-sm-block mt-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
