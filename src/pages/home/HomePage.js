import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopDealsCard from "../../components/cards/top-deals-card/TopDealsCard";
import { TopDealsSlider } from "../../components/carousel";
// import { Fa } from "react-icons/fa";
import "./style.scss";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import { services } from "../services/services";

const HomePage = () => {
  const navigate = useNavigate();
  const productCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        <div className="top-deals-products w-100 row ">
          {/* <div className="slide-container row ">
            <TopDealsCard />
            <TopDealsCard />
            <TopDealsCard />
            <TopDealsCard />
            <TopDealsCard />
            <TopDealsCard />
            <TopDealsCard />
          </div> */}
          {/* <button type="button" className="prev">
            bun
          </button>
          <button type="button" className="next">
            gjn
          </button> */}
          <div className="slide-container row ">
            <TopDealsSlider>
              {productCount.map((prod, index) => (
                <TopDealsCard key={index} />
              ))}
              {/* <TopDealsCard />
            <TopDealsCard />
          <TopDealsCard /> */}
            </TopDealsSlider>
          </div>
        </div>
      </section>

      <section className="top-deals-section d-none d-sm-block">
        <div className="section-banner">
          <p>Product Category</p>
        </div>
        <div className="category w-100 ">
          <div className="productCategory bg-light w-100 ">
            <div className="row  rowball">
              <div
                className="box p-0 col-4 text-center"
                onClick={() => navigate("/productCategory/aluminium")}
              ></div>
              <div
                className="box col-4 text-center"
                onClick={() => navigate("/productCategory/stainless-steel")}
              ></div>
              <div
                className="box col-4 text-center"
                onClick={() => navigate("/productCategory/shutter")}
              ></div>
            </div>
            <div className="row rowball">
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/metal-iron")}
              ></div>
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/sheds")}
              ></div>
              <div
                className="boxTwo col-4 text-center"
                onClick={() => navigate("/productCategory/furnitures")}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="top-services-section">
        <div className="section-banner">
          <p>Top Services</p> <Link to={"/services"}>see more</Link>
        </div>
        <div className="service-cards-wrapper">
          {services
            .filter((serv) => serv.category === "Home")
            .map((val) => (
              <ServiceCard
                title={val.name}
                image={val.image}
                desc={val.short_description}
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
        <div className="top-products">
          <p>No product available</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
