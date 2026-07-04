import React from "react";
import { motion } from "motion/react";
import {
  ShieldAlert, Wrench, CreditCard, ShieldCheck,
  ClipboardCheck, Clock, Users, Award
} from "lucide-react";
import { whyChooseUs } from "../data";

export default function WhyChooseUs() {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className="h-6 w-6 text-red-500" />;
      case "Wrench": return <Wrench className="h-6 w-6 text-red-500" />;
      case "CreditCard": return <CreditCard className="h-6 w-6 text-red-500" />;
      case "ShieldCheck": return <ShieldCheck className="h-6 w-6 text-red-500" />;
      case "ClipboardCheck": return <ClipboardCheck className="h-6 w-6 text-red-500" />;
      case "Clock": return <Clock className="h-6 w-6 text-red-500" />;
      case "Users": return <Users className="h-6 w-6 text-red-500" />;
      case "Award": return <Award className="h-6 w-6 text-red-500" />;
      default: return <Award className="h-6 w-6 text-red-500" />;
    }
  };

  return (
    <section id="why-choose-us" className="relative py-24 bg-black overflow-hidden">
      {/* Decorative light orbs */}
      <div className="absolute top-1/2 left-1/4 h-72 w-72 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono tracking-widest text-red-500 uppercase mb-3">OUR CORE DIFFERENCE</p>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
            WHY <span className="text-red-500">KALBURN GYM</span>?
          </h2>
          <div className="h-1 w-16 bg-red-600 mx-auto mt-4" />
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl mx-auto">
            We are engineered for those who seek high-performance facilities, certified coaching guidance, and an unmatched aesthetic experience.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Backlight glow on hover */}
              <div className="absolute -inset-24 bg-red-600/0 group-hover:bg-red-600/10 blur-3xl rounded-full transition-colors pointer-events-none" />

              <div>
                {/* Icon wrapper */}
                <div className="p-3 bg-red-600/20 text-red-500 rounded-xl w-fit group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {getWhyIcon(item.iconName)}
                </div>

                {/* Heading */}
                <h3 className="text-md font-bold text-white uppercase tracking-wider mt-5 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Little corner metric design */}
              <div className="mt-6 flex justify-end text-[10px] font-mono text-zinc-700 group-hover:text-red-600 transition-colors tracking-widest font-bold">
                0{i + 1} // FOCUS
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Actionpersuasion container */}
        <div className="mt-16 border border-white/10 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="text-left space-y-2">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider">
              "Don't wait for Monday. Start Today."
            </h4>
            <p className="text-xs text-zinc-400">
              The longest journey begins with a single heavy lift. Make your choice right now.
            </p>
          </div>
          <div className="flex items-center space-x-3 text-red-500 text-xs font-bold font-mono">
            <span>● CHOOSE EXCELLENCE</span>
            <span>● SHUN EXCUSES</span>
          </div>
        </div>

      </div>
    </section>
  );
}
