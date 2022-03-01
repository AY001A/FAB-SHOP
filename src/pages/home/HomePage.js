import React from "react";
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

          <div className="row info_cards">
            <div className="col shadow-sm rounded border info_card">
              <h2>24/7 Services</h2>
              <p>We are available for you always</p>
            </div>

            <div className="col info_card">
              <h2>High Quality</h2>
              <p>We deliver high quality services</p>
            </div>
            <div className="col info_card">
              <h2>Maintainance</h2>
              <p>We can maintain your fabricates</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
