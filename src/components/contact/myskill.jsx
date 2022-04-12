import React from "react";

export default function MySkill() {
  return (
    <div className="my-skill flex flex-col gap-10 w-1/2">
      <div className="title">
        <h1 className="font-inter font-extrabold text-4xl text-white text-left">
          My Skills ...
        </h1>
      </div>
      <div className="body pl-4 pr-8">
        <ol className="flex flex-col gap-3 text-white text-sm font-nunito w-full">
          <li className="grid grid-cols-6 grid-rows-1">
            <span className="bg-pink px-2 py-1 col-span-1">HTML</span>
            <div className="bar bg-myblue col-span-5 flex items-center justify-between">
              <div className="persent w-[90%] bg-desc h-full"></div>
              <p className="font-nunito text-sm text-center px-2">90%</p>
            </div>
          </li>
          <li className="grid grid-cols-6 grid-rows-1">
            <span className="bg-pink px-2 py-1 col-span-1">CSS</span>
            <div className="bar bg-myblue col-span-5 flex items-center justify-between">
              <div className="persent w-[90%] bg-desc h-full"></div>
              <p className="font-nunito text-sm text-center px-2">90%</p>
            </div>
          </li>
          <li className="grid grid-cols-6 grid-rows-1">
            <span className="bg-pink px-2 py-1 col-span-1">Javascript</span>
            <div className="bar bg-myblue col-span-5 flex items-center justify-between">
              <div className="persent w-[70%] bg-desc h-full"></div>
              <p className="font-nunito text-sm text-center px-2">70%</p>
            </div>
          </li>
          <li className="grid grid-cols-6 grid-rows-1">
            <span className="bg-pink px-2 py-1 col-span-1">React</span>
            <div className="bar bg-myblue col-span-5 flex items-center justify-between">
              <div className="persent w-[50%] bg-desc h-full"></div>
              <p className="font-nunito text-sm text-center px-2">50%</p>
            </div>
          </li>
          <li className="grid grid-cols-6 grid-rows-1">
            <span className="bg-pink px-2 py-1 col-span-1">Node.js</span>
            <div className="bar bg-myblue col-span-5 flex items-center justify-between">
              <div className="persent w-[30%] bg-desc h-full"></div>
              <p className="font-nunito text-sm text-center px-2">30%</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}