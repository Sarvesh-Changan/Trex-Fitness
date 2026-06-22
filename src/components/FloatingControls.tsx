/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function FloatingControls() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const textMessage = encodeURIComponent(
      "Hello T-Rex Fitness Factory Kalwa! I'm interested in booking a free trial workout session. Please guide me."
    );
    window.open(`https://wa.me/919930206551?text=${textMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      
      {/* Floating Buttons Group */}
      <div className="flex flex-col gap-3.5 shadow-none">
        
        {/* WhatsApp Float Trigger */}
        <button
          onClick={handleWhatsApp}
          className="group relative w-12 h-12 rounded-xl bg-transparent text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#00A884]/40"
          aria-label="Direct WhatsApp Enquiry"
        >
          {/* Continuous Red Light ambient heartbeat pulse */}
          <div className="absolute inset-0 rounded-full bg-red-600/40 blur-md animate-pulse pointer-events-none z-0" />
          
          {/* Continuous Red expanding attention-grabber ring */}
          <div className="absolute -inset-2.5 rounded-full border-2 border-red-500/60 animate-ping pointer-events-none z-0" style={{ animationDuration: "1.8s" }} />

          <LucideIcon name="WhatsApp" size={48} className="relative z-10 drop-shadow-[0_4px_12px_rgba(0,168,132,0.4)] group-hover:drop-shadow-[0_6px_20px_rgba(0,168,132,0.7)] transition-all duration-300" />
          
          {/* Live Alert flashing red indicator dot */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4 z-20">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-black shadow-lg shadow-red-500/50"></span>
          </span>

          {/* Tooltip */}
          <span className="absolute right-14 bg-black border border-white/10 px-3 py-1.5 rounded-none font-sans text-[11px] font-black uppercase text-[#00A884] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none z-30">
            WhatsApp Chat
          </span>
        </button>

        {/* Call Float Trigger */}
        <a
          href="tel:+919930206551"
          className="group relative w-12 h-12 rounded-none bg-[#00E5FF] text-black hover:text-white flex items-center justify-center border border-black/10 transition-colors duration-200"
          aria-label="Call Gym Office"
        >
          <LucideIcon name="Phone" size={20} />
          {/* Tooltip */}
          <span className="absolute right-14 bg-black border border-white/10 px-3 py-1.5 rounded-none font-sans text-[11px] font-black uppercase text-[#00E5FF] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none">
            Call Gym
          </span>
        </a>

        {/* Book Trial Float Trigger */}
        <button
          onClick={() => handleScrollTo("#contact")}
          className="group relative w-12 h-12 rounded-none bg-[#FF4D00] text-black hover:text-white flex items-center justify-center border border-black/10 transition-colors duration-200 cursor-pointer"
          aria-label="Book Free Trial Workout"
        >
          <LucideIcon name="Calendar" size={20} />
          {/* Tooltip */}
          <span className="absolute right-14 bg-black border border-white/10 px-3 py-1.5 rounded-none font-sans text-[11px] font-black uppercase text-brand-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none">
            Book Free Trial
          </span>
        </button>

      </div>

      {/* Back To Top Button details */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleScrollTo("#home")}
            className="group w-12 h-12 rounded-none bg-white/5 hover:bg-brand-primary text-[#D9D9D9] hover:text-black border border-white/10 hover:border-brand-primary flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Back To Top"
          >
            <LucideIcon name="ChevronUp" size={22} />
            <span className="absolute right-14 bg-black border border-white/10 px-3 py-1.5 rounded-none font-sans text-[11px] font-black uppercase text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none">
              Back To Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
