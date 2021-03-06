import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home fixed z-10 top-0 w-screen h-screen flex items-center"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth }}
    >
      <div className="glassmorphism lg:w-[80%] w-[90%] lg:h-5/6 mx-auto my-auto bg-black-glass shadow-glass backdrop-blur-glass rounded-[10px]">
        <div className="body text-white px-[58px] py-12 lg:py-0 h-full flex flex-col justify-center gap-8 md:flex-row md:px-[64px] md:justify-between items-center lg:px-28">
          <div className="text font-extrabold text-5xl text-left md:text-[64px] w-fit font-inter self-start md:self-center">
            <h1>Hello</h1>
            <h1>I am</h1>
            <h1>Rohman</h1>
          </div>
          <Link to="/about">
            <div className="button text-base font-extrabold px-4 py-2 border-2 border-white w-fit self-center md:text-3xl md:px-6 md:py-3 font-inter cursor-pointer">
              <button>
                See more <ArrowForwardIcon fontSize="large" />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
