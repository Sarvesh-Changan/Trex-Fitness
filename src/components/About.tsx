/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import LucideIcon, { IconType } from "./LucideIcon";

interface AboutFeature {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

const features: AboutFeature[] = [
  {
    title: "Modern Gym Equipment",
    description: "Premium selection of high-end biomechanically accurate direct-load plate machines & barbell setups.",
    icon: "Dumbbell",
    color: "from-brand-primary to-brand-secondary",
  },
  {
    title: "Certified Trainers",
    description: "Our accredited coaches specialize in form correction, posture alignments, and progress tracking.",
    icon: "Award",
    color: "from-brand-secondary to-[#FF9000]",
  },
  {
    title: "Personal Training",
    description: "Bespoke fitness blueprints designed around your unique body composition and weight goals.",
    icon: "UserCheck",
    color: "from-[#00E5FF] to-brand-primary",
  },
  {
    title: "Nutrition Guidance",
    description: "Sustained meal blueprints and vitamin recommendations mapped by in-house nutritionists.",
    icon: "Apple",
    color: "from-[#00FF87] to-[#60EFFF]",
  },
  {
    title: "Spa Services",
    description: "Refresh and restore after heavy performance workouts with our custom-built post-workout steam sauna rooms.",
    icon: "Sparkles",
    color: "from-[#FF007A] to-brand-primary",
  },
  {
    title: "Massage Therapy",
    description: "Release persistent tension and trigger lactic acid recovery with highly trained deep-tissue massagers.",
    icon: "Sparkles",
    color: "from-brand-primary to-[#00E5FF]",
  },
  {
    title: "Weight Training",
    description: "Spacious heavy-lifting zone fully optimized with high-density shock absorbing rubber flooring.",
    icon: "Dumbbell",
    color: "from-brand-secondary to-brand-primary",
  },
  {
    title: "Cardio Zone",
    description: "High-tech treadmills, smart climbs, and cross-trainers paired with personal visual entertainments.",
    icon: "Activity",
    color: "from-[#00E5FF] to-brand-secondary",
  },
  {
    title: "Functional Training",
    description: "Custom turf zone structured with battle ropes, agility ladders, speed ladders, and plyo box platforms.",
    icon: "Flame",
    color: "from-brand-primary to-brand-secondary",
  },
  {
    title: "Aerobics",
    description: "High-level interactive community classes pulsing with intense musical beats and group power routines.",
    icon: "Music",
    color: "from-brand-secondary to-[#00E5FF]",
  },
  {
    title: "Supportive Community",
    description: "A collaborative, welcoming, and empowering space of like-minded fitness enthusiasts helping you grow.",
    icon: "Heart",
    color: "from-brand-primary to-[#FF7A00]",
  },
  {
    title: "Clean & Hygienic Environment",
    description: "Strict sanitation protocols with medical-grade air-purifiers and constant hourly machine deep cleaning.",
    icon: "ShieldCheck",
    color: "from-[#00E5FF] to-[#00FF87]",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-[#050507] via-[#0B0B0E] to-[#050507] overflow-hidden"
    >
      {/* Dynamic Background Glow Effect */}
      <div className="absolute top-[30%] left-[-10%] w-[60%] h-[40%] rounded-full bg-brand-primary/5 blur-[180px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[40%] rounded-full bg-[#FFB000]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* About Intro Header block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 text-left">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-black text-brand-primary uppercase tracking-[0.2em] italic">
              // DISCOVER THE FACTORY
            </span>
            <h2 className="mt-4 font-sans font-black text-4xl sm:text-5xl lg:text-6xl italic uppercase tracking-tighter text-white leading-none">
              THE ULTIMATE <br />
              FITNESS DESTINATION <br />
              <span className="text-brand-primary">
                IN KALWA, THANE
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-lg text-white/80 font-light leading-relaxed">
              At **T-Rex Fitness Factory**, we believe fitness is about building resilience, character, and absolute power. Across multiple levels of sprawling high-end industrial layouts in Kalwa, we have forged the ultimate environment for peak physical conditioning. 
            </p>
            <p className="mt-4 font-sans text-sm text-white/50 leading-relaxed">
              We stand apart as a premiere training facility combining the rugged grit of heavy strength athletics with the modern comforts of a five-star luxury fitness spa. Whether you are correcting posture, building core muscle, shedding stubborn weight, or recovering energy, T-Rex is where transformation happens.
            </p>
          </div>
        </div>

        {/* Feature Grid with Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white/5 p-6 border border-white/10 hover:border-brand-primary/50 backdrop-blur-sm transition-all duration-300 rounded-none"
            >
              {/* Colored Indicator Tag */}
              <div className="absolute top-4 right-4 text-white/20 font-mono text-xs font-black group-hover:text-brand-primary/40 transition-colors">
                {(index + 1).toString().padStart(2, "0")}
              </div>
              
              {/* Icon Container */}
              <div className="w-10 h-10 bg-brand-primary/10 flex items-center justify-center p-2 text-brand-primary mb-6 skew-x-[-5deg] border border-brand-primary/30 group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                <LucideIcon name={feat.icon} size={20} />
              </div>

              {/* Title & Description */}
              <h3 className="font-sans font-black text-white text-md uppercase tracking-wide group-hover:text-brand-primary transition-colors duration-200">
                {feat.title}
              </h3>
              <p className="mt-3 font-sans text-xs text-white/60 font-light leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
