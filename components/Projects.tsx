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

export function Projects() {
  return (
    <div className="py-20">
      <h1 className="text-center text-4xl mb-7">
        Here are some of my <span className="custom-gradient">projects</span>
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
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
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Project 1",
    description: "Some very exciting stuff is gonna be here.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon:  <TiHtml5 size={32} style={{ fill: "url(#gradient)" }} />,
  },
  {
    title: "Project 2",
    description: "Some very exciting stuff is gonna be here.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project 3",
    description: "Some very exciting stuff is gonna be here",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project 4",
    description: "Some very exciting stuff is gonna be here.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default Projects;
