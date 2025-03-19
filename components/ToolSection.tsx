import React from "react";
import { TiHtml5 } from "react-icons/ti";

const tools = [
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

const ToolSection = () => {
  return (
    <div className="p-8 bg-white text-center">
      <h2 className="text-4xl">
        <span className="custom-gradient">Tools</span> and{" "}
        <span className="custom-gradient">languages</span> I like to use
      </h2>
      <div className="mt-6 flex lg:flex-row justify-center items-center gap-[60px] flex-col">
        {tools.map((tool, index) => (
          <div key={index} className="text-left">
            <h2 className="font-bold text-2xl mb-3">{tool.category}</h2>
            <div className="flex flex-wrap gap-2">
              {tool.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border rounded-lg bg-white text-sm font-bold flex flex-row items-center"
                >
                  <TiHtml5 size={32} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolSection;
