import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import local assets
import chrome51 from "../../assets/chrome51.svg";
import cube6 from "../../assets/Cube6_Transparent.svg";
import group134 from "../../assets/Group_134.svg";
import group13k from "../../assets/Group_13k.svg";
import s56 from "../../assets/s56_1.svg";


export function Work() {
  const [filter, setFilter] = useState("ALL");

  const projects = [
    {
      title: "STUDIO 3D REDESIGN",
      client: "3D PROVIDER",
      year: "2026",
      image: chrome51,
      category: "3D DESIGN",
    },
    {
      title: "PLATFORM REDESIGN",
      client: "3D PROVIDER",
      year: "2025",
      image: cube6,
      category: "UI/UX",
    },
    {
      title: "MOBILE APP REDESIGN",
      category: "UI/UX",
      client: "FINTECH APP",
      year: "2025",
      image: group134,
    },
    {
      title: "CREATIVE PORTFOLIO",
      category: "WEB DESIGN",
      client: "PHOTOGRAPHER",
      year: "2026",
      image: group13k,
    },
    {
      title: "FOOD DELIVERY APP",
      category: "MOBILE",
      client: "FOOD STARTUP",
      year: "2025",
      image: s56,
    },
  ];

  // Desktop "random" masonry-like layout
  const layoutClasses = [
    {
      wrapper: "lg:col-span-3 lg:row-span-2",
      image: "lg:h-[420px]",
      align: "lg:self-start",
    },
    {
      wrapper: "lg:col-span-4 lg:row-span-3",
      image: "lg:h-[520px]",
      align: "lg:self-center",
    },
    {
      wrapper: "lg:col-span-3 lg:row-span-2",
      image: "lg:h-[380px]",
      align: "lg:self-end",
    },
    {
      wrapper: "lg:col-span-2 lg:row-span-2",
      image: "lg:h-[340px]",
      align: "lg:self-start",
    },
    {
      wrapper: "lg:col-span-3 lg:row-span-3",
      image: "lg:h-[500px]",
      align: "lg:self-center",
    },
    {
      wrapper: "lg:col-span-3 lg:row-span-2",
      image: "lg:h-[380px]",
      align: "lg:self-end",
    },
  ];

  const filteredProjects =
    filter === "ALL"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen px-8 pt-10 pb-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="font-['Zalando_Sans_Expanded',sans-serif] font-bold text-[176px] leading-[0.7] tracking-tighter mb-8 uppercase">
            SELECTED <br></br> WORK
          </h1>
          <div className="w-32 h-1 bg-[#614DD5]"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-20 lg:auto-rows-[260px]">
          {filteredProjects.map((project, i) => {
            const layout = layoutClasses[i % layoutClasses.length];
            return (
              <div
                key={i}
                className={`group cursor-pointer ${layout.wrapper} ${layout.align}`}
              >
                {/* Project Number */}
                <p className="text-sm tracking-widest opacity-30 mb-4">
                  [{String(i + 1).padStart(2, "0")}]
                </p>

                {/* Image */}
                <div
                  className={`bg-black/5 overflow-hidden mb-6 relative aspect-[4/3] lg:aspect-auto ${layout.image}`}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 transition-opacity"
                  >
                    <p className="text-white text-xl tracking-widest">
                      VIEW PROJECT
                    </p>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl tracking-tight uppercase">
                      {project.title}
                    </h3>
                    <p className="text-sm tracking-widest opacity-50">
                      {project.year}
                    </p>
                  </div>
                  <div className="flex gap-4 text-sm tracking-wide opacity-70">
                    <p>{project.category}</p>
                    <span>•</span>
                    <p>{project.client}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center py-32">
          <p className="text-xl tracking-wide opacity-70 mb-8">
            INTERESTED IN WORKING TOGETHER?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm tracking-widest border border-black px-12 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            LET'S TALK
          </motion.button>
        </div>
      </div>
    </div>
  );
}
