import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MacbookScroll } from "./ui/Macbook-scroll";

const Hero = () => {
  return (
    <div className="py-20">
      <Spotlight />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[42px] md:text-5xl lg:text-6xl custom-bold"
            words="I make websites, sometimes other stuff"
            filter={false}
            duration={2}
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl">
            A web Developer and Designer based in Eindhoven who never misses an
            opportunity to <span className="custom-gradient">grow</span>. Need a new website? Don't hesitate to reach
            out!
          </p>

          <a href="#" className="theme-button text-sm md:text-lg lg:text-2xl">Contact me</a>
        </div>
      </div>
      <MacbookScroll src="/code-picture.png"/>
    </div>
  );
};

export default Hero;
