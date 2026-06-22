/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Lose Weight / Shed Fat",
    service: "Weight Training",
    membership: "Advanced Plan",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verify basic phone and name parameters
    if (!formData.name || !formData.phone) {
      alert("Please supply your Name and Phone Number to construct your WhatsApp enquiry.");
      return;
    }

    // Build the specific message layout requested by the prompt
    const textMessage = `Hello T-Rex Fitness Factory,

I would like to know more about joining your gym.

Name: ${formData.name}
Phone: ${formData.phone}
Fitness Goal: ${formData.goal}
Preferred Service: ${formData.service}
Membership: ${formData.membership}
Message: ${formData.message || "None specified"}

Please contact me.`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/919930206551?text=${encodedMessage}`;

    // Open WhatsApp link
    window.open(whatsappUrl, "_blank");
    setFormSubmitted(true);
  };

  const handleOpenMaps = () => {
    window.open("https://maps.google.com/?q=T-Rex+Fitness+Factory+Milestone+Corporate+Park+Kharegaon+Thane+West", "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#0B0B0E]"
    >
      <div className="absolute top-[30%] left-[-15%] w-[50%] h-[50%] bg-brand-primary/5 blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 animate-pulse-glow">
          <span className="font-mono text-xs font-black text-[#00E5FF] tracking-[0.2em] uppercase">// ENQUIRY PORTAL</span>
          <h2 className="mt-4 font-sans font-black text-4xl sm:text-5xl lg:text-3xl xl:text-6xl italic uppercase tracking-tighter text-white leading-none">
            CONNECT WITH <br />
            <span className="text-brand-primary">THE GYM FACTORY</span>
          </h2>
        </div>

        {/* Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel - Gym Details */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-12">
            
            {/* Main info card */}
            <div className="bg-white/5 border border-white/10 p-8 space-y-6 rounded-none shadow-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-brand-primary/10 flex items-center justify-center font-black text-brand-primary border border-brand-primary/20">
                  <span className="text-sm">TR</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-sans font-black text-white text-lg uppercase tracking-wider">
                    T-Rex Fitness Factory
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">
                    Premium Athletic Workspace
                  </span>
                </div>
              </div>

              {/* Address details */}
              <div className="flex gap-4 items-start border-t border-white/10 pt-6">
                <div className="text-brand-primary shrink-0 mt-1">
                  <LucideIcon name="MapPin" size={18} />
                </div>
                <div className="font-sans text-white/70 text-sm leading-relaxed">
                  <span className="font-bold text-white block mb-1">Thane Location</span>
                  3rd & 4th Floor, Milestone Corporate Park,<br /> 
                  Dutta Wadi, Old Pune Road,<br /> 
                  Kharegaon, Thane West,<br /> 
                  Maharashtra, India
                </div>
              </div>

              {/* Phone details */}
              <div className="flex gap-4 items-start border-t border-white/10 pt-6">
                <div className="text-[#00E5FF] shrink-0 mt-1">
                  <LucideIcon name="Phone" size={18} />
                </div>
                <div className="font-sans text-white/70 text-sm leading-relaxed">
                  <span className="font-bold text-white block mb-1">Direct Contacts</span>
                  Phone: <a href="tel:+919930206551" className="hover:text-brand-primary transition-colors">+91 99302 06551</a>
                </div>
              </div>

              {/* Quick links buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={handleOpenMaps}
                  className="flex items-center gap-2 px-5 py-3 rounded-none bg-white/5 hover:bg-brand-primary hover:text-black border border-white/15 text-white font-sans font-black text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer"
                >
                  <LucideIcon name="ExternalLink" size={12} />
                  Google Maps
                </button>
                <a
                  href="https://wa.me/919930206551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-none bg-[#25D366]/10 hover:bg-[#25D366] hover:text-black border border-[#25D366]/20 hover:border-[#25D366] text-[#25D366] font-sans font-black text-xs uppercase tracking-widest transition-colors duration-300"
                >
                  <LucideIcon name="MessageSquare" size={12} />
                  Direct WhatsApp
                </a>
              </div>
            </div>

            {/* Operating Times details */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-none shadow-none">
              <h4 className="font-sans font-black text-white text-md uppercase tracking-wider mb-6 flex items-center gap-2">
                <LucideIcon name="Clock" size={16} className="text-brand-secondary" />
                Working Hours
              </h4>
              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white/50">Monday–Saturday</span>
                  <span className="font-bold text-white uppercase font-mono text-xs">5:30 AM – 11:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Sunday</span>
                  <span className="font-bold text-brand-secondary uppercase font-mono text-xs">8:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right panel - Form Enquiry */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white/5 rounded-none border border-white/10 p-8 sm:p-12 shadow-none relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-primary/5 to-transparent pointer-events-none" />
            
            <h3 className="font-sans font-black text-white text-2xl uppercase tracking-tighter italic">
              SEND ENQUIRY FORM
            </h3>
            <p className="font-sans text-xs text-white/50 mb-8 font-light">
              Fill in your details below. Clicking submit will automatically generate your personalized WhatsApp message to send our team in one tap.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full name input */}
              <div className="flex flex-col">
                <label htmlFor="name-input" className="font-mono text-[9px] uppercase text-white/50 tracking-widest mb-2 font-black">
                  Your Full Name *
                </label>
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Sarvesh Changan"
                  className="bg-black/60 border border-white/15 rounded-none px-4 py-3.5 text-white text-sm font-sans placeholder-white/20 focus:outline-none focus:border-brand-primary focus:ring-0 transition-colors duration-200"
                />
              </div>

              {/* Phone number input */}
              <div className="flex flex-col">
                <label htmlFor="phone-input" className="font-mono text-[9px] uppercase text-white/50 tracking-widest mb-2 font-black">
                  Active Phone Number *
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g. +91 99302 XXXXX"
                  className="bg-black/60 border border-white/15 rounded-none px-4 py-3.5 text-white text-sm font-sans placeholder-white/20 focus:outline-none focus:border-[#00E5FF] focus:ring-0 transition-colors duration-200"
                />
              </div>

              {/* Goal & Department drop inputs in row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Fitness Goal selection details */}
                <div className="flex flex-col">
                  <label htmlFor="goal-select" className="font-mono text-[9px] uppercase text-white/50 tracking-widest mb-2 font-black">
                    Primary Fitness Goal
                  </label>
                  <select
                    id="goal-select"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="bg-black/80 border border-white/15 rounded-none px-4 py-3.5 text-white text-sm font-sans focus:outline-none focus:border-brand-primary transition-colors duration-200"
                  >
                    <option value="Lose Weight / Shed Fat">Lose Weight / Shed Fat</option>
                    <option value="Build Strength / Lean Muscle">Build Strength / Lean Muscle</option>
                    <option value="General Health / Cardio Upkeep">General Health / Cardio Upkeep</option>
                    <option value="Body Transformation Programs">Body Recomposition / Body Transformation</option>
                    <option value="Advanced Powerlifting">Advanced Strength Powerlifting</option>
                  </select>
                </div>

                {/* Preferred service dropdown */}
                <div className="flex flex-col">
                  <label htmlFor="service-select" className="font-mono text-[9px] uppercase text-white/50 tracking-widest mb-2 font-black">
                    Preferred Service
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-black/80 border border-white/15 rounded-none px-4 py-3.5 text-white text-sm font-sans focus:outline-none focus:border-brand-primary transition-colors duration-200"
                  >
                    <option value="Weight Training">Weight Training floor</option>
                    <option value="Cardio Training">Cardio Core Zone</option>
                    <option value="Functional Training">Functional Turf Zone</option>
                    <option value="Personal Training">Personal Trainer (1-on-1)</option>
                    <option value="Aerobics or Sauna Spas">Sauna / Spa & Massage Room</option>
                  </select>
                </div>

              </div>

              {/* Target Membership type selection */}
              <div className="flex flex-col">
                <label htmlFor="membership-select" className="font-mono text-[9px] uppercase text-white/50 tracking-widest mb-2 font-black">
                  Intended Membership Tier
                </label>
                <select
                  id="membership-select"
                  name="membership"
                  value={formData.membership}
                  onChange={handleChange}
                  className="bg-black/80 border border-white/15 rounded-none px-4 py-3.5 text-white text-sm font-sans focus:outline-none focus:border-brand-primary transition-colors duration-200"
                >
                  <option value="Starter Plan">Starter Plan (Beginner Basic)</option>
                  <option value="Advanced Plan">Advanced Plan (Recommended Value)</option>
                  <option value="Personal Training Package">Personal Training Package (1-on-1 Specialist)</option>
                  <option value="VIP Membership Plan">VIP Membership Plan (Elite Saunas and classes)</option>
                </select>
              </div>

              {/* Optional custom message textarea */}
              <div className="flex flex-col">
                <label htmlFor="message-textarea" className="font-mono text-[9px] uppercase text-white/50 tracking-widest mb-2 font-black">
                  Additional Notes or Questions
                </label>
                <textarea
                  id="message-textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about previous injuries, preferred workout schedule, or membership questions..."
                  className="bg-black/60 border border-white/15 rounded-none px-4 py-3.5 text-white text-sm font-sans placeholder-white/20 focus:outline-none focus:border-brand-primary transition-colors duration-200 resize-none"
                />
              </div>

              {/* Button Submission Trigger */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] text-black font-sans font-black text-xs uppercase tracking-widest rounded-none transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 text-[12px]"
                >
                  <LucideIcon name="MessageSquare" size={16} />
                  SEND ENQUIRY ON WHATSAPP
                </button>
              </div>

              {/* Feedback Success panel */}
              {formSubmitted && (
                <p className="text-center font-sans text-xs text-[#25D366] animate-pulse">
                  ✓ Form processed! Your WhatsApp redirect should be open. Check your messaging tab!
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
