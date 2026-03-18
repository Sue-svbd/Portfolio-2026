import React from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import group4 from "../../assets/Group-4.svg";

export function Home() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-center relative">
      {/* Hero Section */}
      <section className="w-full max-w-[1800px] mx-auto px-8 relative flex flex-1 items-center justify-center">
        {/* Main Layout Container - Based on Figma Frame Proportion */}
        <div className="relative w-full max-w-[1200px] aspect-[1200/600] flex items-center">
          
          {/* WORK - Left Aligned */}
          <div className="absolute left-0 top-[20%] z-20">
            <Link to="/work">
              <p className="font-['Zalando_Sans_Expanded',sans-serif] font-bold leading-[134.215px] md:text-[96px] text-[48px] text-black tracking-[-7.895px] cursor-pointer">
                WORK
              </p>
            </Link>
          </div>

          {/* Central Graphic - Scaled and Positioned */}
          <div className="absolute left-[30%] right-[30%] h-full z-10 pointer-events-none flex items-center justify-center">
            <img 
              src={group4} 
              alt="Background Graph" 
              className="h-full w-full object-contain opacity-90"
            />
          </div>

          {/* ABOUT - Top Right */}
          <div className="absolute right-0 top-0 z-20">
            <Link to="/about">
              <p className="font-['Zalando_Sans_Expanded',sans-serif] font-bold leading-[134.215px] md:text-[96px] text-[48px] text-black tracking-[-7.895px] cursor-pointer">
                ABOUT
              </p>
            </Link>
          </div>

          {/* PROCESS - Bottom Right */}
          <div className="absolute right-0 bottom-0 z-20">
            <Link to="/process">
              <p className="font-['Zalando_Sans_Expanded',sans-serif] font-bold leading-[134.215px] md:text-[64px] text-[32px] text-black tracking-[-7.895px] cursor-pointer uppercase">
                PROCESS
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Contact Button */}
      <div className="md:hidden w-full px-8 pb-4 mt-auto flex justify-center">
        <a
          href="mailto:susannacapacchione@gmail.com"
          className="flex items-center justify-center gap-2 text-[14px] font-medium tracking-[0.55px] border border-black w-[160px] py-2.5 hover:bg-black hover:text-white transition-all duration-300 group"
        >
          CONTACT{" "}
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}
