import React from "react";

import ParticlesBackground from "./particles-background/particles-background";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoute from "./animatedRoute";

export default function Main() {
  return (
    <div className="main bg-black w-full h-screen overflow-auto">
      <ParticlesBackground />
      <BrowserRouter>
        <AnimatedRoute />
      </BrowserRouter>
    </div>
  );
}
