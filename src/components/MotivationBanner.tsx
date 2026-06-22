/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function MotivationBanner() {
  const handleStart = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 bg-[#050507] overflow-hidden text-center">
      {/* Background with Glow Highlights */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-r from-[#FF4D00]/15 to-[#FFB000]/10 blur-[150px] pointer-events-none animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Banner Tag */}
        <span className="font-mono text-xs font-black text-[#FFB000] tracking-[0.2em] uppercase block mb-4">
          // CRUSH YOUR LIMITS TODAY
        </span>

        {/* Heading */}
        <h2 className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl italic uppercase tracking-tighter text-white leading-none">
          NO EXCUSES. <br />
          <span className="text-brand-primary">
            ONLY RESULTS.
          </span>
        </h2>

        {/* Call to action */}
        <p className="mt-6 font-sans text-white/70 font-light text-md sm:text-lg max-w-lg mx-auto">
          Tomorrow is too late. The iron never lies. Join T-Rex Fitness Factory Kalwa and build the strength that defines you.
        </p>

        <div className="mt-10">
          <button
            onClick={handleStart}
            className="group px-10 py-5 bg-brand-primary text-black font-sans font-black text-xs uppercase tracking-widest rounded-none transition-colors duration-300 inline-flex items-center gap-3 cursor-pointer"
          >
            Start Today
            <LucideIcon name="ChevronRight" size={14} className="transform group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
