import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Flame, ArrowRight, Calendar, Users, Award } from "lucide-react";
import { heroBgImage, stats, motivationQuotes } from "../data";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Rotate a motivational psychology quote in the hero corner every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % motivationQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Kalburn Gym Elite Luxury Interior"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* Glowing frosted glass theme background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-red-950/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 flex flex-col justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Typography & Copy */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Top Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-red-600/10 border border-red-500/20 rounded-full px-4 py-1.5 text-xs font-semibold text-red-500 tracking-wider uppercase font-mono"
            >
              <Flame className="h-4 w-4 animate-pulse" />
              <span>THE ULTIMATE FITNESS TEMPLE</span>
            </motion.div>

            {/* Main Punchy Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tighter text-white uppercase leading-none"
            >
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-white">Body.</span> <br />
              Transform Your <span className="text-red-500">Life.</span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-zinc-300 font-sans font-medium tracking-wide max-w-2xl"
            >
              Your strongest version starts today.
            </motion.p>

            {/* Value Bullet Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400 font-sans font-medium"
            >
              <span className="flex items-center space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>Professional Trainers</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>Modern Equipment</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>Affordable Membership</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>Friendly Environment</span>
              </span>
            </motion.div>

            {/* Call to Actions (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={onJoinClick}
                id="hero-join-now-btn"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-red-600 hover:text-white text-black font-sans font-extrabold uppercase tracking-widest text-sm rounded-xl shadow-lg shadow-red-600/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group"
              >
                <Flame className="h-5 w-5 mr-2 animate-pulse text-red-500 group-hover:text-white transition-colors" />
                Join Now
              </button>

              <button
                onClick={() => scrollToSection("membership")}
                id="hero-membership-btn"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 backdrop-blur-md hover:bg-white/10 text-white font-sans font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group"
              >
                How to Join
                <ArrowRight className="h-4 w-4 ml-2 text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </div>

          {/* Psychological Quote Panel & Live Counter */}
          <div className="lg:col-span-4 space-y-6">
            {/* Live Rotator Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-3 text-[10px] text-red-500/50 font-mono tracking-widest uppercase">
                MOTIVATION
              </div>
              <p className="text-zinc-500 text-xs font-mono tracking-wider uppercase mb-2">Psychology Focus</p>
              <div className="h-16 flex items-center">
                <p className="text-white font-sans font-semibold text-lg italic leading-snug tracking-wide">
                  "{motivationQuotes[quoteIndex]}"
                </p>
              </div>
              <div className="mt-4 flex space-x-1.5 justify-start">
                {motivationQuotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setQuoteIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      quoteIndex === i ? "w-6 bg-red-500" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Mini Trust Badge */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center space-x-4">
              <div className="p-3 bg-red-600/10 text-red-500 rounded-xl border border-red-500/10">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Kareli's Luxury Gym</p>
                <p className="text-xs text-zinc-400">#1 Top Rated Fitness Center in Prayagraj</p>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Statistics counter dashboard row */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="absolute -right-4 -bottom-4 text-7xl font-sans font-black text-zinc-900/10 pointer-events-none group-hover:text-red-500/5 transition-all">
                  {stat.value.replace("+", "")}
                </div>
                <p className="text-3xl md:text-4xl font-sans font-black text-white tracking-tight group-hover:text-red-500 transition-colors">
                  {stat.value}
                </p>
                <p className="text-xs text-zinc-400 font-mono tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator Mouse */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none hidden sm:flex">
        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">SCROLL DOWN</span>
        <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-red-500 rounded-full"
          />
        </div>
      </div>

    </section>
  );
}
