/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";
import { MemberStory } from "../types";

const stories: MemberStory[] = [
  {
    id: "abhishek",
    name: "Abhishek Mane",
    duration: "6 Months",
    achievement: "Absolute weight-loss overhaul coupled with lean hypertrophy focus.",
    weightLoss: "18 Kg Shed",
    muscleGain: "+4.5 Kg Muscle",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600&sat=-100&brightness=60",
    afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&sat=20&contrast=110",
  },
  {
    id: "sneha",
    name: "Sneha Patil",
    duration: "4 Months",
    achievement: "Body recomposition, athletic agility enhancement, and core firming.",
    weightLoss: "11 Kg Shed",
    muscleGain: "+2.1 Kg Pure Tone",
    beforeImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600&sat=-100&brightness=60",
    afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600&sat=20&contrast=110",
  },
];

interface ComparisonSliderProps {
  beforeImg: string;
  afterImg: string;
  name: string;
}

function ComparisonSlider({ beforeImg, afterImg, name }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);

  const handleUpdate = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleUpdate(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleUpdate(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-80 sm:h-96 overflow-hidden select-none cursor-ew-resize border border-white/10 rounded-none"
    >
      {/* Before Image (Background) */}
      <img
        src={beforeImg}
        alt={`${name} Before`}
        referrerPolicy="no-referrer"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-white/10 px-2 py-0.5 rounded-none font-mono text-[9px] uppercase tracking-widest text-[#FFB000] z-20">
        Before
      </div>

      {/* After Image (Overlaid, clipped to slider position) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden transition-all duration-75"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img
          src={afterImg}
          alt={`${name} After`}
          referrerPolicy="no-referrer"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
        />
        <div className="absolute top-4 right-4 bg-brand-primary backdrop-blur border border-white/10 px-2 py-0.5 rounded-none font-mono text-[9px] uppercase tracking-widest text-black font-black z-20">
          After
        </div>
      </div>

      {/* Slider Bar Separator line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-none bg-black border border-[#00E5FF] flex items-center justify-center text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.7)]">
          <LucideIcon name="ChevronLeft" size={10} className="mr-0.5" />
          <LucideIcon name="ChevronRight" size={10} className="ml-0.5" />
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  return (
    <section
      id="stories"
      className="relative py-24 bg-[#050507]"
    >
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] bg-[#FF4D00]/5 blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-pulse-glow">
          <span className="font-mono text-xs font-black text-[#00E5FF] tracking-[0.2em] uppercase">// EVIDENCE OF EXCELLENCE</span>
          <h2 className="mt-4 font-sans font-black text-4xl sm:text-5xl lg:text-3xl xl:text-6xl italic uppercase tracking-tighter text-white leading-none">
            REAL KALWA <br />
            <span className="text-brand-primary">SUCCESS BLUEPRINTS</span>
          </h2>
          <p className="mt-6 font-sans text-white/70 font-light text-md sm:text-lg">
            No empty claims. These are real results achieved on our training floors by local Kalwa members through hard training and customized programs.
          </p>
        </div>

        {/* Stories Listing */}
        <div className="space-y-16">
          {stories.map((story, idx) => (
            <div
              key={story.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-16 ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Slider left/right */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <ComparisonSlider
                  beforeImg={story.beforeImg}
                  afterImg={story.afterImg}
                  name={story.name}
                />
              </div>

              {/* Text / Achievements panel */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="font-mono text-xs font-black text-brand-primary uppercase tracking-[0.2em] italic">
                  ACTIVE CASE RECORD
                </span>
                <h3 className="mt-2 font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tighter leading-none italic">
                  {story.name}
                </h3>
                <p className="mt-1 font-sans text-xs text-brand-secondary uppercase tracking-widest font-bold">
                  Timeline: {story.duration} Routine
                </p>

                <p className="mt-6 font-sans text-white/80 font-light text-md leading-relaxed">
                  {story.achievement}
                </p>

                {/* Stat cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {story.weightLoss && (
                    <div className="bg-white/5 p-4 border border-white/10 rounded-none">
                      <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase block leading-none">
                        Weight Loss
                      </span>
                      <span className="font-sans font-black text-[#00E5FF] text-xl block mt-2 uppercase tracking-tighter leading-none">
                        {story.weightLoss}
                      </span>
                    </div>
                  )}
                  {story.muscleGain && (
                    <div className="bg-white/5 p-4 border border-white/10 rounded-none">
                      <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase block leading-none">
                        Active Gain
                      </span>
                      <span className="font-sans font-black text-brand-primary text-xl block mt-2 uppercase tracking-tighter leading-none">
                        {story.muscleGain}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-white hover:text-brand-primary transition-colors tracking-widest"
                  >
                    Start Your Custom Transformation Map
                    <LucideIcon name="ExternalLink" size={14} className="text-brand-primary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
