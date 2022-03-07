import React from "react";
import { Link, Outlet } from "react-router-dom";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import { services } from "./services";
import "./servicesHomepage.scss";

const ServicesHomePage = () => {
  return (
    <div>
      <section className="home-service mt-4">
        <div className="section-banner">
          <p>Home Services</p>
        </div>
        <div className="service-cards-wrapper">
          {services
            .filter((service) => service.category === "Home")
            .map((service) => (
              <ServiceCard
                title={service.name}
                image={service.image}
                desc={service.short_description}
                url_path={service.url_path}
                key={service.id}
              />
            ))}
        </div>
      </section>
      <section className="home-service mt-4">
        <div className="section-banner">
          <p>Contract Services</p>
        </div>

        <div className="service-cards-wrapper">
          {services
            .filter((service) => service.category === "Contract")
            .map((service) => (
              <ServiceCard
                title={service.name}
                image={service.image}
                desc={service.short_description}
                url_path={service.url_path}
                key={service.id}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesHomePage;
