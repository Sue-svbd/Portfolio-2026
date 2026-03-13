import React, { useRef } from "react";
import { useParams, Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { PROJECTS } from "../data/projects";
import { ImageWithFallback as FigmaImage } from "./figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = PROJECTS.find((p) => p.id === projectId);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax for the hero image inside its container
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center font-['Inter',sans-serif]">
          <h1 className="text-4xl mb-4 font-bold tracking-tighter">PROJECT NOT FOUND</h1>
          <Link to="/work" className="text-[#614DD5] font-medium underline underline-offset-4 tracking-widest">
            BACK TO WORK
          </Link>
        </div>
      </div>
    );
  }

  const useCarousel = project.approachImages.length > 3;

  return (
    <div ref={containerRef} className="bg-white min-h-screen font-['Inter',sans-serif]">
      {/* Navigation Overlay */}
      <div className="fixed left-8 top-32 z-50 mix-blend-difference">
        <Link 
          to="/work" 
          state={{ skipCurtain: true }}
          className="flex items-center gap-2 text-sm tracking-[1.25px] text-white opacity-60 hover:opacity-100 transition-opacity uppercase font-medium"
        >
          <ArrowLeft size={16} /> [ BACK TO WORK ]
        </Link>
      </div>

      {/* Hero Header */}
      <div className="pt-10 pb-16 px-8 max-w-[1800px] mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[128px] leading-none tracking-[-4.8px] uppercase"
        >
          {project.title}
        </motion.h1>
      </div>

      {/* Hero Image Section - Black Box from Figma */}
      <div className="w-full h-[848px] bg-black overflow-hidden relative flex items-center justify-center">
        <motion.div 
          layoutId={`project-image-${project.id}`}
          style={{ y: imageY }}
          className="w-full h-full max-w-[1500px] relative"
        >
          <FigmaImage 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </div>

      {/* My Approach Section */}
      <div className="max-w-[1800px] mx-auto px-8 pt-60 pb-40">
        <div className="grid grid-cols-12 gap-12 relative">
          
          {/* Approach Introduction & Large Title */}
          <div className="col-span-12 mb-32">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              className="text-xs tracking-[3px] font-bold mb-12 uppercase max-w-[400px] ml-[410px]"
            >
              {project.approachIntroduction}
            </motion.p>
            <h2 className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[128px] leading-[0.8] tracking-[-4.8px] uppercase">
              MY <br /> <span className="ml-[410px]">APPROACH</span>
            </h2>
          </div>

          {/* Description Text */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-2 mb-40">
            <p className="text-[18px] leading-[1.6] text-black opacity-70 tracking-[-0.44px] font-normal">
              {project.approachText}
            </p>
          </div>

          {/* Process Images Grid or Carousel */}
          <div className="col-span-12">
            {useCarousel ? (
              <Carousel
                plugins={[
                  AutoScroll({
                    speed: 1,
                    stopOnInteraction: false,
                    stopOnMouseEnter: false,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-8">
                  {project.approachImages.map((img, i) => (
                    <CarouselItem key={i} className="pl-8 md:basis-1/2 lg:basis-2/3">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[13px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] bg-gray-100">
                        <FigmaImage 
                          src={img} 
                          alt={`Approach step ${i + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : (
              <div className="flex flex-col md:flex-row gap-12 items-end">
                {project.approachImages.map((img, i) => {
                  const imgRef = useRef(null);
                  const { scrollYProgress: imgScroll } = useScroll({
                    target: imgRef,
                    offset: ["start end", "end start"],
                  });
                  const y = useTransform(imgScroll, [0, 1], [40 * (i + 1), -40 * (i + 1)]);

                  // Matching Figma shadows and radii
                  const isFirst = i === 0;

                  return (
                    <motion.div 
                      key={i} 
                      ref={imgRef}
                      style={{ y }}
                      className={`flex-1 relative overflow-hidden transition-all duration-500
                        ${isFirst ? 'rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' : 'rounded-[13px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]'}
                      `}
                    >
                      <FigmaImage 
                        src={img} 
                        alt={`Approach step ${i + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Navigation / Footer */}
      <div className="py-60 border-t border-black/5 text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-['Zalando_Sans_Expanded',sans-serif] text-sm tracking-[2px] opacity-40 mb-12 uppercase font-bold">
            NEXT PROJECT
          </p>
          <Link 
            to={`/work/${PROJECTS[(PROJECTS.findIndex(p => p.id === project.id) + 1) % PROJECTS.length].id}`}
            state={{ skipCurtain: true }}
            className="group"
          >
            <h3 className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-6xl tracking-tighter uppercase group-hover:text-[#614DD5] transition-colors">
              {PROJECTS[(PROJECTS.findIndex(p => p.id === project.id) + 1) % PROJECTS.length].title}
            </h3>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
