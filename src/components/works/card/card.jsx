import React from "react";

const Card = (props) => {
  return (
    <div className="card w-[150px] lg:w-[220px] h-full cursor-grab">
      <img
        src={require(`../../../assets/${props.image}`)}
        alt=""
        className="w-[150px] md:w-[220px] h-[100px] object-cover"
      />
      <div className="title text-white text-left mt-2 flex flex-col h-[220px] justify-between">
        <div className="text grid gap-1">
          <h1 className="font-inter font-extrabold text-base md:text-lg">
            {props.title}
          </h1>
          <p className="font-nunito font-normal text-sm leading-[18px]">
            {props.desc}
          </p>
        </div>
        <div className="button flex flex-col gap-2 justify-between font-nunito text-sm">
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 border-2 border-pink w-full
          "
          >
            Live URL
          </a>
          <a
            href={props.repo}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 border-2 border-myblue w-full"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
