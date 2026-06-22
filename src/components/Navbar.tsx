/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Membership", href: "#membership" },
  { label: "Success Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0B0E]/85 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6"
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="flex items-center gap-3 group animate-pulse-glow"
          >
            <div className="w-10 h-10 bg-brand-primary flex items-center justify-center rounded-sm font-black text-xl skew-x-[-10deg] shadow-[0_0_25px_rgba(255,77,0,0.6)] transform group-hover:skew-x-0 transition-transform duration-300">
              <span className="font-sans font-black text-black">TR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-lg tracking-tighter text-white leading-none uppercase">
                T-REX <span className="text-brand-primary">FITNESS</span>
              </span>
              <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase leading-none mt-1">
                FACTORY KALWA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-sans text-xs font-bold text-white/70 hover:text-brand-primary transition-colors duration-200 relative py-1 group uppercase tracking-widest"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#membership"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#membership");
              }}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2 bg-brand-primary text-black font-black text-xs uppercase tracking-widest hover:bg-brand-secondary transition-colors rounded-none"
            >
              JOIN NOW
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-white/5 border border-white/10 text-[#D9D9D9] hover:text-white"
              aria-label="Toggle Menu"
            >
              <LucideIcon name={isMobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[74px] left-0 w-full z-40 bg-[#0B0B0E]/95 backdrop-blur-2xl border-b border-white/10 lg:hidden max-h-[calc(100vh-74px)] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-sans text-lg font-semibold text-[#D9D9D9] hover:text-brand-primary transition-colors duration-200 uppercase tracking-widest"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#membership"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#membership");
                }}
                className="w-full inline-flex items-center justify-center py-3 bg-brand-primary text-black font-sans font-black text-sm uppercase tracking-widest hover:bg-brand-secondary rounded-none"
              >
                JOIN NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
