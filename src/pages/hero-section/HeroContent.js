import React from "react";
import "../../App.css";
import Typist from "react-typist";
import Image from "../../assets/code.svg";

export default function HeroContent() {
  return (
    <div className="hero flex m-auto justify-center items-center">
      <div className="hero-text">
        <Typist>
          <h1 className="text-4xl font-bold">CREATE YOUR DEGITAL PRESENCE</h1>
        </Typist>
        <p className="mb-4">
          Creating your degital work is never been easier, and we make it more
          easier for you
        </p>
        <a href="#" className="hero-link hover:bg-indigo-900 hover:text-white">
          Get a free quote
        </a>
      </div>
      <div className="hero-image hidden md:block">
        <img src={Image} alt="" />
      </div>
    </div>
  );
}
