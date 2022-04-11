import React from "react";
import Photo from "../../assets/20190611_100255.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about flex items-center w-screen h-screen">
      <div className="glassmorphism lg:w-[80%] mx-auto my-auto bg-black-glass shadow-glass backdrop-blur-glass rounded-[10px]">
        <div className="body text-white px-[70px] flex flex-col justify-center py-12 animate-swipe-right">
          <div className="title font-inter">
            <h1 className="font-extrabold text-5xl text-left flex items-end gap-3">
              Hello! <span className="text-[40px] lg:text-5xl">I am</span>
            </h1>
            <h1 className="text-[42px] text-left text-pink">
              Muhammad Abdurrohman
            </h1>
          </div>
          <div className="body flex gap-12 px-6 my-10">
            <div className="profile w-1/3">
              <div className="cover rounded-xl">
                <img
                  src={Photo}
                  alt="profile"
                  className="rounded-xl object-scale-down object-center "
                />
              </div>
            </div>
            <div className="desc flex flex-col gap-4 justify-center">
              <div className="iam">
                <h3 className="text-2xl font-extrabold text-left font-nunito">
                  I am
                </h3>
                <h3 className="text-3xl font-extrabold text-left font-inter text-pink">
                  Junior Frontend Developer
                </h3>
              </div>
              <p className="text-2xl font-normal text-desc text-left font-nunito">
                I have passion for new tech stack, creating dynamic interactive
                UI/UX with custom animation
              </p>
            </div>
          </div>
          <div className="button">
            <Link to="/works">
              <button className="text-base font-inter font-extrabold px-4 py-2 border-2 border-white w-fit self-center md:text-4xl md:px-6 md:py-3 lg:text-xl cursor-pointer">
                My Works
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
