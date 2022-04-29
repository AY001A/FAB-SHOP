import React from "react";
import Slider from "react-slick";
import "./style.scss";
import isMobile from "../../utils/hooks/useIsMobileScreen";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// TODO: change slider library from react-slick to swiper.js

const RightArrow = ({ currentSlide, slideCount, ...props }) => (
  <FaArrowRight color="black" {...props} />
);

const LeftArrow = ({ currentSlide, slideCount, ...props }) => (
  <FaArrowLeft color="black" {...props} />
);

export const TopDealsSlider = ({ children }) => {
  const settings = {
    infinite: false,
    speed: 500,
    // variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,

    responsive: [
      {
        breakpoint: 567,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider className="slider " {...settings}>
      {children}
    </Slider>
  );
};

export const HeaderSlider = ({ children }) => {
  const options = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
  };
  return (
    // <div className="slider">
    <Slider {...options}>{children}</Slider>
    // </div>
  );
};
