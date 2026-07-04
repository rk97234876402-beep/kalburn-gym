import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, MessageSquare, Flame, CheckCircle } from "lucide-react";
import { gymDetails } from "../data";

interface JoinNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinNowModal({ isOpen, onClose }: JoinNowModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-6 shadow-2xl md:p-8"
          >
            {/* Ambient Red glow background */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-modal-btn"
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 mb-4 animate-pulse">
                <Flame className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
                Begin Your Evolution
              </h3>
              <p className="text-sm text-zinc-400 mt-2">
                Stop wishing. Start training today at <span className="text-red-500 font-medium">Kalburn Gym</span>. Choose your preferred channel to connect instantly.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 mb-6">
              <a
                href={`tel:${gymDetails.phone}`}
                id="modal-call-btn"
                className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 text-white transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">Call Us Now</p>
                    <p className="text-xs text-zinc-500">{gymDetails.phoneFormatted}</p>
                  </div>
                </div>
                <div className="text-xs text-red-500 font-semibold group-hover:translate-x-1 transition-transform">
                  CALL NOW →
                </div>
              </a>

              <a
                href={gymDetails.whatsappLink}
                target="_blank"
                rel="noreferrer"
                id="modal-whatsapp-btn"
                className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/30 text-white transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">Chat on WhatsApp</p>
                    <p className="text-xs text-zinc-500">Instant Response</p>
                  </div>
                </div>
                <div className="text-xs text-emerald-500 font-semibold group-hover:translate-x-1 transition-transform">
                  CHAT NOW →
                </div>
              </a>
            </div>

            {/* Perks bullet list */}
            <div className="border-t border-white/10 pt-5 space-y-2 text-xs text-zinc-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>Free 1-day Premium trial pass activated on contact</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>Immediate 1-on-1 Fitness Assessment consultation</span>
              </div>
            </div>

            {/* Motivation Quote footer */}
            <div className="mt-6 text-center text-[10px] tracking-widest text-zinc-600 font-mono uppercase">
              "Your future self will thank you"
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
