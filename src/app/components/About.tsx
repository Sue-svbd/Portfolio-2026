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
            className="absolute left-0 top-0 lg:top-10 font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[#6951ff] text-[24vw] lg:text-[250px] leading-none tracking-tighter select-none z-0"
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
            className="absolute right-0 bottom-1/4 lg:bottom-1/3 font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[#6951ff] text-[24vw] lg:text-[250px] leading-none tracking-tighter select-none z-20"
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
            of myself as a curious and creative person. I approach everything
            with an open mind and allow myself to explore and experiment. I'm
            skilled in design, but I can also code when needed, a nod to my days
            as a front-end developer.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-['Inter',sans-serif] text-xs leading-relaxed text-black tracking-tight uppercase"
          >
            I like to create clean interfaces and pleasant aesthetics. I'm eager
            to work with other creatives and like-minded people who are 'all in'
            when it comes to create some weird and beautiful things.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-['Inter',sans-serif] text-xs leading-relaxed text-black tracking-tight uppercase"
          >
            Sometimes I make{" "}
            <a
              href="https://soundcloud.com/zasuelich"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6951ff] underline hover:opacity-70 transition-opacity"
            >
              music
            </a>{" "}
            too.
          </motion.p>
        </div>

        <div className="text-center py-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            className="text-xs tracking-wide mb-8"
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
