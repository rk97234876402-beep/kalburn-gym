import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { galleryItems, GalleryItem } from "../data";
import { Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Equipment",
    "Workout",
    "Members",
    "Cardio Area",
    "Strength Area",
    "Transformation"
  ];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 bg-zinc-950/40 border-b border-zinc-950 overflow-hidden">
      {/* Lights background */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-mono tracking-widest text-red-500 uppercase mb-3">VISUAL TOUR</p>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
            GYM <span className="text-red-500">GALLERY</span>
          </h2>
          <div className="h-1 w-16 bg-red-600 mx-auto mt-4" />
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl mx-auto">
            Take a visual tour inside Kalburn Gym's luxury training center and witness real people getting real results.
          </p>
        </div>

        {/* Filter Buttons Navigation bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border backdrop-blur-md ${
                activeFilter === category
                  ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-950/30"
                  : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Container with dynamic layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 aspect-[4/3] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Details revealed on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-red-600/20 border border-white/10 text-[9px] font-mono tracking-widest text-red-500 uppercase mb-2">
                    <Sparkles className="h-2.5 w-2.5 animate-pulse" />
                    <span>{item.category}</span>
                  </span>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-400 font-mono mt-1">
                    KALBURN ATHLETICS © 2026
                  </p>
                </div>

                {/* Corner border decorative elements */}
                <div className="absolute inset-3 border border-red-600/0 group-hover:border-red-600/10 rounded-xl transition-colors pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
