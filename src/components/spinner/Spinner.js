import "./style.scss";

import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="sk-three-bounce">
        <div className="sk-bounce-1 sk-child"></div>
        <div className="sk-bounce-2 sk-child"></div>
        <div className="sk-bounce-3 sk-child"></div>
      </div>
    </div>
  );
};

export default Spinner;
