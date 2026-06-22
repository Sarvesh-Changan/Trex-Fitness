/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import LucideIcon, { IconType } from "./LucideIcon";

interface Advantage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: IconType;
  accentClass: string;
  glowClass: string;
}

const advantages: Advantage[] = [
  {
    id: "reviews",
    title: "310+ Google Reviews",
    subtitle: "Highly Acclaimed",
    description: "Our community of thousands rates us an impressive 4.6 stars. Read real testimonials on fitness accomplishments and helpful coaching standards.",
    iconName: "Star",
    accentClass: "text-[#FFB000] bg-[#FFB000]/10 border-[#FFB000]/30",
    glowClass: "group-hover:border-[#FFB000]/40 group-hover:shadow-[0_0_20px_rgba(255,176,0,0.15)]",
  },
  {
    id: "coaches",
    title: "Expert Trainers",
    subtitle: "Qualified Support",
    description: "Accredited physical trainers who understand anatomy, muscle recruitment patterns, strength principles, and optimal wellness programming.",
    iconName: "Award",
    accentClass: "text-brand-primary bg-brand-primary/10 border-brand-primary/30",
    glowClass: "group-hover:border-brand-primary/40 group-hover:shadow-[0_0_20px_rgba(255,77,0,0.15)]",
  },
  {
    id: "correction",
    title: "Form Correction",
    subtitle: "Safety First Mode",
    description: "Never lift with poor mechanics. Our trainers actively monitor gym floors to make helpful posture corrections and guard against injuries.",
    iconName: "ShieldCheck",
    accentClass: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30",
    glowClass: "group-hover:border-[#00E5FF]/40 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]",
  },
  {
    id: "machines",
    title: "Modern Machines",
    subtitle: "High-End Technology",
    description: "Work out using precision-aligned pin machines, fully loaded free weights stack, and plate-loaded gear that match natural muscular paths.",
    iconName: "Tv",
    accentClass: "text-brand-secondary bg-brand-secondary/10 border-brand-secondary/30",
    glowClass: "group-hover:border-brand-secondary/40 group-hover:shadow-[0_0_20px_rgba(255,176,0,0.15)]",
  },
  {
    id: "community",
    title: "Friendly Community",
    subtitle: "No-Judgment Atmosphere",
    description: "Surround yourself with helpful, welcoming, and driven fitness members who support each other's gains and daily persistence.",
    iconName: "Heart",
    accentClass: "text-[#FF007A] bg-[#FF007A]/10 border-[#FF007A]/35",
    glowClass: "group-hover:border-[#FF007A]/40 group-hover:shadow-[0_0_20px_rgba(255,0,122,0.15)]",
  },
  {
    id: "affordable",
    title: "Affordable Membership",
    subtitle: "Unbeatable Value",
    description: "Enjoy state-of-the-art gym infrastructure and clean amenities at highly attractive pricing packages designed around your goals.",
    iconName: "DollarSign",
    accentClass: "text-[#00FF87] bg-[#00FF87]/10 border-[#00FF87]/30",
    glowClass: "group-hover:border-[#00FF87]/40 group-hover:shadow-[0_0_20px_rgba(0,255,135,0.15)]",
  },
  {
    id: "hygiene",
    title: "Excellent Hygiene",
    subtitle: "Spotless Facilities",
    description: "Health is our utmost worry. Highly sanitised lockers, regularly wiped machinery, clean sweat clothes requirements, and dry floors.",
    iconName: "ShieldCheck",
    accentClass: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30",
    glowClass: "group-hover:border-[#00E5FF]/40 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]",
  },
  {
    id: "guidance",
    title: "Professional Guidance",
    subtitle: "All Levels Welcome",
    description: "From absolute beginners learning the basics, to veteran powerlifters and athletes seeking fine-tuned routines and recovery advice.",
    iconName: "UserCheck",
    accentClass: "text-brand-primary bg-brand-primary/10 border-brand-primary/30",
    glowClass: "group-hover:border-brand-primary/40 group-hover:shadow-[0_0_20px_rgba(255,77,0,0.15)]",
  }
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 bg-[#0B0B0E]"
    >
      {/* Background decorations */}
      <div className="absolute left-[5%] top-[10%] w-[40%] h-[40%] bg-brand-secondary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-black text-brand-primary tracking-[0.2em] uppercase">// THE T-REX ADVANTAGE</span>
            <h2 className="mt-4 font-sans font-black text-4xl sm:text-5xl lg:text-6xl italic uppercase tracking-tighter text-white leading-none">
              WHY ATHLETES <span className="text-[#FFB000]">CONVERGE HERE</span>
            </h2>
          </div>
          <div className="lg:col-span-12 xl:col-span-5 text-left xl:text-right">
            <p className="font-sans text-white/70 font-light leading-relaxed">
              We provide more than just heavy metal racks. T-Rex is built around precise workout philosophies, hygiene guarantees, and consistent individual progress.
            </p>
          </div>
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <motion.div
              key={adv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col bg-white/5 p-6 border border-white/10 hover:border-brand-primary/50 backdrop-blur-sm transition-all duration-300 rounded-none shadow-none"
            >
              {/* Header Box */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 border border-brand-primary/30 flex items-center justify-center font-bold text-brand-primary bg-brand-primary/10 skew-x-[-10deg] group-hover:skew-x-0 transition-transform duration-300 rounded-none">
                  <LucideIcon name={adv.iconName} size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase text-white/50 tracking-wider leading-none">
                    {adv.subtitle}
                  </span>
                  <h3 className="font-sans font-black text-white text-sm uppercase mt-1.5 leading-tight group-hover:text-brand-primary transition-colors duration-200">
                    {adv.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-white/60 font-light leading-relaxed flex-grow">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
