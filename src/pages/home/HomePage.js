import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopDealsCard from "../../components/cards/top-deals-card/TopDealsCard";
import "./style.scss";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import ProductCard from "../../components/cards/product-card/ProductCard";
import { services } from "../services/services";
import Slider from "../../components/slider/Slider";

import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../services/slices/cartSlice";
import { HeaderSlider } from "../../components/carousel";
import { uploadToCloudinary } from "../../services/slices/imageUploadToCloudinarySlice";
import { products } from "../../api/products";

const HomePage = () => {
  const navigate = useNavigate();
  const productCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let count = 1;
  const dispatch = useDispatch();

  return (
    <>
      {/* <button
        onClick={() =>
          dispatch(
            addToCart({
              productId: count++,
              name: "staircase",
              price: 23000,
              quantity: 1,
              subtotal: 23000,
            })
          )
        }
      >
        addToCart
      </button>
      <button
        onClick={() =>
          dispatch(
            removeFromCart({
              productId: 2,
              name: "staircase",
              price: 23000,
              quantity: 2,
              subtotal: 10000,
            })
          )
        }
      >
        remove
      </button> */}
      <HeaderSlider>
        <section className="carousel_header services_ad">
          <div className="carousel_info ">
            <p>World class proffessionals at your doorstep </p>

            <button className="btn btn-primary">
              <strong>Hire Now</strong>
            </button>
          </div>
        </section>
        <section className="carousel_header billboard_ad">
          <div className="carousel_info">
            <p>Advertise your business on bilboards in Nigeria</p>

            <button className="btn btn-primary">
              <strong>Shop Now</strong>
            </button>
          </div>
        </section>

        {/* <section className="carousel_header">
          <div className="carousel_info discount_ad">
            <p>Enjoy up to 15% discounts on your first order</p>

            <button className="btn btn-primary">
              <strong>Shop Now</strong>
            </button>
          </div>
        </section> */}
      </HeaderSlider>

      <section className="intro_section">
        <div className="intro_section_paragraphs">
          <h1>
            Welcome to Nigeria’s First Online Fabrication Service Provider
          </h1>
          <p>
            We manufacture a wide range of Metal Entrance Gates, Swing Gates,
            Sliding Gates, Single Door and Scissors Gates that not only add
            elegance to the door, but also provide security.
          </p>

          <div className=" info_cards">
            <div className="info_card">
              <h2>24/7 Services</h2>
              <p>We are available 24/7</p>
            </div>

            <div className=" info_card ">
              <h2>High Quality</h2>
              <p>We deliver high quality services</p>
            </div>
            <div className=" info_card ">
              <h2>Maintainance</h2>
              <p>We can maintain your fabricates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="top-deals-section">
        <div className="section-banner">
          <p>Top Deals</p> <Link to={"/"}>see more</Link>
        </div>
        <div className="top-deals-products w-100 row p-sm-5 ">
          <div className="slide-container row ">
            <Slider>
              {products.map((prod) => (
                <ProductCard
                  className={"m-2"}
                  key={prod.productId}
                  title={prod.name}
                  image={prod.imageUrls[0]}
                  description={prod.description}
                  id={prod.productId}
                  price={prod.price}
                  isMeasurable={prod.kind}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="top-deals-section d-none d-sm-block">
        <div className="section-banner">
          <p>Product Category</p>
        </div>
        <div className="category w-100 p-5">
          <div className="productCategory bg-light w-100 ">
            <div className="row  rowball">
              <div
                className="box p-0 col-4 text-center"
                onClick={() => navigate("/productCategory/5/aluminium")}
              ></div>
              <div
                className="box col-4 text-center"
                onClick={() => navigate("/productCategory/4/stainless-steel")}
              ></div>
              <div
                className="box col-4 text-center"
                onClick={() => navigate("/productCategory/2/shutter")}
              ></div>
            </div>
            <div className="row rowball">
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/3/metal-iron")}
              ></div>
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/8/sheds")}
              ></div>
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/6/furnitures")}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-services-section">
        <div className="section-banner">
          <p>Top Services</p> <Link to={"/services"}>see more</Link>
        </div>
        <div className="service-cards-wrapper p-sm-5">
          {services
            .filter((serv) => serv.category === "Home")
            .map((val) => (
              <ServiceCard
                title={val.name}
                image={val.image}
                desc={val.description}
                url_path={`services/${val.url_path}`}
                key={val.id}
              />
            ))}
        </div>
      </section>
      <section className="top-products-section">
        <div className="section-banner">
          <p>Top Products</p> <Link to={"/"}>see more</Link>
        </div>
        <div className="top-products p-sm-5">
          {/* <p>No product available</p> */}
          {products.map((prod) => (
            <ProductCard
              key={prod.productId}
              title={prod.name}
              image={prod.imageUrls[0]}
              description={prod.description}
              id={prod.productId}
              price={prod.price}
              isMeasurable={prod.kind}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
