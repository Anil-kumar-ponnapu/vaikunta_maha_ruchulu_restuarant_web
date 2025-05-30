import React from "react";
import "./button.css"
const CommonButton = ({
  title,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`common-button ${className}`}
    >
      {title}
    </button>
  );
};

export default CommonButton;
