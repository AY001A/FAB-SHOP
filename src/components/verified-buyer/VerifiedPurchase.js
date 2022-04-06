import React from "react";
import "./style.scss";

const Icon = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8.25781" r="8" fill="#008000" />
    <path
      d="M11.5557 5.58594L6.6668 10.4748L4.44458 8.2526"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const VerifiedPurchase = () => {
  return (
    <div className="vp">
      <Icon /> <p>Verified purchase</p>
    </div>
  );
};

export default VerifiedPurchase;
