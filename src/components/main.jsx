import React from "react";
import About from "./about/about";
import Home from "./home/home";
import MyWorks from "./works/my-works";
import ParticlesBackground from "./particles-background/particles-background";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <div className="main bg-black w-full h-screen overflow-auto">
      <ParticlesBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<MyWorks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
