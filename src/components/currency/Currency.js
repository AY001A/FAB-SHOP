import React from "react";

const Currency = ({ children }) => {
  return (
    <>{`₦ ${children.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</>
  );
};

export default Currency;
