import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Whats from "@iconscout/react-unicons/icons/uil-whatsapp";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <br />
        <span>mmdohm99@gmail.com</span>
        <span>01122626446 / 01068639806</span>
        <div className="f-icons">
          <Whats color="white" size={"3rem"} />

          <a
            href="https://www.facebook.com/profile.php?id=100009511187355"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/mmdohm99"
            target="_blank"
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <span style={{ fontSize: "12px" }}>@Mohamed Mamdouh 2022</span>
      </div>
    </div>
  );
};

export default Footer;
