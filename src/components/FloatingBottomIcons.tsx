import React from "react";
import { motion } from "motion/react";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { gymDetails } from "../data";

export default function FloatingBottomIcons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3.5 pointer-events-auto">
      
      {/* Location Navigation Trigger */}
      <motion.a
        href={gymDetails.googleMapsLink}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.15, y: -2 }}
        className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-red-500 border border-white/10 shadow-xl flex items-center justify-center cursor-pointer transition-colors group relative backdrop-blur-md"
        title="Open Location on Google Maps"
        id="floating-map-btn"
      >
        <MapPin className="h-5 w-5 animate-pulse" />
        {/* Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-black/80 text-[10px] font-sans font-bold tracking-widest text-zinc-300 uppercase opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none whitespace-nowrap backdrop-blur-sm">
          Open Maps
        </span>
      </motion.a>

      {/* Direct Phone Dial */}
      <motion.a
        href={`tel:${gymDetails.phone}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.15, y: -2 }}
        className="p-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl flex items-center justify-center cursor-pointer group relative"
        title="Call Gym Desk"
        id="floating-call-btn"
      >
        <Phone className="h-5 w-5" />
        {/* Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-black/80 text-[10px] font-sans font-bold tracking-widest text-zinc-300 uppercase opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none whitespace-nowrap backdrop-blur-sm">
          Call Now
        </span>
      </motion.a>

      {/* WhatsApp Chat Direct */}
      <motion.a
        href={gymDetails.whatsappLink}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.15, y: -2 }}
        className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center justify-center cursor-pointer group relative"
        title="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="h-5 w-5" />
        {/* Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-black/80 text-[10px] font-sans font-bold tracking-widest text-zinc-300 uppercase opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none whitespace-nowrap backdrop-blur-sm">
          WhatsApp Chat
        </span>
      </motion.a>

    </div>
  );
}
