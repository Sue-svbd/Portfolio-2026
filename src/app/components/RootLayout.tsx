import React, { useState, useEffect, useLayoutEffect } from "react";
import { Outlet, Link, useLocation, useOutlet } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

// Preload critical assets
import chrome51 from "../../assets/chrome51.svg";
import cube6 from "../../assets/Cube6_Transparent.svg";
import group134 from "../../assets/Group_134.svg";
import group13k from "../../assets/Group_13k.svg";
import s56 from "../../assets/s56_1.svg";
import heroImg from "../../assets/hero.jpg";

const PRELOAD_IMAGES = [chrome51, cube6, group134, group13k, s56, heroImg];

const ROLES = [
  "/VISUAL DESIGNER ",
  "/INDEPENDENT CREATIVE",
  "/THINKER",
  "/PROBLEM SOLVER",
  "/MUSIC LOVER",
];

function TypingRoles() {
  const [displayLines, setDisplayLines] = useState<string[]>([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const line = ROLES[lineIndex];
    if (!line) return;

    const isEndOfLine = charIndex === line.length;
    const delay = isEndOfLine ? 400 : 40;

    const id = setTimeout(() => {
      if (charIndex < line.length) {
        setDisplayLines((prev) => {
          const next = [...prev];
          next[lineIndex] = (next[lineIndex] ?? "") + line[charIndex];
          return next;
        });
        setCharIndex((prev) => prev + 1);
      } else if (lineIndex < ROLES.length - 1) {
        setDisplayLines((prev) => [...prev, ""]);
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, delay);

    return () => clearTimeout(id);
  }, [charIndex, lineIndex]);

  return (
    <>
      {displayLines.map((text, i) => (
        <p
          key={i}
          className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px] text-black tracking-[0.0105px] whitespace-pre"
        >
          {text}
        </p>
      ))}
    </>
  );
}

export function RootLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const isHome = location.pathname === "/";
  const skipCurtain = location.state?.skipCurtain;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Preload images once on mount
  useEffect(() => {
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Use layout effect for instant scroll reset
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: "ABOUT", path: "/about" },
    { name: "WORK", path: "/work" },
    { name: "PROCESS", path: "/process" },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col overflow-x-hidden relative">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] px-8 py-6 transition-colors duration-300 ${
          isHome ? "bg-transparent" : "bg-white/90 backdrop-blur-sm border-b border-black/5"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <Link
              to="/"
              className="font-['Inter:Regular',sans-serif] text-[20px] tracking-tight hover:opacity-70 transition-opacity uppercase"
            >
              SUSANNA CAPACCHIONE
            </Link>
            {isHome && <TypingRoles />}
          </div>

          <div className="flex items-center gap-8 lg:gap-16">
            {!isHome && (
              <div className="hidden md:flex items-center gap-8 lg:gap-12">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`font-['Inter',sans-serif] text-[14px] font-medium tracking-[1.25px] transition-all duration-300 hover:opacity-100 ${
                        isActive ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      [ {item.name} ]
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Desktop Contact Button */}
            <a
              href="mailto:susannacapacchione@gmail.com"
              className="hidden md:flex items-center gap-2 text-[14px] font-medium tracking-[0.55px] border border-black px-6 py-2.5 hover:bg-black hover:text-white transition-all duration-300 group"
            >
              CONTACT <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden items-center justify-center border border-black p-2.5 hover:bg-black hover:text-white transition-all duration-300 z-[101]"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-[90] md:hidden pt-32 px-8"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-['Zalando_Sans_Expanded',sans-serif] text-5xl font-bold tracking-tighter uppercase ${
                      isActive ? "text-[#6951ff]" : "text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="mt-8 pt-8 border-t border-black/10">
                <a
                  href="mailto:susannacapacchione@gmail.com"
                  className="font-['Inter',sans-serif] text-sm tracking-widest font-bold uppercase opacity-50 hover:opacity-100 transition-opacity"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with Integrated Curtain */}
      <main className={`flex-1 relative ${!isHome ? 'pt-[100px]' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            className="w-full relative"
          >
            {/* Page Content */}
            <motion.div
              initial={skipCurtain ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={skipCurtain ? { opacity: 1 } : { opacity: 0 }}
              transition={{ 
                duration: skipCurtain ? 0 : 0.3, 
                delay: skipCurtain ? 0 : 0.3 
              }}
              className="w-full min-h-screen"
            >
              {outlet}
            </motion.div>

            {/* The Curtain Layer - Only render if NOT skipping */}
            {!skipCurtain && (
              <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ originY: 0 }}
                className="fixed inset-0 bg-[#6951ff] z-[9999] pointer-events-none"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-black/10">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center text-sm opacity-50">
          <p>© 2026 SUSANNA CAPACCHIONE. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest">AVAILABLE FOR COLLABORATION</p>
        </div>
      </footer>
    </div>
  );
}
