import React from "react";
import { Link } from "react-router-dom";
import WelderImage from "../../../assets/images/welder.jpg";
import "./style.scss";

const ServiceCard = ({ title, image, desc, url_path }) => {
  return (
    <Link to={`${url_path}`} className="text-decoration-none text-black">
      <div className="card border-0 services-card ">
        <div className="services-card-image-wrapper card-img">
          <img
            src={image}
            alt={desc}
            loading="lazy"
            className="card-img services-card-image"
          />
        </div>
        <div className="services-description-wrapper card-body p-0 pt-2 ">
          <p className="services-title card-title fw-bold ">{title}</p>
          <p className="services-description card-text ">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
