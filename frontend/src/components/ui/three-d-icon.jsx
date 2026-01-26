import React from "react";

const ThreeDIcon = ({ children, className = "" }) => {
  return (
    <div
      className={`three-d-icon ${className}`}
      aria-hidden="true"
    >
      <div className="three-d-icon-inner">
        {children}
      </div>
    </div>
  );
};

export default ThreeDIcon;
