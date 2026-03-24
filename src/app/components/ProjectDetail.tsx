import React, { useRef } from "react";
import { useParams, Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { PROJECTS } from "../data/projects";
import { ImageWithFallback as FigmaImage } from "./figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

function ProjectImages({ images }: { images: string[] }) {
  const useCarousel = images.length > 3;

  return (
    <>
      {/* Mobile Stack */}
      <div className="flex flex-col gap-8 md:hidden">
        {images.map((img, i) => (
          <div key={i} className="w-full rounded-[10px] overflow-hidden shadow-md">
            <FigmaImage
              src={img}
              alt={`Step ${i + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop Layout (Carousel or Grid) */}
      <div className="hidden md:block">
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
              {images.map((img, i) => (
                <CarouselItem key={i} className="pl-8 basis-auto">
                  <FigmaImage
                    src={img}
                    alt={`Step ${i + 1}`}
                    className="h-[600px] w-auto object-contain block"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="flex flex-col md:flex-row gap-12 items-end">
            {images.map((img, i) => {
              const imgRef = useRef(null);
              const { scrollYProgress: imgScroll } = useScroll({
                target: imgRef,
                offset: ["start end", "end start"],
              });
              const y = useTransform(imgScroll, [0, 1], [40 * (i + 1), -40 * (i + 1)]);

              const isFirst = i === 0;

              return (
                <motion.div
                  key={i}
                  ref={imgRef}
                  style={{ y }}
                  className={`flex-1 relative overflow-hidden transition-all duration-500
                    ${isFirst ? "rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" : "rounded-[13px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]"}
                  `}
                >
                  <FigmaImage
                    src={img}
                    alt={`Step ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

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
          <h1 className="text-4xl mb-4 font-bold tracking-tighter">
            PROJECT NOT FOUND
          </h1>
          <Link
            to="/work"
            className="text-[#614DD5] font-medium underline underline-offset-4 tracking-widest"
          >
            BACK TO WORK
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="bg-white min-h-screen font-['Inter',sans-serif]"
    >
      {/* Navigation Overlay */}
      <div className="fixed left-4 md:left-8 top-8 md:top-32 z-50 mix-blend-difference">
        <Link
          to="/work"
          state={{ skipCurtain: true }}
          className="flex items-center gap-2 text-xs md:text-sm tracking-[1.25px] text-white opacity-60 hover:opacity-100 transition-opacity uppercase font-medium"
        >
          <ArrowLeft size={16} /> [ BACK ]
        </Link>
      </div>

      {/* Hero Header */}
      <div 
        className="pb-12 md:pb-16 px-6 md:px-8 max-w-[1800px] mx-auto md:pt-10"
        style={{ paddingTop: window.innerWidth < 768 ? 'calc(var(--spacing) * 4)' : undefined }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[48px] md:text-[128px] leading-[1.1] md:leading-none tracking-[-1.5px] md:tracking-[-4.8px] uppercase break-words"
        >
          {project.title}
        </motion.h1>
      </div>

      {/* Hero Image Section - Black Box from Figma */}
      <div className="w-full h-[400px] md:h-[848px] bg-black overflow-hidden relative flex items-center justify-center">
        <motion.div
          layoutId={`project-image-${project.id}`}
          style={{ y: imageY }}
          className="w-full h-full md:max-w-[1500px] relative"
        >
          <FigmaImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* My Approach Section */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-8 pt-24 md:pt-60 pb-20 md:pb-40">
        <div className="grid grid-cols-12 gap-8 md:gap-12 relative">
          {/* Approach Introduction & Large Title */}
          <div className="col-span-12 mb-16 md:mb-32">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] font-bold mb-8 md:mb-12 uppercase max-w-[400px] md:ml-[410px]"
            >
              {project.approachIntroduction}
            </motion.p>
            <h2 className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[40px] md:text-[128px] leading-[1] md:leading-[0.8] tracking-[-1px] md:tracking-[-4.8px] uppercase">
              MY <br className="hidden md:block" /> <span className="md:ml-[410px]">APPROACH</span>
            </h2>
          </div>

          {/* Description Text */}
          <div className="col-span-12 md:col-span-8 lg:col-span-7 md:col-start-2 lg:col-start-2 mb-12 md:mb-20">
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-black opacity-70 tracking-[-0.2px] md:tracking-[-0.44px] font-normal">
              {project.approachText}
            </p>
          </div>

          {/* Process Images */}
          <div className="col-span-12">
            <ProjectImages images={project.approachImages || []} />
          </div>
        </div>
      </div>

      {/* Extra Sections */}
      {project.extraSections?.map((section, sectionIdx) => (
        <div key={sectionIdx} className="max-w-[1800px] mx-auto px-6 md:px-8 py-20 md:py-40 border-t border-black/5">
          <div className="grid grid-cols-12 gap-8 md:gap-12 relative">
            {/* Section Introduction & Large Title */}
            <div className="col-span-12 mb-16 md:mb-32">
              {section.approachIntroduction && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] font-bold mb-8 md:mb-12 uppercase max-w-[400px] md:ml-[410px]"
                >
                  {section.approachIntroduction}
                </motion.p>
              )}
              {section.title && (
                <h2 className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[40px] md:text-[128px] leading-[1] md:leading-[0.8] tracking-[-1px] md:tracking-[-4.8px] uppercase">
                  {section.title.split(" ").map((word, i) => (
                    <React.Fragment key={i}>
                      <span className={i >= 1 ? "md:ml-[410px]" : ""}>{word}</span>
                      {i < section.title!.split(" ").length - 1 && <br className="hidden md:block" />}
                      {" "}
                    </React.Fragment>
                  ))}
                </h2>
              )}
            </div>

            {/* Description Text */}
            {section.approachText && (
              <div className="col-span-12 md:col-span-8 lg:col-span-7 md:col-start-2 lg:col-start-2 mb-12 md:mb-20">
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-black opacity-70 tracking-[-0.2px] md:tracking-[-0.44px] font-normal">
                  {section.approachText}
                </p>
              </div>
            )}

            {/* Section Images */}
            {section.approachImages && section.approachImages.length > 0 && (
              <div className="col-span-12">
                <ProjectImages images={section.approachImages || []} />
              </div>
            )}
          </div>
        </div>
      ))}

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
            to={`/work/${PROJECTS[(PROJECTS.findIndex((p) => p.id === project.id) + 1) % PROJECTS.length].id}`}
            state={{ skipCurtain: true }}
            className="group"
          >
            <h3 className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-6xl tracking-tighter uppercase group-hover:text-[#614DD5] transition-colors">
              {
                PROJECTS[
                  (PROJECTS.findIndex((p) => p.id === project.id) + 1) %
                    PROJECTS.length
                ].title
              }
            </h3>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
