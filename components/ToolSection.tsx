import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoBootstrap } from "react-icons/bi";
import { SiJquery } from "react-icons/si";
import { GrWordpress } from "react-icons/gr";
import { BsFiletypePhp } from "react-icons/bs";
import { RiNodejsLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

type Tool = {
  category: string;
  items: string[];
};

const tools: Tool[] = [
  {
    category: "Front-end",
    items: ["HTML/CSS", "Javascript", "JQuery", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Wordpress", "ACF PRO", "PHP", "Node.JS", "SQL"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
  },
];

const icons: JSX.Element[] = [
  <TiHtml5 size={32} style={{ fill: "url(#gradient)" }} />,
  <RiJavascriptFill size={32} style={{ fill: "url(#gradient)" }} />,
  <SiJquery size={32} style={{ fill: "url(#gradient)" }} />,
  <BiLogoBootstrap size={32} style={{ fill: "url(#gradient)" }} />,
  <GrWordpress size={32} style={{ fill: "url(#gradient)" }} />,
  <svg
    width="33"
    height="34"
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_196_161)">
      <path
        d="M7.3425 1.40764L0.9075 7.84365C0.324844 8.42639 0 9.21027 0 10.0302V31.9529C0 32.8089 0.690938 33.5 1.54688 33.5H31.4531C32.3091 33.5 33 32.8089 33 31.9529V2.04712C33 1.19105 32.3091 0.5 31.4531 0.5H9.53391C8.71406 0.5 7.92516 0.824894 7.34766 1.40764H7.3425Z"
        fill="url(#paint0_linear_196_161)"
      />
      <g filter="url(#filter0_d_196_161)">
        <path
          d="M23.3486 22.2417H20.9596V12.6274H27.328V14.8662H23.3486V16.5819H27.0993V18.765H23.3486V22.2421V22.2417Z"
          fill="white"
        />
        <path
          opacity="0.05"
          d="M20.3294 18.2067H22.6974C22.347 20.6538 20.2898 22.2722 17.7975 22.2722C15.0683 22.2722 12.8461 20.2263 12.8461 17.4713C12.8404 16.8305 12.9646 16.1954 13.2112 15.6044C13.4578 15.0134 13.8215 14.4787 14.2803 14.033C15.2222 13.1181 16.4865 12.6138 17.7975 12.63C20.2667 12.63 22.3814 14.2609 22.682 16.6688H20.3165C19.6052 13.9412 15.1731 14.2079 15.1731 17.4713C15.1731 20.735 19.6607 20.9754 20.3294 18.2075V18.2067Z"
          fill="#002447"
        />
        <path
          d="M19.8448 18.2067C19.4385 19.5835 17.9926 20.402 16.5693 20.0593C15.1452 19.7152 14.2529 18.3346 14.5486 16.9312C14.8438 15.5274 16.2209 14.6025 17.6676 14.8367C18.2603 14.9172 18.8069 15.2014 19.2141 15.6407C19.4956 15.9314 19.7068 16.2829 19.8316 16.6684H22.1279C21.8273 14.255 19.7068 12.63 17.2434 12.63C15.9323 12.6133 14.6676 13.1174 13.7254 14.0322C13.2662 14.478 12.9023 15.0128 12.6557 15.6043C12.409 16.1955 12.2849 16.8311 12.2909 17.4721C12.2909 20.2271 14.5 22.2722 17.2442 22.2722C19.7345 22.2722 21.7858 20.6538 22.1425 18.2067H19.8445H19.8448Z"
          fill="white"
        />
        <path
          opacity="0.05"
          d="M12.7086 20.843H9.38385L8.84035 22.24H6.29602L10.1897 12.6172H11.8867L15.9353 22.2433H13.249L12.7078 20.843H12.7086ZM10.3289 18.461L10.2456 18.6782H11.8597L11.8038 18.5152L11.0523 16.4516L10.3289 18.461Z"
          fill="#002447"
        />
        <path
          d="M12.079 20.843H8.75971L8.21659 22.24H5.67188L9.56598 12.6172H11.263L15.3115 22.2433H12.6264L12.079 20.843ZM9.70478 18.461L9.62189 18.6782H11.236L11.1797 18.5152L10.4285 16.4516L9.70517 18.461H9.70478Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_196_161"
        x="-2.32812"
        y="4.61719"
        width="37.6561"
        height="25.655"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.141176 0 0 0 0 0.278431 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_196_161"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_196_161"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_196_161"
        x1="0"
        y1="17"
        x2="33"
        y2="17"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00BBFF" />
        <stop offset="0.445" stopColor="#00B4F5" />
        <stop offset="1" stopColor="#007099" />
      </linearGradient>
      <clipPath id="clip0_196_161">
        <rect
          width="33"
          height="33"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>,
  <BsFiletypePhp  size={32} style={{ fill: "url(#gradient)" }} />,
  <RiNodejsLine size={32} style={{ fill: "url(#gradient)" }} />,
  <FaDatabase size={32} style={{ fill: "url(#gradient)" }} />,
  <IoLogoFigma size={32} style={{ fill: "url(#gradient)" }} />,
  <SiAdobexd size={32} style={{ fill: "url(#gradient)" }} />,
  <SiAdobephotoshop size={32} style={{ fill: "url(#gradient)" }} />,
  <SiAdobeillustrator size={32} style={{ fill: "url(#gradient)" }} />,
];

const getIconIndex = (item: string): number => {
  const iconMap: Record<string, number> = {
    "HTML/CSS": 0,
    Javascript: 1,
    JQuery: 2,
    Bootstrap: 3,
    Wordpress: 4,
    "ACF PRO": 5,
    PHP: 6,
    "Node.JS": 7,
    SQL: 8,
    Figma: 9,
    "Adobe XD": 10,
    Photoshop: 11,
    Illustrator: 12,
  };

  return iconMap[item] || 0; // Default to the first icon if not found
};

const ToolSection: React.FC = () => {
  return (
    <div className="lg:p-8 text-center">
      <h2 className="text-4xl">
        <span className="custom-gradient">Tools</span> and{" "}
        <span className="custom-gradient">languages</span> I like to use
      </h2>
      <div className="mt-6 flex lg:flex-row justify-center items-center gap-[60px] flex-col">
        {tools.map((tool, index) => (
          <div key={index} className="text-left">
            <h2 className="font-bold text-2xl mb-3">{tool.category}</h2>
            <div className="flex flex-wrap gap-2">
              {tool.items.map((item, idx) => {
                const iconIndex = getIconIndex(item);
                return (
                  <span
                    key={idx}
                    className="px-3 py-1 border rounded-lg bg-white text-sm font-bold flex flex-row items-center gap-2"
                  >
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
                      {icons[iconIndex]} {/* Dynamically render the icon */}
                    </svg>
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolSection;
