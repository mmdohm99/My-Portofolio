import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Works.css";
import Upwork from "../../img/react.png";
import Fiverr from "../../img/nextjs_2_60.jpg";
import MUI from "../../img/mui.png";
import jS from "../../img/js.jpg";
import HTML from "../../img/HTML.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "", paddingLeft: "10px" }}>
            Use all of these Tools
          </span>
          <span style={{ paddingLeft: "10px" }}>Tools & Technologies</span>
          <span style={{ color: darkMode ? "white" : "", padding: "15px" }}>
            I use the latest tools and technologies to build the best UI
            <br />
            and UX within the best time possible and the best performance Apps
            and Websites
            <br />
            as my main focus is to make my name shine and my work stand out
            <br />
            As they say, "Good Apps Makes Easier Live "
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button style={{ marginLeft: "10px" }} className="button s-button">
              Hire Me
            </button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={jS} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={HTML} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MUI} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
