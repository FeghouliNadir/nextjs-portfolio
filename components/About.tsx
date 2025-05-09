import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion, stagger, useAnimate } from "motion/react";

const About = () => {
  return (
    <div className="">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">
            About <span className="custom-gradient">me</span>
          </h2>

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            Hi, I'm Nadir, a junior software developer based in Eindhoven. I
            specialize in Front-end web development, but I know my way around
            the backend, and I dabble in designing as well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
