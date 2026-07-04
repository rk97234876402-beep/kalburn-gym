import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scale, Activity, ArrowRight, RotateCcw } from "lucide-react";

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [advice, setAdvice] = useState<string>("");

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters

    if (w > 0 && h > 0) {
      const calculatedBmi = w / (h * h);
      const roundedBmi = Math.round(calculatedBmi * 10) / 10;
      setBmi(roundedBmi);

      // Determine category and advice
      if (roundedBmi < 18.5) {
        setCategory("Underweight");
        setAdvice("Focus on lean mass gains. Incorporate high-hypertrophy strength training paired with a clean, high-protein caloric surplus diet. Our 'Muscle Gain' service is perfect for you!");
      } else if (roundedBmi >= 18.5 && roundedBmi < 24.9) {
        setCategory("Normal / Fit");
        setAdvice("Incredible! You are in the optimal health zone. Maintain your stellar composition through consistent functional lifts and progressive cardio circuits at Kalburn Gym.");
      } else if (roundedBmi >= 25 && roundedBmi < 29.9) {
        setCategory("Overweight");
        setAdvice("Prioritize high-intensity fat-loss. Integrate daily caloric deficits with our specialized HIIT workout protocols, Cardio tracks, and custom dietitian guidelines.");
      } else {
        setCategory("Obese");
        setAdvice("Time for immediate transformation. Combine personalized clinical coaching with consistent beginner programs, steady-state cardio, and guided lifestyle updates.");
      }
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
    setAdvice("");
  };

  // Get indicator placement percentage on progress bar
  const getBmiPercentage = (bmiVal: number) => {
    if (bmiVal < 15) return 0;
    if (bmiVal > 40) return 100;
    return ((bmiVal - 15) / (40 - 15)) * 100;
  };

  return (
    <section id="bmi-calculator" className="relative py-24 bg-zinc-950/40 border-b border-zinc-950 overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-80 w-80 rounded-full bg-red-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono tracking-widest text-red-500 uppercase mb-3">FITNESS TOOLS</p>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
            INSTANT <span className="text-red-500">BMI CALCULATOR</span>
          </h2>
          <div className="h-1 w-16 bg-red-600 mx-auto mt-4" />
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl mx-auto">
            Body Mass Index (BMI) is a rapid and highly reliable metric to analyze your physical weight category. Calculate yours instantly below.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Input Form Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-white">
                <Activity className="h-6 w-6 text-red-500 animate-pulse" />
                <h3 className="text-lg font-bold uppercase tracking-wider">Calculate Your BMI</h3>
              </div>

              <form onSubmit={calculateBmi} className="space-y-5">
                {/* Weight Input */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="bmi-weight" className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
                    Weight (kg)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="bmi-weight"
                      min="30"
                      max="250"
                      step="any"
                      required
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 75"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 transition-colors text-sm font-semibold"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-500 font-mono">KG</span>
                  </div>
                </div>

                {/* Height Input */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="bmi-height" className="text-xs text-zinc-400 uppercase tracking-widest font-mono">
                    Height (cm)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="bmi-height"
                      min="100"
                      max="250"
                      required
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g. 175"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 transition-colors text-sm font-semibold"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-500 font-mono">CM</span>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex space-x-3 pt-2">
                  <button
                    type="submit"
                    id="bmi-calc-submit-btn"
                    className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-sans font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>Calculate Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={resetCalculator}
                    id="bmi-calc-reset-btn"
                    className="px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white rounded-xl transition-colors flex items-center justify-center"
                    title="Reset Form"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Results Column */}
            <div className="h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {bmi !== null ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6 text-left relative overflow-hidden"
                  >
                    {/* Tiny neon flare */}
                    <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-red-600/5 blur-xl pointer-events-none" />

                    <div>
                      <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase">YOUR RESULTS</p>
                      <div className="flex items-baseline space-x-3 mt-2">
                        <span className="text-5xl font-sans font-black text-white tracking-tighter">{bmi}</span>
                        <span className="text-sm text-red-500 font-bold uppercase tracking-widest">{category}</span>
                      </div>
                    </div>

                    {/* Progress Slider Bar */}
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-zinc-800 rounded-full relative overflow-visible">
                        {/* Status brackets color stops */}
                        <div className="absolute inset-y-0 left-0 w-[14%] bg-sky-500 rounded-l-full" /> {/* Underweight */}
                        <div className="absolute inset-y-0 left-[14%] w-[26%] bg-emerald-500" /> {/* Normal */}
                        <div className="absolute inset-y-0 left-[40%] w-[20%] bg-yellow-500" /> {/* Overweight */}
                        <div className="absolute inset-y-0 left-[60%] w-[40%] bg-red-600 rounded-r-full" /> {/* Obese */}

                        {/* Floating Pointer indicator marker */}
                        <motion.div
                          initial={{ left: 0 }}
                          animate={{ left: `${getBmiPercentage(bmi)}%` }}
                          transition={{ type: "spring", stiffness: 100, damping: 15 }}
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-5 w-5 rounded-full border-2 border-white bg-black shadow-lg flex items-center justify-center z-10"
                        >
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                        </motion.div>
                      </div>

                      {/* Color labels description bar */}
                      <div className="flex justify-between text-[8px] font-mono tracking-wider text-zinc-500 uppercase pt-1">
                        <span>Underweight</span>
                        <span>Normal</span>
                        <span>Overweight</span>
                        <span>Obese</span>
                      </div>
                    </div>

                    {/* Advice card */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans font-medium">
                        {advice}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center py-10 text-center space-y-3 text-zinc-500 border border-white/10 border-dashed rounded-2xl bg-white/5">
                    <Scale className="h-12 w-12 text-zinc-700 animate-bounce" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-zinc-400">Ready to analyze</p>
                      <p className="text-xs max-w-xs mx-auto mt-1 text-zinc-600">
                        Enter your metric weight and height on the left and trigger calculation.
                      </p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
