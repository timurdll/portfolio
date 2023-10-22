import React from "react";
import arrow from "../../assets/arrow.svg";
import download from "../../assets/download.svg";
import plane from "../../assets/plane.svg";
import purpleArrow from "../../assets/purple-arrow.svg";
import purpleDownload from "../../assets/purple-download.svg";
import purplePlane from "../../assets/purple-plane.svg";
import "./custom-button.css"; // Import the CSS file with your styles

const CustomButton = ({ text, iconType, onClick, variant, type }) => {
  // Define a function to dynamically import the appropriate icon
  const getIcon = () => {
    switch (iconType) {
      case "arrow":
        return arrow;
      case "download":
        return download;
      case "plane":
        return plane;
      case "purple-arrow":
        return purpleArrow;
      case "purple-download":
        return purpleDownload;
      case "purple-plane":
        return purplePlane;
      default:
        return null;
    }
  };

  return (
    <button
      className={variant === "original" ? "original-button" : "second-button"}
      onClick={onClick}
      type={type}
    >
      {iconType && <img src={getIcon()} alt={`Icon for ${iconType}`} />}
      {text}
    </button>
  );
};

export default CustomButton;
