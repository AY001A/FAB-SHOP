import React from "react";

const Input = ({ type, name, id, onChangeHandler, value }, ...props) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      onChange={onChangeHandler}
      value={value}
      {...props}
    />
  );
};

export default Input;
