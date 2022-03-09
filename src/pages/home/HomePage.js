import React from "react";
import { Link } from "react-router-dom";
import TopDealsCard from "../../components/cards/top-deals-card/TopDealsCard";
import "./style.scss";

const HomePage = () => {
  return (
    <>
      <section className="carousel_header ">
        <div>
          <p>Enjoy up to 15% discount on your first order</p>

          <button className="btn btn-primary">
            <strong>Shop Now</strong>
          </button>
        </div>
      </section>

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
        <div className="top-deals-products ">
          <div className="row">
            <TopDealsCard />
            <TopDealsCard />
            <TopDealsCard />
            <TopDealsCard />
          </div>
        </div>
      </section>

      <section className="top-deals-section d-none d-sm-block">
        <div className="section-banner">
          <p>Product Category</p>
        </div>
        <div className="category w-100 ">
          <div className="productCategory bg-light w-100 ">
            <div className="row p-0 rowball">
              <div className="box col-4 text-center"></div>
              <div className="box col-4 text-center"></div>
              <div className="box col-4 text-center"></div>
            </div>
            <div className="row rowball">
              <div className="boxTwo col-4 text-center"></div>
              <div className="boxTwo col-4 text-center"></div>
              <div className="boxTwo col-4 text-center"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-services-section">
        <div className="section-banner">
          <p>Top Services</p> <Link to={"/"}>see more</Link>
        </div>
        <div className="top-services">
          <p>No product available</p>
        </div>
      </section>
      <section className="top-products-section">
        <div className="section-banner">
          <p>Top Products</p> <Link to={"/"}>see more</Link>
        </div>
        <div className="top-products">
          <p>No product available</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
