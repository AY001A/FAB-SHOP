import React from "react";
import "./style.scss";

const ReviewCount = ({ count }) => {
  return <div className="reviewCount ">{`(${count})`}</div>;
};

export default ReviewCount;
