import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Cta = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[42px] md:text-3xl lg:text-4xl custom-bold"
            words="Like what you see? Reach out, and let's work together!"
            filter={false}
            duration={2}
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-xl">
            Got any questions or want to hire me?Don't hesitate to send an email
            to{" "}
            <a
              href="mailto:sadiekfeghouli@hotmail.com"
              className="custom-gradient"
            >
              portfolio@feghouli.com
            </a>
            , or check out my socials!
          </p>

          <div className="flex flex-col items-center sm:flex-row gap-2">
            <a
              href="https://nl.linkedin.com/in/sadiek-feghouli-a40a09203"
              target="_blank"
            >
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border rounded-lg bg-white text-sm font-bold flex flex-row items-center gap-2">
                  <svg width="32" height="32">
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#00bbff" />
                        <stop offset="44%" stopColor="#00b4f5" />
                        <stop offset="100%" stopColor="#007099" />
                      </linearGradient>
                    </defs>
                    <IoLogoLinkedin
                      size={32}
                      style={{ fill: "url(#gradient)" }}
                    />
                  </svg>
                  Linkedin
                </span>
              </div>
            </a>
            <a href="https://github.com/FeghouliNadir" target="_blank">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border rounded-lg bg-white text-sm font-bold flex flex-row items-center gap-2">
                  <svg width="32" height="32">
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#00bbff" />
                        <stop offset="44%" stopColor="#00b4f5" />
                        <stop offset="100%" stopColor="#007099" />
                      </linearGradient>
                    </defs>
                    <FaGithub size={32} style={{ fill: "url(#gradient)" }} />
                  </svg>
                  GitHub
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
