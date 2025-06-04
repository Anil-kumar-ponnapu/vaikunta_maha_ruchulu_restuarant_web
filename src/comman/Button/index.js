import React from "react";
import "./button.css"
const CommonButton = ({
  title,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  onSubmit
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`common-button ${className}`}
      onSubmit={onSubmit}
    >
      {title}
    </button>
  );
};

export default CommonButton;
