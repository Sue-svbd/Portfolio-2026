import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useNavigate } from "react-router";
import { PROJECTS, Project } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const LAYOUT_CLASSES = [
  {
    wrapper: "lg:col-span-8 lg:col-start-2",
    image: "lg:h-[500px]",
    align: "lg:self-start",
    marginTop: "lg:mt-0",
  },
  {
    wrapper: "lg:col-span-10 lg:col-start-14",
    image: "lg:h-[600px]",
    align: "lg:self-center",
    marginTop: "lg:mt-40",
  },
  {
    wrapper: "lg:col-span-7 lg:col-start-4",
    image: "lg:h-[450px]",
    align: "lg:self-end",
    marginTop: "lg:mt-20",
  },
  {
    wrapper: "lg:col-span-9 lg:col-start-12",
    image: "lg:h-[550px]",
    align: "lg:self-start",
    marginTop: "lg:mt-0",
  },
  {
    wrapper: "lg:col-span-11 lg:col-start-2",
    image: "lg:h-[650px]",
    align: "lg:self-center",
    marginTop: "lg:mt-32",
  },
];

function ProjectCard({
  project,
  index,
  layout,
}: {
  project: Project;
  index: number;
  layout: any;
}) {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const handleProjectClick = () => {
    if (project.isComingSoon) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    navigate(`/work/${project.id}`, { state: { skipCurtain: true } });
  };

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity }}
      onClick={handleProjectClick}
      className={`group ${project.isComingSoon ? "cursor-default" : "cursor-pointer"} ${layout.wrapper} ${layout.align} ${layout.marginTop}`}
    >
      {/* Project Number */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        className="text-sm tracking-widest mb-6 font-medium"
      >
        [{String(index + 1).padStart(2, "0")}]
      </motion.p>

      {/* Image Container */}
      <div
        className={`bg-black/5 overflow-hidden mb-10 relative ${layout.image}`}
      >
        <motion.div
          layoutId={project.isComingSoon ? undefined : `project-image-${project.id}`}
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
          <p className="text-white text-xl tracking-widest font-bold">
            {project.isComingSoon ? "COMING SOON" : "VIEW PROJECT"}
          </p>
        </motion.div>
      </div>

      {/* Info */}
      <motion.div style={{ y }} className="space-y-3">
        <div className="flex justify-between items-end border-b border-black/10 pb-4">
          <h3 className="text-4xl tracking-tighter uppercase font-bold leading-none">
            {project.title}
          </h3>
          <p className="text-sm tracking-widest opacity-40 font-medium">
            {project.year}
          </p>
        </div>
        <div className="flex gap-4 text-xs tracking-[2px] opacity-60 uppercase font-bold pt-2">
          <p>{project.category}</p>
          <span>/</span>
          <p>{project.client}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Work() {
  const filteredProjects = PROJECTS;

  return (
    <div className="min-h-screen px-8 pt-10 pb-20 overflow-x-hidden">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-40 selected-work-container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Zalando_Sans_Expanded',sans-serif] font-bold text-[74px] lg:text-[176px] leading-[0.7] tracking-tighter mb-8 uppercase selected-work-title"
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
        <div className="grid grid-cols-1 lg:grid-cols-24 items-start">
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
            className="text-s tracking-wide mb-8"
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
