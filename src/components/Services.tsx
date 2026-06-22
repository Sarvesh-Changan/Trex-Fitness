/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Service } from "../types";
import LucideIcon from "./LucideIcon";

const gymServices: Service[] = [
  {
    id: "weight",
    title: "Weight Training",
    description: "Forge strength on our heavy-lifting floors fully optimized for muscle hypertrophy and pure physical power.",
    features: ["Imported Loading Pins", "Dumbbells up to 100 lbs", "Competition Power Cages", "Bumper Plates"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    iconName: "Dumbbell"
  },
  {
    id: "cardio",
    title: "Cardio Training",
    description: "Build exceptional lung capacity and burn calories inside our designated high-end aerobic zone.",
    features: ["Smart interactive treadmills", "Magnetic indoor spin bikes", "Air bikes & rowers", "StairMasters"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    iconName: "Activity"
  },
  {
    id: "functional",
    title: "Functional Training",
    description: "Enhance athletic performance, coordination, stamina, and agility in our custom rubberized playground.",
    features: ["Kettlebell racks", "TRX Suspension straps", "Heavy battle ropes", "Plyometric jump steps"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
    iconName: "Flame"
  },
  {
    id: "pt",
    title: "Personal Training",
    description: "Accelerate your results with customized target planning and expert form modifications from Kalwa's finest.",
    features: ["1-on-1 direct coaching", "Custom progress charts", "Posture correction therapy", "Strength testing"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    iconName: "UserCheck"
  },
  {
    id: "nutrition",
    title: "Nutrition Consulting",
    description: "Maximize effort at the dinner table. Learn optimal macronutrient balancing and personalized eating tips.",
    features: ["Individual metabolic rates", "Weekly body measurements", "Supplements breakdowns", "Grocery guidance"],
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
    iconName: "Apple"
  },
  {
    id: "aerobics",
    title: "Aerobics",
    description: "Ignite active energy levels and dynamic fat loss inside our air-conditioned group cardio theater.",
    features: ["Energetic musical charts", "Choreographed dance steps", "High calories-burn rate", "Supportive energy"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
    iconName: "Music"
  },
  {
    id: "massage",
    title: "Massage Therapy",
    description: "Revitalize targeted core muscle regions through specialized deep-tissue sports massage sessions.",
    features: ["Decompress stiff fibers", "Lactic acid drainage", "Certified recovery therapists", "Relaxing ambience"],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
    iconName: "Sparkles"
  },
  {
    id: "spa",
    title: "Spa Services",
    description: "Cleanse body toxins and pamper yourself after heavy active workouts in our modern steam bath and sauna zones.",
    features: ["High-pressure steams", "Therapeutic dry sauna", "Unisex luxury showers", "Total mind wellness"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    iconName: "Sparkles"
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-[#050507]"
    >
      {/* Background decoration */}
      <div className="absolute right-[-10%] top-1/2 w-[50%] h-[50%] rounded-full bg-[#00E5FF]/5 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-pulse-glow">
          <span className="font-mono text-xs font-black text-[#00E5FF] tracking-[0.2em] uppercase">// SERVICES TO TRANSFORM YOU</span>
          <h2 className="mt-4 font-sans font-black text-4xl sm:text-5xl lg:text-6xl italic uppercase tracking-tighter text-white leading-none">
            CHAMPION LEVEL <br />
            <span className="text-brand-primary">TRAINING DEPARTMENTS</span>
          </h2>
          <p className="mt-6 font-sans text-white/70 font-light text-md sm:text-lg">
            Every square foot of T-Rex Fitness Factory Kalwa is optimized with premium resources to propel your training, recovery, and lifestyle standards forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gymServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 backdrop-blur-sm flex flex-col h-full transition-all duration-300 rounded-none shadow-none"
            >
              {/* Card Image Container */}
              <div className="relative h-48 overflow-hidden rounded-none">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent" />
                
                {/* Floating Service Icon */}
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-brand-primary flex items-center justify-center text-black border border-white/10 skew-x-[-10deg] group-hover:skew-x-0 transition-transform duration-300 rounded-none">
                  <LucideIcon name={service.iconName} size={18} />
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-sans font-black text-white text-lg uppercase tracking-wider group-hover:text-[#00E5FF] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="mt-3 font-sans text-xs text-white/60 font-light leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features Bullet List */}
                <ul className="mt-6 space-y-2 border-t border-white/10 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-sans text-xs text-white/70">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-none" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
