import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroImg from "../../assets/hero.jpg";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const aboutX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const meX = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white pt-8 pb-20 px-6 sm:px-10 overflow-hidden flex flex-col items-center"
    >
      <div className="w-full max-w-[1800px] relative flex flex-col items-center">
        {/* Hero Section with Overlapping Text and Image */}
        <div className="relative w-full flex flex-col items-center justify-center py-10 lg:py-20">
          {/* "ABOUT" Text */}
          <motion.h1
            style={{ x: aboutX }}
            className="absolute left-0 top-0 lg:top-10 font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[#6951ff] text-[12vw] lg:text-[250px] leading-none tracking-tighter select-none z-0"
          >
            ABOUT
          </motion.h1>

          {/* Main Image */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative z-10 w-full max-w-[700px] aspect-[3/4] overflow-hidden shadow-2xl mt-10 md:mt-20 lg:mt-32"
          >
            <img
              src={heroImg}
              alt="Susanna Capacchione"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* "ME" Text */}
          <motion.h1
            style={{ x: meX }}
            className="absolute right-0 bottom-1/4 lg:bottom-1/3 font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[#6951ff] text-[12vw] lg:text-[250px] leading-none tracking-tighter select-none z-20"
          >
            ME
          </motion.h1>
        </div>

        {/* Biography Text Content */}
        <div className="max-w-[600px] w-full space-y-8 mt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            className="font-['Inter',sans-serif] text-xs leading-relaxed text-black tracking-tight uppercase"
          >
            I’m Susanna, I’m Italian and I don’t like tomatoes. I like to think
            of myself as a curious and creative person. I like to constantly
            learn, and if I’m passionate about something, I’ll go ballistic
            about it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-['Inter',sans-serif] text-xs leading-relaxed text-black tracking-tight uppercase"
          >
            I like to create clean interfaces and pleasant aesthetics.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
