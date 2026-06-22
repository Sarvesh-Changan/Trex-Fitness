/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LucideIcon from "./LucideIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: "ExternalLink" as const },
    { name: "WhatsApp", href: "https://wa.me/919930206551", icon: "MessageSquare" as const },
    { name: "Google", href: "https://maps.google.com", icon: "MapPin" as const },
  ];

  return (
    <footer className="bg-[#050507] border-t border-white/5 py-16 text-left">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        
        {/* Branding description col */}
        <div className="lg:col-span-4 space-y-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#home");
            }}
            className="flex items-center gap-3.5 group w-fit"
          >
            <div className="w-10 h-10 aspect-square bg-[#FF4D00] flex items-center justify-center skew-x-[-10deg] transform transition-transform duration-300">
              <span className="font-sans font-black text-xl text-black tracking-tighter">TR</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-lg tracking-tight text-white leading-none uppercase">
                T-REX <span className="text-brand-primary">FITNESS</span>
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#D9D9D9] uppercase leading-none mt-1.5">
                FACTORY KALWA
              </span>
            </div>
          </a>
          <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
            The leading luxury fitness brand and heaviest training floor in Kalwa, Thane. Our focus is centered entirely on certified coaching, hygiene guarantees, and outstanding structural transformations.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 hover:border-brand-primary bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-colors duration-200 rounded-none transform-none"
                aria-label={soc.name}
              >
                <LucideIcon name={soc.icon} size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links col */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFB000] font-black">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", href: "#home" },
              { label: "About Gym", href: "#about" },
              { label: "Gym Services", href: "#services" },
              { label: "Why Choose Us", href: "#why-us" },
              { label: "Memberships", href: "#membership" },
              { label: "Success Models", href: "#stories" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href);
                  }}
                  className="font-sans text-xs text-white/60 hover:text-brand-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services mapping quick link */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#00E5FF] font-black">
            Gym Services
          </h4>
          <ul className="space-y-2.5">
            {[
              "Weight Training",
              "Cardio Training",
              "Functional Training",
              "Personal Training",
              "Nutrition Consulting",
              "Group Aerobics",
              "Spa & Steam Saunas",
            ].map((srv) => (
              <li key={srv}>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("#services");
                  }}
                  className="font-sans text-xs text-white/100 hover:text-[#00E5FF] transition-colors duration-200"
                >
                  {srv}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address and details */}
        <div className="lg:col-span-3 space-y-4 font-sans text-xs leading-relaxed text-white/60">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white font-black">
            The Kalwa Factory
          </h4>
          <p>
            3rd & 4th Floor, Milestone Corporate Park,<br />
            Dutta Wadi, Old Pune Road, Kharegaon,<br />
            Thane West, Maharashtra - 400605
          </p>
          <div className="space-y-1">
            <span className="block text-brand-primary font-black uppercase tracking-wider text-[10px]">Phone Support:</span>
            <a href="tel:+919930206551" className="hover:underline text-white font-bold">+91 99302 06551</a>
          </div>
          <div className="space-y-1">
            <span className="block text-brand-secondary font-black uppercase tracking-wider text-[10px]">Inquiries Email:</span>
            <span className="text-white shrink-all select-all font-mono font-bold">info@trexfitnessfactory.com</span>
          </div>
        </div>

      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-[11px] text-[#A0A0A5] tracking-wide text-center sm:text-left select-none">
          © {currentYear} T-Rex Fitness Factory Kalwa. All active rights reserved. Developed to premium web standards.
        </p>
        <div className="flex gap-6 font-mono text-[9px] uppercase tracking-wider text-[#A0A0A5]">
          <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollTo("#about"); }} className="hover:text-white transition-colors">Privacy Blueprint</a>
          <span>•</span>
          <a href="#membership" onClick={(e) => { e.preventDefault(); handleScrollTo("#membership"); }} className="hover:text-white transition-colors">Membership Terms</a>
        </div>
      </div>
    </footer>
  );
}
