import React, { useState } from "react";

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorButtonClick = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="m-5">
      <button
        onClick={handleColorButtonClick}
        className="btn shadow text-dark shadow-lg fs-5"
        style={{ backgroundColor: selectedColor || "white" }}
      >
        Pick a color
      </button>
      {isColorListVisible && (
        <ul
          className="color-list my-3"
          style={{ width: "200px", listStyleType: "none" }}
        >
          {colors.map((color, index) => (
            <li
              className="my-1 colors-list-item"
              key={index}
              onClick={() => handleColorSelection(color)}
              style={{ backgroundColor: color, width: "70px", height: "70px" }}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ColorPicker;
