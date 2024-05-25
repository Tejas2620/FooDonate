import React from "react";
import "./Card3.css";

const Card3 = ({ emoji, heading, detail, color }) => {
    return (
      <div className="card3" style={{borderColor: {color}}}> 
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        {/* <input type="submit" name="submit" value="Submit" /> */}
        <a
          href="temp_ngos.html">
          <button type="submit" className="c3-button" >Details</button>
  
        </a>
       
        </div>
    );
  };
  
  
  
  export default Card3;