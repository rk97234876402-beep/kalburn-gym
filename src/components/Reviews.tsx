import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";
import { testimonials, googleRating, gymDetails } from "../data";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto scroll testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[index];

  return (
    <section id="reviews" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      {/* Lights Background */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono tracking-widest text-red-500 uppercase mb-3">TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
            WHAT OUR <span className="text-red-500">MEMBERS SAY</span>
          </h2>
          <div className="h-1 w-16 bg-red-600 mx-auto mt-4" />
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl mx-auto">
            Read first-hand accounts of power, strength, and life transformation journeys written directly by our premium members.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Testimonial Animated Slider Card */}
          <div className="lg:col-span-8 relative">
            
            {/* Massive background quote mark decoration */}
            <div className="absolute -top-12 -left-6 text-zinc-900/40 pointer-events-none">
              <Quote className="h-28 w-28 text-zinc-900/20" />
            </div>

            {/* Testimonial Active Display Card with sliding animation */}
            <div className="relative overflow-hidden min-h-[320px] sm:min-h-[260px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10 shadow-2xl flex flex-col justify-between">
              
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-6 text-left"
                >
                  {/* Star rating */}
                  <div className="flex space-x-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-medium italic">
                    "{current.comment}"
                  </p>

                  {/* Profile Metadata row */}
                  <div className="flex items-center space-x-4 pt-2 border-t border-white/10">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="h-12 w-12 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        {current.name}
                      </h4>
                      <p className="text-xs text-red-500 font-mono uppercase tracking-widest mt-0.5">
                        {current.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Action Buttons */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex space-x-2">
                <button
                  onClick={handlePrev}
                  id="testimonial-prev-btn"
                  className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  id="testimonial-next-btn"
                  className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

            </div>

            {/* Pagination Bullet Indicators */}
            <div className="flex justify-start space-x-2 mt-4 pl-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === i ? "w-8 bg-red-500" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Right Side: Trust & Google Rating Card */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden shadow-xl text-center space-y-6">
              {/* Decorative orb */}
              <div className="absolute -top-12 -right-12 h-32 w-32 bg-red-600/10 blur-2xl rounded-full pointer-events-none" />

              <div className="space-y-2">
                <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase">GOOGLE RATINGS</p>
                <div className="flex justify-center items-center space-x-1.5">
                  <span className="text-5xl font-sans font-black text-white tracking-tighter">
                    {googleRating.score}
                  </span>
                  <span className="text-xl text-zinc-500">/ 5.0</span>
                </div>
              </div>

              {/* Star render */}
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              <div className="space-y-1">
                <p className="text-sm font-bold text-white uppercase tracking-wider">
                  {googleRating.totalReviews} Verified Google Reviews
                </p>
                <p className="text-xs text-zinc-400 font-mono uppercase tracking-widest">
                  {googleRating.badgeText}
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={gymDetails.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  id="google-review-link-btn"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl border border-red-500/30 bg-red-600/20 hover:bg-red-600 text-white transition-all font-sans font-bold uppercase tracking-wider text-xs"
                >
                  <MessageSquare className="h-4 w-4 mr-2 animate-pulse" />
                  WRITE A GOOGLE REVIEW
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
