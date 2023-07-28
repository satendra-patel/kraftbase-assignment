
import React from 'react';

const Checkportfoliobutton = () => {
  const buttonStyle = {
    padding: "15px 27px 15px 17px",
    border: "1px solid #242424",
    boxShadow: "inset 0 0 0 1px #242424",
    background: "transparent",
    borderRadius: "40px",
    display: "flex",
    alignItems: "center",
    whiteSpace: 'nowrap',
    position: "relative",
    zIndex: "3",
    cursor: "pointer", // Add cursor pointer on hover
  };

  const hoverStyle = {
    background: "#000000", // Full black color on hover
    color: "#ffffff", // White text on hover
  };

  const arrowStyle = {
    position: "absolute",
    right: "20px", // Adjust the position of the arrow here
    width: "0",
    height: "0",
    borderTop: "7px solid transparent",
    borderBottom: "7px solid transparent",
    borderRight: "7px solid #ffffff", // White arrow on hover
    zIndex: "2",
  };

  return (
    <button
      style={buttonStyle}
      onMouseOver={() => { // Apply hover styles on mouseover
        Object.assign(buttonStyle, hoverStyle);
      }}
      onMouseOut={() => { // Reset to default styles on mouseout
        Object.assign(buttonStyle, { ...hoverStyle, background: "transparent" });
      }}
    >
      <span data-class="text" style={{ ...buttonStyle, whiteSpace: "nowrap", userSelect: 'none', display: "flex", flexDirection: "column", height: "1.2em", overflow: "hidden" }}>
        <span>Check Full Portfolio .</span>
        <span>Check Full Portfolio .</span>
      </span>
      <span style={arrowStyle}></span>
    </button>
  );
};

export default Checkportfoliobutton;
