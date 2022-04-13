import React, { useState, useEffect } from "react";
import Card from "./card/card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { items } from "./card/works.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

export default function MyWorks() {
  const hasWindow = typeof window !== "undefined";

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return (
    <motion.div
      className="my-works flex items-center w-screen h-screen"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="glassmorphism lg:w-[80%] w-[90%] mx-auto my-auto bg-black-glass shadow-glass backdrop-blur-glass rounded-[10px]">
        <div className="wrapper px-12 md:px-16 py-8 flex flex-col gap-8 h-full">
          <div className="works font-inter font-extrabold text-white text-left">
            <h1 className="text-3xl md:text-5xl">Here is ...</h1>
            <p className="text-base md:text-xl leading-5">some of My works</p>
          </div>
          <div className="wrapper h-full lg:h-2/3 w-full">
            <Swiper
              spaceBetween={windowWidth > 450 ? 50 : 1}
              slidesPerView={windowWidth > 450 ? 3.8 : 1.4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {items.map((item) => {
                return (
                  <SwiperSlide>
                    <Card
                      image={item.image}
                      title={item.title}
                      desc={item.desc}
                      url={item.url}
                      repo={item.repo}
                    />
                  </SwiperSlide>
                );
              })}
              ...
            </Swiper>
          </div>
          <div className="button">
            <Link to="/contact">
              <button className="text-base font-inter font-extrabold px-2 py-1 border-2 border-white w-fit self-center md:text-xl md:px-4 md:py-2 lg:text-lg cursor-pointer text-white">
                Contact Me <ArrowForwardIcon fontSize="large" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
