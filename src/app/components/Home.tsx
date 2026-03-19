import React from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import group4 from "../../assets/Group-4.svg";
import group4Mobile from "../../assets/Group-4-mobile.svg";

export function Home() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col items-center relative">
      {/* Desktop Layout */}
      <section className="hidden md:flex w-full max-w-[1800px] mx-auto px-8 relative flex-1 items-center justify-center">
        {/* Main Layout Container - Based on Figma Frame Proportion */}
        <div className="relative w-full max-w-[1200px] aspect-[1200/600] flex items-center">
          {/* WORK - Left Aligned */}
          <div className="absolute left-0 top-[20%] z-20">
            <Link to="/work">
              <p className="font-['Zalando_Sans_Expanded',sans-serif] font-bold leading-[134.215px] text-[96px] text-black tracking-[-7.895px] cursor-pointer">
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
              <p className="font-['Zalando_Sans_Expanded',sans-serif] font-bold leading-[134.215px] text-[96px] text-black tracking-[-7.895px] cursor-pointer">
                ABOUT
              </p>
            </Link>
          </div>

          {/* PROCESS - Bottom Right */}
          <div className="absolute right-0 bottom-0 z-20">
            <Link to="/process">
              <p className="font-['Zalando_Sans_Expanded',sans-serif] font-bold leading-[134.215px] text-[64px] text-black tracking-[-7.895px] cursor-pointer uppercase">
                PROCESS
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden w-full flex-1 flex flex-col relative px-4">
        {/* ABOUT - Top Right */}
        <div className="absolute right-4 top-0 z-20">
          <Link to="/about">
            <p className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[48px] text-black tracking-[-3px] cursor-pointer">
              ABOUT
            </p>
          </Link>
        </div>

        {/* Central Content Area */}
        <div className="flex-1 flex flex-col justify-center relative">
          {/* Mobile Graphic */}
          <div className="relative w-full flex justify-center mb-8">
            <img
              src={group4Mobile}
              alt="Mobile Background Graph"
              className="w-full object-contain"
              style={{
                position: "absolute",
                top: " -226px",
                left: " 40px",
              }}
            />

            {/* WORK - Overlaid on left side of graphic with exact specifications */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
              <Link to="/work">
                <p
                  className="font-['Zalando_Sans_Expanded',sans-serif] text-black cursor-pointer"
                  style={{
                    fontSize: "91px",
                    fontWeight: 600,
                    lineHeight: "134.21px",
                  }}
                >
                  WORK
                </p>
              </Link>
            </div>
          </div>

          {/* PROCESS - Below graphic */}
          <div
            className="flex justify-center"
            style={{
              position: "absolute",
              top: " 517px",
              left: "253px",
            }}
          >
            <Link to="/process">
              <p className="font-['Zalando_Sans_Expanded',sans-serif] font-semibold text-[32px] text-black tracking-[-2px] cursor-pointer uppercase">
                PROCESS
              </p>
            </Link>
          </div>
        </div>

        {/* Contact Button */}
        <div className="pb-8 flex justify-center">
          <a
            href="mailto:susannacapacchione@gmail.com"
            className="flex items-center justify-center gap-2 text-[14px] font-medium tracking-[0.55px] border border-black px-6 py-2.5 hover:bg-black hover:text-white transition-all duration-300 group"
          >
            CONTACT{" "}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {/* Footer */}
      </section>
    </div>
  );
}
