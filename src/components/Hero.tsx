/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

// Custom Counter Hook for high-performance animation without extra packages
function useAnimatedCounter(target: number, duration: number = 2000, decimals: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.min(Math.abs(Math.floor(totalMiliseconds / end)), 30);
    
    const timer = setInterval(() => {
      start += end / (totalMiliseconds / incrementTime);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  if (decimals > 0) {
    return count.toFixed(decimals);
  }
  return Math.floor(count);
}

export default function Hero() {
  const reviewsCount = useAnimatedCounter(310, 2500);
  const ratingCount = useAnimatedCounter(4.6, 2000, 1);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050507]"
    >
      {/* Background Cinematic Image with Glow Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="T-Rex Gym Interior Workout"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 object-center scale-105 filter brightness-95 transform motion-safe:animate-[pulseGlow_12s_ease-in-out_infinite]"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/90 via-[#050507]/50 to-[#050507]/90" />
        
        {/* Deep Red / Orange Interactive Ambient Glows */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-primary/10 blur-[150px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-1%] w-[40%] h-[40%] rounded-full bg-brand-highlight/5 blur-[150px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Subtle Accent Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-3.5 py-1.5 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#FFB000] uppercase">
              THE POWERHOUSE OF KALWA, THANE
            </span>
          </motion.div>

          {/* Large Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-black text-[56px] sm:text-8xl xl:text-[110px] leading-[0.88] italic uppercase tracking-tighter text-white select-none whitespace-nowrap"
          >
            UNLEASH
            <br />
            <span className="text-brand-primary">YOUR</span>
            <br />
            POWER.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 font-sans text-white/70 text-lg sm:text-xl font-light leading-relaxed max-w-xl"
          >
            Premium fitness. Professional trainers. Modern equipment. Real transformation. Forge an iron physique at Kalwa's leading fitness academy.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-[#FFB000] duration-300 rounded-none cursor-pointer"
            >
              Book Free Trial
              <span className="w-5 h-[2px] bg-black group-hover:w-8 transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleScrollTo("#membership")}
              className="px-8 py-4 border border-white/20 hover:border-brand-primary hover:bg-white/5 text-white font-black uppercase text-xs tracking-widest rounded-none transition-colors duration-300"
            >
              View Programs
            </button>
          </motion.div>

          {/* Social Proof Counters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 w-full grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white">
                {reviewsCount}+
              </span>
              <span className="font-sans text-xs text-[#D9D9D9] mt-1">Google Reviews</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#00E5FF] flex items-center gap-1 text-glow-cyan">
                {ratingCount}<span>★</span>
              </span>
              <span className="font-sans text-xs text-[#D9D9D9] mt-1">Google Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FFB000]">
                Daily
              </span>
              <span className="font-sans text-xs text-[#D9D9D9] mt-1">5:30 AM - 11 PM</span>
            </div>
          </motion.div>
        </div>

        {/* Categories / Badges Right Area */}
        <div className="lg:col-span-5 relative flex items-center justify-center h-full min-h-[380px]">
          {/* Central Circular Neon Frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute w-72 h-72 sm:w-85 sm:h-85 rounded-full border border-dashed border-brand-primary/40 flex items-center justify-center animate-[spin_50s_linear_infinite]"
          >
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-double border-[#00E5FF]/20" />
          </motion.div>

          {/* Floating Category Badges */}
          <div className="relative w-full h-full flex flex-col gap-5 max-w-md">
            {/* Weight Training */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-5 border border-white/10 hover:border-brand-primary/50 cursor-pointer group transition-all duration-300 transform rounded-none"
            >
              <div className="text-brand-primary font-mono text-2xl font-black italic tracking-tighter leading-none select-none">
                01
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-white text-sm uppercase tracking-wider group-hover:text-brand-primary transition-colors">Weight Training</span>
                <span className="font-sans text-white/50 text-xs mt-1">Heavy barbells, dumbbells & elite plate-loaded machines.</span>
              </div>
            </motion.div>

            {/* Cardio Training */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-5 border border-white/10 hover:border-brand-highlight/50 cursor-pointer group transition-all duration-300 transform rounded-none"
            >
              <div className="text-[#00E5FF] font-mono text-2xl font-black italic tracking-tighter leading-none select-none">
                02
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-white text-sm uppercase tracking-wider group-hover:text-[#00E5FF] transition-colors">Cardio Zone</span>
                <span className="font-sans text-white/50 text-xs mt-1">State-of-the-art high-performance treadmills, spin cycles & elliptical trainers.</span>
              </div>
            </motion.div>

            {/* Functional Training */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-5 border border-white/10 hover:border-brand-secondary/50 cursor-pointer group transition-all duration-300 transform rounded-none"
            >
              <div className="text-brand-secondary font-mono text-2xl font-black italic tracking-tighter leading-none select-none">
                03
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-white text-sm uppercase tracking-wider group-hover:text-brand-secondary transition-colors">Functional Training</span>
                <span className="font-sans text-white/50 text-xs mt-1">Dynamic zone with battle ropes, TRX bands, and kettlebell circuits.</span>
              </div>
            </motion.div>

            {/* Personal Personal Trainer */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-5 border border-white/10 hover:border-brand-primary/50 cursor-pointer group transition-all duration-300 transform rounded-none"
            >
              <div className="text-brand-primary font-mono text-2xl font-black italic tracking-tighter leading-none select-none">
                04
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-white text-sm uppercase tracking-wider group-hover:text-brand-primary transition-colors">Personal Coaching</span>
                <span className="font-sans text-white/50 text-xs mt-1">Certified 1-on-1 performance physical instruction and diet alignment.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
