import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import ProductCard from "../../components/cards/product-card/ProductCard";
import { services } from "../services/services";
import Slider from "../../components/slider/Slider";

import { HeaderSlider } from "../../components/carousel";
import { mock_top_deals } from "../../api/products";
import { useGetProducts } from "../../hook/useProducts";
import Spinner from "../../components/spinner/Spinner";

const HomePage = () => {
  const navigate = useNavigate();

  const { status, data, error } = useGetProducts(1, 18);

  return (
    <>
      <HeaderSlider>
        <section className="carousel_header services_ad">
          <div className="carousel_info ">
            <p>World class professionals at your doorstep </p>

            <Link to={"/services"}>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/services")}
              >
                <strong>Hire Now</strong>
              </button>
            </Link>
          </div>
        </section>
        <section className="carousel_header billboard_ad">
          <div className="carousel_info">
            <p>Advertise your business on bilboards in Nigeria</p>

            <Link to={"/services"}>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/services")}
              >
                <strong>Shop Now</strong>
              </button>
            </Link>
          </div>
        </section>
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
              {mock_top_deals.map((prod) => (
                <ProductCard
                  className={"m-2"}
                  id={prod.Id}
                  description={prod.Description}
                  title={prod.Name}
                  image={prod.ImagesUrls[0]}
                  price={prod.Price}
                  key={prod.Id}
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
                onClick={() => navigate("/productCategory/3/aluminium")}
              ></div>
              <div
                className="box col-4 text-center"
                onClick={() => navigate("/productCategory/4/stainless-steel")}
              ></div>
              <div
                className="box col-4 text-center"
                onClick={() => navigate("/productCategory/5/shutter")}
              ></div>
            </div>
            <div className="row rowball">
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/6/metal-iron")}
              ></div>
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/7/sheds")}
              ></div>
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/8/furnitures")}
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
        {console.log(data?.data?.data)}
        <div className="top-products p-sm-5">
          {/* <p>No product available</p> */}
          {status === "loading" && <Spinner />}

          {status === "success" && !data?.data.data.length ? (
            <p>Inventory is empty</p>
          ) : (
            data?.data?.data.map((prod) => (
              <ProductCard
                id={prod.Id}
                description={prod.Description}
                title={prod.Name}
                image={prod.ImagesUrls[0]}
                price={prod.Price}
                key={prod.Id}
              />
            ))
          )}
          {status === "error" && (
            <p className="justify-self-center">
              Something went wrong, please try again after some time
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
