import React from "react";

const Button = ({ title, buttonType, handleSubmit }) => {
  return (
    <button onClick={handleSubmit} className={`btn ${buttonType}`}>
      {title}
    </button>
  );
};

export default Button;
