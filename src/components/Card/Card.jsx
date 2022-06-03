import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="card"
      style={{ background: darkMode ? "white" : "", borderColor: { color } }}
    >
      <img src={emoji} alt="" />
      <span style={{ color: "black" }}>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
