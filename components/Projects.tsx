import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { div } from "motion/react-client";
import { TiHtml5 } from "react-icons/ti";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoBootstrap } from "react-icons/bi";
import { SiJquery } from "react-icons/si";
import { GrWordpress } from "react-icons/gr";
import { BsFiletypePhp } from "react-icons/bs";
import { IoLogoFigma } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export function Projects() {
  return (
    <div className="py-20">
      <h1 className="text-center text-4xl mb-7">
        Here are some of my <span className="custom-gradient">projects</span>
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] cursor-pointer">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = ({ source }: { source: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <img src={source} alt="Project Image" className="w-full object-cover" />
  </div>
);
const items = [
  {
    title: "MCNC: A brand new website",
    description:
      "A growing business in the social domain needed a website to tell their story and to generate leads for potential partnerships. I designed the page in Figma, and made it in HTML/SCSS with Bootstrap and JQuery.",
    header: <Skeleton source="/mcnc.png" />,
    className: "md:col-span-2",
    icon: (
      <div className="flex flex-row items-center gap-2">
        <IoLogoFigma size={24} style={{ fill: "url(#gradient)" }} />
        <TiHtml5 size={24} style={{ fill: "url(#gradient)" }} />
        <SiJquery size={24} style={{ fill: "url(#gradient)" }} />
        <BiLogoBootstrap size={24} style={{ fill: "url(#gradient)" }} />
      </div>
    ),
  },
  {
    title: "Donkey: a fresh coat of paint",
    description: "Some very exciting stuff is gonna be here.",
    header: <Skeleton source="/donkey.png" />,
    className: "md:col-span-1",
    icon: (
      <div className="flex flex-row items-center gap-2">
        <IoLogoFigma size={24} style={{ fill: "url(#gradient)" }} />
        <TiHtml5 size={24} style={{ fill: "url(#gradient)" }} />
        <SiJquery size={24} style={{ fill: "url(#gradient)" }} />
        <BiLogoBootstrap size={24} style={{ fill: "url(#gradient)" }} />
      </div>
    ),
  },
  {
    title: "Loans Dashboard",
    description: "Some very exciting stuff is gonna be here",
    header: <Skeleton source="/dashboard2.png" />,
    className: "md:col-span-1",
    icon: (
      <div className="flex flex-row items-center gap-2">
        <IoLogoFigma size={24} style={{ fill: "url(#gradient)" }} />
        <FaReact size={24} style={{ fill: "url(#gradient)" }} />
        <RiTailwindCssFill size={24} style={{ fill: "url(#gradient)" }} />
        <IoLogoFirebase size={24} style={{ fill: "url(#gradient)" }} />
      </div>
    ),
  },
  {
    title: "Project 4",
    description: "Some very exciting stuff is gonna be here.",
    header: <Skeleton source="#" />,
    className: "md:col-span-2",
    icon: (
      <div className="flex flex-row items-center gap-2">
        <IoLogoFigma size={24} style={{ fill: "url(#gradient)" }} />
        <TiHtml5 size={24} style={{ fill: "url(#gradient)" }} />
        <SiJquery size={24} style={{ fill: "url(#gradient)" }} />
        <BiLogoBootstrap size={24} style={{ fill: "url(#gradient)" }} />
      </div>
    ),
  },
];

export default Projects;
