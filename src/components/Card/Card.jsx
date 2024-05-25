import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      {/* <input type="submit" name="submit" value="Submit" /> */}
      <a
        href="temp_caterer.html">
        <button type="submit" className="c-button"  >Details</button>

      </a>
     
      </div>
  );
};
export default Card;


