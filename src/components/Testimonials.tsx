/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";
import { Testimonial } from "../types";

const googleReviews: Testimonial[] = [
  {
    id: "r1",
    name: "Smit Surve",
    role: "Regular Member / Fitness Enthusiast",
    rating: 5,
    text: "Trex Gym is a great place for fitness enthusiasts. The equipment is well-maintained, trainers are supportive, and the atmosphere is motivating. Excellent value for money.",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "r2",
    name: "Rudra Gawde",
    role: "Strength Lifter / Weight Trainer",
    rating: 5,
    text: "One of the best gyms to train. The environment pushes you to perform your best every day. Great trainers and excellent equipment.",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: "r3",
    name: "Bhagyshri Karewad",
    role: "Beginner / Muscle Expansion Gym Goer",
    rating: 5,
    text: "As a beginner I received excellent guidance from trainers for form correction, nutrition, and muscle gain. Highly recommended.",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=150",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev < googleReviews.length - 1 ? prev + 1 : 0));
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualSelect = (idx: number) => {
    setCurrentIndex(idx);
    resetTimer(); // resets timeout on press
  };

  return (
    <section
      id="reviews"
      className="relative py-24 bg-[#0B0B0E]"
    >
      <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-[#00E5FF]/5 blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-pulse-glow">
          <span className="font-mono text-xs font-black text-brand-primary tracking-[0.2em] uppercase">// WHAT THE COMMUNITY CLAIMS</span>
          <h2 className="mt-4 font-sans font-black text-4xl sm:text-5xl lg:text-3xl xl:text-6xl italic uppercase tracking-tighter text-white leading-none">
            REVIEWS & CO-ATHLETES <br />
            <span className="text-[#FFB000]">TESTIMONIAL STORIES</span>
          </h2>
        </div>

        {/* Big Social Proof stats banner */}
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 rounded-none shadow-none">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-brand-primary/10 flex items-center justify-center font-black text-brand-primary border border-brand-primary/30 select-none rounded-none">
              <span className="text-xl">4.6</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#FFB000]">
                <LucideIcon name="Star" size={16} />
                <LucideIcon name="Star" size={16} />
                <LucideIcon name="Star" size={16} />
                <LucideIcon name="Star" size={16} />
                <LucideIcon name="Star" size={16} />
              </div>
              <span className="font-sans font-black text-white text-sm mt-1.5 uppercase tracking-wide">
                310 Verified Google Reviews
              </span>
            </div>
          </div>
          <a
            href="https://maps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 hover:border-brand-primary bg-white/5 hover:bg-brand-primary hover:text-black font-sans font-black text-xs uppercase tracking-widest rounded-none transition-colors duration-300"
          >
            Review us on Google Maps
          </a>
        </div>

        {/* Dynamic Sliderview */}
        <div className="max-w-4xl mx-auto relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={googleReviews[currentIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 p-8 sm:p-12 shadow-none rounded-none relative"
            >
              {/* Giant quote mark back overlay */}
              <div className="absolute top-6 right-8 font-sans font-black text-9xl text-white/5 select-none leading-none pointer-events-none">
                “
              </div>

              {/* Rating stars */}
              <div className="flex items-center gap-1 text-[#FFB000] mb-6">
                {Array.from({ length: googleReviews[currentIndex].rating }).map((_, i) => (
                  <span key={i} className="inline-flex">
                    <LucideIcon name="Star" size={16} />
                  </span>
                ))}
              </div>

              {/* Feedback Text */}
              <p className="font-sans text-white/90 text-lg sm:text-xl font-light italic leading-relaxed">
                "{googleReviews[currentIndex].text}"
              </p>

              {/* Author and Profile */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={googleReviews[currentIndex].image}
                  alt={googleReviews[currentIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-none object-cover border border-brand-primary/40 shadow-none"
                />
                <div className="flex flex-col">
                  <span className="font-sans font-black text-white text-md uppercase tracking-wide">
                    {googleReviews[currentIndex].name}
                  </span>
                  <span className="font-mono text-[10px] text-white/50 tracking-widest mt-0.5 uppercase">
                    {googleReviews[currentIndex].role} — {googleReviews[currentIndex].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controllers */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {googleReviews.map((rev, idx) => (
              <button
                key={rev.id}
                onClick={() => handleManualSelect(idx)}
                className={`w-2.5 h-2.5 rounded-none transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "bg-brand-primary w-6"
                    : "bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Show user slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
