/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";
import { GalleryItem } from "../types";

const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "interior", label: "Gym Interior" },
  { id: "weight", label: "Weight Area" },
  { id: "cardio", label: "Cardio Zone" },
  { id: "functional", label: "Functional Training" },
  { id: "personal", label: "Personal Training" },
  { id: "members", label: "Members" },
  { id: "events", label: "Events" },
] as const;

const initialGallery: GalleryItem[] = [
  {
    id: "g1",
    category: "interior",
    title: "Primary Strength Floor",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "g2",
    category: "weight",
    title: "Competition Power Lifting Cages",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "g3",
    category: "cardio",
    title: "Smart Curved HIIT Treadmills",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "g4",
    category: "functional",
    title: "High-Intensity Turf & Kettlebells",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "g5",
    category: "personal",
    title: "1-on-1 Deadlift Form Evaluation",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "g6",
    category: "members",
    title: "Midday Stamina Sprint Routines",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "g7",
    category: "events",
    title: "Annual T-Rex Lifting Showdown",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "g8",
    category: "interior",
    title: "Steam Sauna & Recovery Bath",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<typeof galleryCategories[number]["id"]>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = initialGallery.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      className="relative py-24 bg-gradient-to-b from-[#050507] via-[#0B0B0E] to-[#050507]"
    >
      <div className="absolute top-[10%] left-[-15%] w-[50%] h-[50%] bg-[#FF4D00]/5 blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-pulse-glow">
          <span className="font-mono text-xs font-black text-brand-primary tracking-[0.2em] uppercase">// THE FACTORY FLOORS</span>
          <h2 className="mt-4 font-sans font-black text-4xl sm:text-5xl lg:text-3xl xl:text-6xl italic uppercase tracking-tighter text-white leading-none">
            INSIDE T-REX <br />
            <span className="text-[#FFB000]">FITNESS GALLERY</span>
          </h2>
          <p className="mt-6 font-sans text-white/70 font-light text-md sm:text-lg">
            A visual inspection of our state-of-the-art facilities, modern direct-load weights setup, intensive cardio decks, and our supportive training community.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-none font-sans font-black text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-brand-primary text-black"
                  : "bg-white/5 text-white/60 border border-white/10 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-72 rounded-none overflow-hidden cursor-pointer border border-white/10 hover:border-brand-primary/50 bg-black"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Cover Content */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#00E5FF] font-black">
                    {item.category}
                  </span>
                  <h3 className="font-sans font-black text-white text-lg mt-1 uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* View Action Accent */}
                  <div className="flex items-center gap-1.5 mt-3 font-mono text-[10px] uppercase font-bold text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Inspect Photo</span>
                    <LucideIcon name="ExternalLink" size={10} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal Component */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-none bg-white/5 hover:bg-white/15 text-white border border-white/10 z-50 transition-colors duration-200"
              aria-label="Close Lightbox"
            >
              <LucideIcon name="X" size={24} />
            </button>

            {/* Left navigation click */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-none bg-white/5 hover:bg-white/15 text-white border border-white/10 z-50 transition-colors duration-200"
              aria-label="Previous Image"
            >
              <LucideIcon name="ChevronLeft" size={24} />
            </button>

            {/* Main Lightbox Frame */}
            <div className="relative max-w-5xl w-full max-h-[75vh] flex items-center justify-center z-10">
              <motion.img
                key={filteredItems[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-none border border-white/10 shadow-2xl"
              />
            </div>

            {/* Description Text bar bottom */}
            <div className="mt-6 text-center select-all shrink-0">
              <span className="font-mono text-[10px] tracking-widest text-[#00E5FF] uppercase font-bold">
                Category: {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="font-sans font-black text-white text-xl sm:text-2xl mt-1 uppercase tracking-wide">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-white/45 text-xs mt-2 font-mono">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>

            {/* Right navigation click */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-none bg-white/5 hover:bg-white/15 text-white border border-white/10 z-50 transition-colors duration-200"
              aria-label="Next Image"
            >
              <LucideIcon name="ChevronRight" size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
