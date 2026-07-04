import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, Award, ShieldAlert, HeartPulse, Sparkles, ClipboardCheck } from "lucide-react";
import { aboutTrainingImage, aboutFeatures } from "../data";

interface AboutProps {
  onJoinClick: () => void;
}

export default function About({ onJoinClick }: AboutProps) {
  // Map our feature names to appropriate visual icons
  const getIcon = (title: string) => {
    switch (title) {
      case "Modern Machines":
        return <ClipboardCheck className="h-6 w-6 text-red-500" />;
      case "Certified Trainers":
        return <Award className="h-6 w-6 text-red-500" />;
      case "Friendly Environment":
        return <Sparkles className="h-6 w-6 text-red-500" />;
      case "Affordable Plans":
        return <HeartPulse className="h-6 w-6 text-red-500" />;
      case "Separate Workout Area":
        return <CheckCircle2 className="h-6 w-6 text-red-500" />;
      case "Clean Environment":
        return <ShieldAlert className="h-6 w-6 text-red-500" />;
      default:
        return <CheckCircle2 className="h-6 w-6 text-red-500" />;
    }
  };

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono tracking-widest text-red-500 uppercase mb-3">WHO WE ARE</p>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
            KARELI'S ULTIMATE <span className="text-red-500">FITNESS SANCTUARY</span>
          </h2>
          <div className="h-1 w-16 bg-red-600 mx-auto mt-4" />
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl mx-auto">
            At Kalburn Gym, we don't just provide equipment—we forge a premium space for physical, mental, and lifestyle transformations.
          </p>
        </div>

        {/* Double Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Media Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src={aboutTrainingImage}
                  alt="Personal Training Session at Kalburn Gym"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                    <p className="text-xs font-mono text-zinc-300 font-bold tracking-widest uppercase">
                      LIMITLESS POTENTIAL AWAITS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Behind Background Frame Accent */}
            <div className="absolute -inset-2 rounded-2xl border border-red-600/20 -rotate-2 pointer-events-none z-0 scale-98" />
            <div className="absolute -inset-4 rounded-2xl border border-white/5 rotate-2 pointer-events-none z-0 scale-95" />
          </div>

          {/* Right Column: Copy & Feature Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-white uppercase tracking-tight leading-snug">
                Why thousands choose to <span className="text-red-500">evolve with us</span>
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We believe fitness is not an expense—it is an investment in your lifespan and focus. Kalburn Gym blends cutting-edge equipment with a premium community to make sure every workout counts.
              </p>
            </div>

            {/* Features Subgrid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all group flex items-start space-x-4"
                >
                  <div className="p-3 bg-red-600/20 text-red-500 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {getIcon(feature.title)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini Quote & Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-500 italic font-medium">
                "Stop wishing. Start training." — Your strongest version starts today.
              </p>
              <button
                onClick={onJoinClick}
                id="about-cta-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-sans font-bold uppercase tracking-wider text-xs rounded-lg transition-colors"
              >
                CLAIM FREE TRIAL PASS
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
