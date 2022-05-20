import React from "react";
import { Spinner } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import ServiceCard from "../../components/cards/service-card/ServiceCard";
import { useGetServiceList } from "../../hook/useService";
import { services } from "./services";
import "./servicesHomepage.scss";

const ServicesHomePage = () => {
  const { data, status } = useGetServiceList();

  return (
    <div>
      <section className="home-service mt-4">
        <div className="section-banner">
          <p>Home Services</p>
        </div>
        <div className="service-cards-wrapper">
          {status === "loading" && (
            <Spinner animation="border" className="text-primary" />
          )}{" "}
          {status === "success" &&
            data?.data?.data
              ?.filter((service) => service.CategoryId === 9)
              .map((service) => (
                <ServiceCard
                  title={service.Name}
                  image={service.MetaData[0].Value}
                  desc={service.Description}
                  url_path={`/services/${service.Id}/${service.Name}`}
                  key={service.Id}
                />
              ))}
        </div>
      </section>
      <section className="home-service mt-4">
        <div className="section-banner">
          <p>Contract Services</p>
        </div>

        <div className="service-cards-wrapper">
          {status === "loading" && (
            <Spinner animation="border" className="text-primary" />
          )}

          {status === "success" &&
            data?.data?.data
              ?.filter((service) => service.CategoryId === 10)
              .map((service) => (
                <ServiceCard
                  title={service.Name}
                  image={service.MetaData[0].Value}
                  desc={service.Description}
                  url_path={`/services/${service.Id}/${service.Name}`}
                  key={service.Id}
                />
              ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesHomePage;
