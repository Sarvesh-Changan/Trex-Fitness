/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Membership from "./components/Membership";
import SuccessStories from "./components/SuccessStories";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import MotivationBanner from "./components/MotivationBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingControls from "./components/FloatingControls";

export default function App() {
  // Sync client-side page configurations on start
  useEffect(() => {
    document.title = "T-Rex Fitness Factory Kalwa | Premium Gym in Thane";
    
    // Smooth scroll event overrides if any
    const handleLocationHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    
    window.addEventListener("hashchange", handleLocationHash);
    return () => window.removeEventListener("hashchange", handleLocationHash);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050507] text-white selection:bg-brand-primary selection:text-white overflow-hidden font-sans antialiased">
      {/* Ambient Background Glows from Immersive UI */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#FF4D00] rounded-full blur-[150px] opacity-[0.08] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-100px] w-[600px] h-[600px] bg-[#00E5FF] rounded-full blur-[180px] opacity-[0.07] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] bg-[#FFB000] rounded-full blur-[150px] opacity-[0.04] pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#FF4D00] rounded-full blur-[150px] opacity-[0.06] pointer-events-none z-0" />

      {/* Background cinematic noise overlay */}
      <div className="absolute inset-0 bg-[#050507] mix-blend-overlay pointer-events-none opacity-[0.03] z-50 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Membership />
        <SuccessStories />
        <Gallery />
        <Testimonials />
        <MotivationBanner />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Sticky Widgets (WhatsApp, Phone Call, Back To Top) */}
      <FloatingControls />
    </div>
  );
}
