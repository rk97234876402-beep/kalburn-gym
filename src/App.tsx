import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell, Flame } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import BMICalculator from "./components/BMICalculator";
import Reviews from "./components/Reviews";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingBottomIcons from "./components/FloatingBottomIcons";
import JoinNowModal from "./components/JoinNowModal";

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a premium luxury entrance loading reveal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenJoinModal = () => setIsJoinModalOpen(true);
  const handleCloseJoinModal = () => setIsJoinModalOpen(false);

  return (
    <div className="relative bg-black text-white min-h-screen selection:bg-red-600 selection:text-white antialiased">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Loading Entrance animation */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
          >
            <div className="text-center space-y-6">
              {/* Pulsating logo ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-600 to-red-950 border border-red-500/30 shadow-2xl shadow-red-950/40 text-white"
              >
                <Dumbbell className="h-10 w-10" />
              </motion.div>
              
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-sans font-black tracking-tighter uppercase"
                >
                  KALBURN<span className="text-red-500">GYM</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] tracking-[0.25em] text-zinc-400 font-mono uppercase"
                >
                  PREMIUM FITNESS TEMPLE
                </motion.p>
              </div>

              {/* Progress Bar wireframe */}
              <div className="w-40 h-[1.5px] bg-zinc-900 rounded-full mx-auto overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-20 bg-red-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          /* Complete Assembled Luxury Website Layout */
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="scroll-smooth"
          >
            {/* Header & Sticky Nav */}
            <Navbar onJoinClick={handleOpenJoinModal} />

            {/* Core Body Sections */}
            <main>
              <Hero onJoinClick={handleOpenJoinModal} />
              
              <About onJoinClick={handleOpenJoinModal} />
              
              <WhyChooseUs />
              
              <Gallery />
              
              <BMICalculator />
              
              <Reviews />
              
              <Schedule />
              
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Interactive Bottom-Right Floating Elements */}
            <FloatingBottomIcons />

            {/* Join Popup Modal Overlay */}
            <JoinNowModal isOpen={isJoinModalOpen} onClose={handleCloseJoinModal} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
