import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
      <div className="max-w-md text-center space-y-12">
        <h1 className="font-['Zalando_Sans_Expanded',sans-serif] font-bold text-[150px] leading-none tracking-tighter text-[#6951ff]">
          404
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-4xl tracking-tight">PAGE NOT FOUND</h2>
          <p className="text-lg opacity-60 max-w-[320px] mx-auto leading-relaxed">
            The link you followed may be broken, or the page may have been removed.
          </p>
        </div>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 text-sm tracking-widest border border-black px-12 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            GO BACK HOME
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
