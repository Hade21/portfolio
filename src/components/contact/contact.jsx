import React from "react";
import MyContact from "./mycontact";
import MySkill from "./myskill";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact flex items-center w-screen h-screen">
      <div className="glassmorphism lg:w-[80%] lg:h-5/6 mx-auto my-auto bg-black-glass shadow-glass backdrop-blur-glass rounded-[10px] flex flex-col justify-between px-8 py-8">
        <div className="wrapper flex justify-between">
          <MySkill />
          <MyContact />
        </div>
        <div className="button">
          <Link to="/">
            <button className="text-base font-inter font-extrabold px-4 py-2 border-2 border-white w-fit self-center md:text-4xl md:px-4 md:py-2 lg:text-base cursor-pointer text-white">
              Back to Home <ArrowForwardIcon fontSize="large" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
