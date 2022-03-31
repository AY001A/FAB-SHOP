import React from "react";
import { useRef } from "react";
import "./style.scss";

const Slider = ({ children }) => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className="wrapper">
      <div className="slider-wrapper" ref={ref}>
        <div className="slider-items-container">{children}</div>
      </div>
      <button className="control next" onClick={() => scroll(550)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 5L19 12L12 19"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button className="control prev" onClick={() => scroll(-550)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12L5 12"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 19L5 12L12 5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
