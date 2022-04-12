import React from "react";
import Card from "./card/card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { items } from "./card/works.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MyWorks() {
  return (
    <div className="my-works flex items-center w-screen h-screen">
      <div className="glassmorphism lg:w-[80%] mx-auto my-auto bg-black-glass shadow-glass backdrop-blur-glass rounded-[10px]">
        <div className="wrapper px-16 py-8 flex flex-col gap-8 h-full">
          <div className="works font-inter font-extrabold text-white text-left">
            <h1 className="text-5xl">Here is ...</h1>
            <p className="text-xl leading-5">some of My works</p>
          </div>
          <div className="wrapper h-2/3 w-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={3.6}
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
              <button className="text-base font-inter font-extrabold px-4 py-2 border-2 border-white w-fit self-center md:text-4xl md:px-4 md:py-2 lg:text-lg cursor-pointer text-white">
                Contact Me <ArrowForwardIcon fontSize="large" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
