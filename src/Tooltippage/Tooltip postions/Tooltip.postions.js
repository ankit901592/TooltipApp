import { useState } from "react";
import "./position.css"; 

function Positions({ setTooltipPostion }) {
  const [activeButton, setActiveButton] = useState("top");

  const handleClick = (position) => {
    setTooltipPostion(position);
    setActiveButton(position);
  };

  return (
    <div className="positions-container">
      <h1>Tooltip positions</h1>
      <button
        onClick={() => handleClick("left")}
        className={activeButton === "left" ? "active" : ""}
      >
        Left
      </button>
      <button
        onClick={() => handleClick("right")}
        className={activeButton === "right" ? "active" : ""}
      >
        Right
      </button>
      <button
        onClick={() => handleClick("top")}
        className={activeButton === "top" ? "active" : ""}
      >
        Top
      </button>
      <button
        onClick={() => handleClick("bottom")}
        className={activeButton === "bottom" ? "active" : ""}
      >
        Bottom
      </button>
    </div>
  );
}

export default Positions;
