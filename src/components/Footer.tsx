import React from "react";
import { Dumbbell, Phone, MapPin, Mail, MessageSquare, Flame } from "lucide-react";
import { gymDetails, navLinks } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-36 w-2/3 bg-red-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Branding Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12 mb-12">
          {/* Logo and Pitch */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-red-600 rounded">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-sans font-black tracking-tighter text-white uppercase">
                KALBURN<span className="text-red-500">GYM</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              At Kalburn Gym, we don't just provide equipment—we forge a premium sanctuary for physical, mental, and lifestyle transformations. Join Kareli's #1 top-rated fitness center.
            </p>
          </div>

          {/* Quick Stats banner */}
          <div className="md:col-span-7 flex flex-wrap gap-8 items-center md:justify-end">
            <div className="text-left">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">VISIT US</p>
              <p className="text-sm font-bold text-white mt-1">2nd Floor, Kareli</p>
              <p className="text-xs text-zinc-400 mt-0.5">Prayagraj, UP</p>
            </div>
            <div className="text-left">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">CALL DESK</p>
              <p className="text-sm font-bold text-white mt-1">
                <a href={`tel:${gymDetails.phone}`} className="hover:text-red-500 transition-colors">
                  {gymDetails.phoneFormatted}
                </a>
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">Mon–Sat, 6:30AM–9:30PM</p>
            </div>
          </div>
        </div>

        {/* Mid Grid columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-12">
          
          {/* Column 1: Explore Links */}
          <div className="md:col-span-6 text-left">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase border-b border-white/10 pb-3 mb-4">
              Explore Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-xs text-zinc-400 hover:text-red-500 transition-colors uppercase tracking-wider font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact details & Map button */}
          <div className="md:col-span-6 text-left space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase border-b border-white/10 pb-3 mb-4">
              Direct Channels
            </h4>
            
            <p className="text-xs text-zinc-400 leading-relaxed">
              Connect instantly via WhatsApp or phone. Scan locations on Maps to navigate straight to the gym reception.
            </p>

            <div className="flex flex-wrap gap-2">
              {/* Call */}
              <a
                href={`tel:${gymDetails.phone}`}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                title="Call Gym Desk"
              >
                <Phone className="h-4 w-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={gymDetails.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                title="WhatsApp Message"
              >
                <MessageSquare className="h-4 w-4" />
              </a>

              {/* Google Maps link */}
              <a
                href={gymDetails.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors flex items-center space-x-1.5"
                title="View on Google Maps"
              >
                <MapPin className="h-4 w-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider">MAPS</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[10px] tracking-wider font-mono uppercase">
          <p>
            © {currentYear} Kalburn Gym Kareli. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span>Designed in Premium Luxury Theme</span>
            <span>•</span>
            <span className="text-red-600 animate-pulse font-bold">● Live Prayagraj</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
