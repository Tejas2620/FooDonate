import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>foodonate123@gmail.com</span>
        <div className="f-icons">
         
          <a
          href="https://instagram.com/foodonate123?igshid=YmMyMTA2M2Y=">
          <Insta color="white" size={"3rem"} />
          </a>
          
          <a
          href="https://www.facebook.com/profile.php?id=100089250266271">

          <Facebook color="white" size={"3rem"} />
          </a>
          
          <a
          href="https://twitter.com/foodonate123">

          <Twitter color="white" size={"3rem"} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
