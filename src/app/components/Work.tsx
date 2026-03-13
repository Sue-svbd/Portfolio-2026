import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { PROJECTS, Project } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const LAYOUT_CLASSES = [
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
];

function ProjectCard({ project, index, layout }: { project: Project; index: number; layout: any }) {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const handleProjectClick = () => {
    // We scroll to top immediately to ensure the expansion 
    // measurement is correct for the destination page
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    navigate(`/work/${project.id}`, { state: { skipCurtain: true } });
  };

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      onClick={handleProjectClick}
      className={`group cursor-pointer ${layout.wrapper} ${layout.align}`}
    >
      {/* Project Number */}
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        className="text-sm tracking-widest mb-4"
      >
        [{String(index + 1).padStart(2, "0")}]
      </motion.p>

      {/* Image Container */}
      <div className={`bg-black/5 overflow-hidden mb-6 relative aspect-[4/3] lg:aspect-auto ${layout.image}`}>
        <motion.div 
          layoutId={`project-image-${project.id}`}
          style={{ scale: imageScale }} 
          className="w-full h-full"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-[#614DD5]/90 flex items-center justify-center opacity-0 transition-opacity z-20"
        >
          <p className="text-white text-xl tracking-widest font-bold">VIEW PROJECT</p>
        </motion.div>
      </div>

      {/* Info */}
      <motion.div style={{ y }} className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl tracking-tight uppercase font-bold">
            {project.title}
          </h3>
          <p className="text-sm tracking-widest opacity-50">{project.year}</p>
        </div>
        <div className="flex gap-4 text-sm tracking-wide opacity-70">
          <p>{project.category}</p>
          <span>•</span>
          <p>{project.client}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Work() {
  const filteredProjects = PROJECTS; // Can re-add filtering logic if needed

  return (
    <div className="min-h-screen px-8 pt-10 pb-20">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Zalando_Sans_Expanded',sans-serif] font-bold text-[176px] leading-[0.7] tracking-tighter mb-8 uppercase"
          >
            SELECTED <br /> WORK
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#614DD5]"
          ></motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-20 lg:auto-rows-[260px]">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              layout={LAYOUT_CLASSES[i % LAYOUT_CLASSES.length]}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            className="text-xl tracking-wide mb-8"
          >
            INTERESTED IN WORKING TOGETHER?
          </motion.p>
          <motion.a
            href="mailto:susannacapacchione@gmail.com"
            whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-sm tracking-widest border border-black px-12 py-4 transition-all duration-300 uppercase font-bold"
          >
            LET'S TALK
          </motion.a>
        </div>
      </div>
    </div>
  );
}
