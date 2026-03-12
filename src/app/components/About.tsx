import React from "react";
import { motion } from "motion/react";
import heroImg from "../../assets/hero.jpg";

export function About() {
  return (
    <div className="min-h-screen bg-white pt-8 pb-20 px-6 sm:px-10 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-[1800px] relative flex flex-col items-center">
        {/* Hero Section with Overlapping Text and Image */}
        <div className="relative w-full flex flex-col items-center justify-center py-10 lg:py-20">
          {/* "ABOUT" Text */}
          <h1 className="absolute left-0 top-0 lg:top-10 font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[#6951ff] text-[12vw] lg:text-[250px] leading-none tracking-tighter select-none z-0">
            ABOUT
          </h1>

          {/* Main Image */}
          <div className="relative z-10 w-full max-w-[700px] aspect-[3/4] overflow-hidden shadow-2xl mt-10 md:mt-20 lg:mt-32">
            <img
              src={heroImg}
              alt="Susanna Capacchione"
              className="w-full h-full object-cover"
            />
          </div>

          {/* "ME" Text */}
          <h1 className="absolute right-0 bottom-1/4 lg:bottom-1/3 font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[#6951ff] text-[12vw] lg:text-[250px] leading-none tracking-tighter select-none z-20">
            ME
          </h1>
        </div>

        {/* Biography Text Content */}
        <div className="max-w-[600px] w-full space-y-8">
          <p className="font-['Inter',sans-serif] text-lg leading-relaxed text-black tracking-tight">
            I’m Susanna, I’m Italian and I don’t like tomatoes. I like to think
            of myself as a curious and creative person. I like to constantly
            learn, and if I’m passionate about something, I’ll go ballistic
            about it.
          </p>
          <p className="font-['Inter',sans-serif] text-lg leading-relaxed text-black tracking-tight">
            I like to create clean interfaces and pleasant aesthetics.
          </p>
        </div>
      </div>
    </div>
  );
}
