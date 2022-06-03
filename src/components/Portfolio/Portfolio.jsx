import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import P1 from "../../img/1.jpg";
import P2 from "../../img/2.jpg";
import P3 from "../../img/3.jpg";
import P4 from "../../img/4.jpg";
import P5 from "../../img/5.jpg";
import P6 from "../../img/6.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        spaceBetween={350}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://6291735693423b19243c83b0--spiffy-empanada-bed1f3.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={P1} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://lambent-kataifi-b3e385.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={P2} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://cute-torte-8af558.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={P6} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://62699eb969a0660009f55c68--creative-sorbet-2f4646.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={P4} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://sparkly-squirrel-3cbf86.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={P5} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://lambent-kataifi-b3e385.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={P3} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
