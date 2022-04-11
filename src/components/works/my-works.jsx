import React from "react";
import Card from "./card/card";
import { items } from "./card/works.js";

export default function MyWorks() {
  return (
    <div className="my-works">
      <div className="glassmorphism lg:w-[80%] mx-auto my-auto bg-black-glass shadow-glass backdrop-blur-glass rounded-[10px]">
        <div className="works">
          <h1>Here is ...</h1>
          <p>some of My works</p>
          <div className="card-wrapper">{items.map}</div>
        </div>
      </div>
    </div>
  );
}
