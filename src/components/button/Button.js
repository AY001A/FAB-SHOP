import React from "react";

const Button = ({ title, buttonType, handleSubmit }) => {
  //   const handleSubmit = () => console.log("submitted");

  return (
    <button onClick={handleSubmit} className={`btn ${buttonType}`}>
      {title}
    </button>
  );
};

export default Button;
