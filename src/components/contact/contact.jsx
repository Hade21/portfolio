import React from "react";
import MyContact from "./mycontact";
import MySkill from "./myskill";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact flex items-center w-screen h-screen"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth }}
    >
      <div className="glassmorphism w-[90%] lg:w-[80%] lg:h-5/6 mx-auto my-auto bg-black-glass shadow-glass backdrop-blur-glass rounded-[10px] flex flex-col justify-between md:px-8 md:py-8 px-4 py-6">
        <div className="wrapper flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <MySkill />
          <MyContact />
        </div>
        <div className="button">
          <Link to="/">
            <button className="text-base mt-8 md:mt-8 lg:mt-0 font-inter font-extrabold px-2 py-1 border-2 border-white w-fit self-center md:px-4 md:py-2  cursor-pointer text-white">
              Back to Home <ArrowForwardIcon fontSize="large" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
