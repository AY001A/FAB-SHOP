import React from "react";
import Slider from "react-slick";
import "./style.scss";
import isMobile from "../../utils/hooks/useIsMobileScreen";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const TopDealsSlider = ({ children }) => {
  const settings = {
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <FaArrowLeft color="black" />,
    nextArrow: <FaArrowRight color="black" />,
  };
  return (
    <Slider className="slider " {...settings}>
      {children}
    </Slider>
  );
};

export const HeaderSlider = (cards) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>cards</Slider>;
};
