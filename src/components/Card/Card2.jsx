import React from "react";
import "./Card2.css";
const Card2 = ({ emoji, heading, detail, color }) => {
    return (
      <div className="card2" style={{borderColor: {color}}}> 
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        {/* <input type="submit" name="submit" value="Submit" /> */}
        <a
          href="temp_volunteer.html">
          <button type="submit" className="c2-button"  >Details</button>
  
        </a>
       
        </div>
    );
  };
  export default Card2;