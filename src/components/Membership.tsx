/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  gradient: string;
}

const pricingPlans: Plan[] = [
  {
    id: "3-months",
    name: "3 Months Membership",
    price: "₹3,000",
    period: "Quarterly Devotion",
    description: "Ignite your fitness spark. Ideal for building solid training habits and physical consistency.",
    features: [
      "Access to all loaded powerlifting racks",
      "Direct entry to high-speed Cardio zones",
      "Impeccable locker and steam shower rooms",
      "1 Onboarding orientation session with a trainer",
      "High-speed Wi-Fi & facility lounge",
    ],
    gradient: "from-white/5 to-transparent",
  },
  {
    id: "1-year",
    name: "1 Year Membership",
    price: "₹9,000",
    period: "Annual Commitment",
    description: "The gold standard of athletic development. Total body restructuring and elite conditioning.",
    popular: true,
    badge: "BEST VALUE",
    features: [
      "Unlimited 365-day all-areas club accession",
      "2 Dedicated 1-on-1 certified coaching sessions",
      "Bi-weekly cellular BMI & stats tracker review",
      "Premium customized Macro dietary suggestions",
      "5 Complimentary single-day guest passes",
      "Exclusive T-Rex high-performance member kit",
    ],
    gradient: "from-brand-primary/20 via-brand-secondary/5 to-transparent",
  },
  {
    id: "6-months",
    name: "6 Months Membership",
    price: "₹5,000",
    period: "Mid-Year Progress",
    description: "Lock in serious performance habits. Highly recommended for sustainable posture and structural gains.",
    features: [
      "All 3-Month level gym benefits included",
      "1 Free personal coaching sessions",
      "Monthly BMI body stats composition tracking",
      "Definitive posture & form safety diagnostics",
      "2 Complimentary single-day guest passes",
    ],
    gradient: "from-brand-secondary/20 via-white/5 to-transparent",
  },
];

export default function Membership() {
  const handleJoinNow = (planName: string, price: string) => {
    const formattedMessage = encodeURIComponent(
      `Hello T-Rex Fitness Factory Kalwa,\n\nI want to join the gym with the *${planName}* (Price: ${price}).\n\nPlease let me know the payment options and how I can begin registration.\n\nThank you!`
    );
    window.open(`https://wa.me/919930206551?text=${formattedMessage}`, "_blank");
  };

  return (
    <section
      id="membership"
      className="relative py-24 bg-gradient-to-b from-[#050507] via-[#0B0B0E] to-[#050507] overflow-hidden"
    >
      {/* Dynamic Glow Circles */}
      <div className="absolute top-[20%] left-[-15%] w-[60%] h-[50%] bg-[#FF4D00]/5 blur-[220px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[50%] h-[50%] bg-[#00E5FF]/5 blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-pulse-glow">
          <span className="font-mono text-xs font-black text-[#FFB000] tracking-[0.2em] uppercase">// MEMBERSHIP PROGRAMS</span>
          <h2 className="mt-4 font-sans font-black text-4xl sm:text-5xl lg:text-3xl xl:text-6xl italic uppercase tracking-tighter text-white leading-none">
            CHOOSE YOUR LAYER <br />
            <span className="text-brand-primary">OF PERFORMANCE</span>
          </h2>
          <p className="mt-6 font-sans text-white/70 font-light text-md sm:text-lg">
            Invest in yourself. Select a curated membership tier crafted to help you push boundaries, build real strength, and sustain active physical focus.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white/5 border flex flex-col h-full transition-all duration-350 rounded-none shadow-none hover:-translate-y-2 ${
                plan.popular
                  ? "border-brand-primary shadow-[0_10px_35px_rgba(255,77,0,0.12)] lg:scale-[1.03] z-10"
                  : "border-white/10 hover:border-white/25 hover:shadow-[0_10px_30px_rgba(255,255,255,0.02)]"
              }`}
            >
              {/* Top Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${plan.gradient} opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-35`} />

              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-brand-primary text-black font-mono text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-none z-20">
                  {plan.badge}
                </div>
              )}

              {/* Card Header */}
              <div className="p-8 pb-4 relative z-10">
                <span className="text-brand-highlight font-sans font-black text-[10px] uppercase tracking-[0.2em] block mb-2">
                  {plan.period}
                </span>
                <h3 className="font-sans font-black text-white text-xl uppercase tracking-wider group-hover:text-brand-primary transition-colors duration-200">
                  {plan.name}
                </h3>
                <p className="mt-2 font-sans text-xs text-white/50 leading-relaxed min-h-[32px]">
                  {plan.description}
                </p>

                {/* Pricing / CTA trigger line */}
                <div className="mt-6">
                  <span className="font-sans font-black text-3xl sm:text-4xl text-white block uppercase tracking-tighter leading-none">
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* Card Divider */}
              <div className="border-t border-white/10 mx-8 my-1" />

              {/* Card Features List */}
              <div className="p-8 pt-4 flex-grow relative z-10">
                <ul className="space-y-4">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-brand-primary rounded-none mt-1.5 flex-shrink-0" />
                      <span className="font-sans text-xs text-white/70 font-light leading-snug">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-8 pt-0 relative z-10">
                <button
                  onClick={() => handleJoinNow(plan.name, plan.price)}
                  className={`w-full py-4 font-sans font-black text-xs uppercase tracking-widest transition-colors duration-300 rounded-none cursor-pointer ${
                    plan.popular
                      ? "bg-brand-primary text-black hover:bg-brand-secondary"
                      : "bg-white/5 text-white border border-white/20 hover:border-brand-primary hover:bg-white/10"
                  }`}
                >
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Subtext Call To Action */}
        <div className="mt-16 text-center">
          <p className="font-sans text-md text-[#D9D9D9]">
            🔥 <span className="font-bold">Exclusive offers are waiting for you in Kalwa.</span> Visit the gym or contact us today for standard seasonal discounts and custom group gym rates.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-brand-primary hover:text-brand-secondary border-b border-dashed border-brand-primary hover:border-brand-secondary pb-1 tracking-widest transition-all duration-300"
            >
              Get Gym Directions & Direct Inquiry Form
              <LucideIcon name="ExternalLink" size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
