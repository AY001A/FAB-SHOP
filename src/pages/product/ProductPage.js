import React from "react";
import "./style.scss";
import Door from "../../assets/images/door.jpg";
import { useParams } from "react-router-dom";
import Rating from "../../components/rating/RatingsViewOnly";
import Slider from "../../components/slider/Slider";
import ProductCard from "../../components/cards/product-card/ProductCard";

const ProductPage = () => {
  const { productId, title } = useParams();

  return (
    <div className="product-wrapper">
      <h2 className="product-name">
        Fabgarage windsor steel Drivay Gate Black -2438 x 934mm
      </h2>
      <div className="product-details-wrapper">
        <div className="product-image-wrapper">
          <img src={Door} className="product-image" alt="product" />
        </div>

        <div className="product-info-wrapper">
          <p className="product-description">
            Elegant and robust steel gate that has been pre-treated for
            corrosion resistance. This gate fits a 2438mm wide opening. Supplied
            with all necessary fittings to complete installation.
          </p>
          <div className="product-rating">
            <Rating value={4} /> <p>4.0</p>
          </div>
          {/* <p className="product-review-count">12 reviews</p> */}
          <h2 className="product-price-mobile">70,000</h2>
          <p className="product-detail">Product detail</p>
          <ul>
            <li>Height: 925mm</li>
            <li>Weight: 32.9kg</li>
            <li>Color: Brown</li>
            <li>Height: 925mm</li>
          </ul>
        </div>

        <div className="product-button-card">
          <div className="product-price ">
            <p>price: </p>
            <h2>70,000</h2>
          </div>

          <button className="btn-cart btn btn-primary ">Add to cart</button>
          <button className="btn btn-outline-primary">Buy now</button>
        </div>
      </div>

      <button className="btn-cart bm btn btn-primary ">Add to cart</button>
      <button className="btn bm btn-outline-primary">Buy now</button>

      <p className="mt-5 you-may-like">
        <strong>You may also like</strong>
      </p>

      <Slider withButton={false}>
        <ProductCard className="pc" />
        <ProductCard className="pc" />
        <ProductCard className="pc" />
        <ProductCard className="pc" />
        <ProductCard className="pc" />
        <ProductCard className="pc" />
        <ProductCard className="pc" />
        <ProductCard className="pc" />
      </Slider>
    </div>
  );
};

export default ProductPage;
