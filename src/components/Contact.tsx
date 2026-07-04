import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Clock, Send, CheckCircle, Navigation, MessageSquare, Mail } from "lucide-react";
import { gymDetails } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Membership Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request to database/mail server
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Membership Inquiry",
        message: ""
      });
      // Clear success notification after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden border-b border-zinc-950">
      {/* Lights Background */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono tracking-widest text-red-500 uppercase mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
            CONNECT WITH <span className="text-red-500">THE TEMPLE</span>
          </h2>
          <div className="h-1 w-16 bg-red-600 mx-auto mt-4" />
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl mx-auto">
            Have any queries about pricing, programs, corporate slots, or facilities? Write to us or call our reception desk directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information & Google Maps Embed */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Contact Details Panel */}
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Gym Information</h3>

              <div className="space-y-5 text-left">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600/10 text-red-500 rounded-xl mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Phone Desk</h4>
                    <p className="text-sm text-white font-bold mt-1">
                      <a href={`tel:${gymDetails.phone}`} className="hover:text-red-500 transition-colors">
                        {gymDetails.phoneFormatted}
                      </a>
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">Call our support desk anytime during working hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600/10 text-red-500 rounded-xl mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Location Address</h4>
                    <p className="text-sm text-white font-medium mt-1 leading-relaxed">
                      {gymDetails.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600/10 text-red-500 rounded-xl mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Working Hours</h4>
                    <p className="text-sm text-white font-medium mt-1">
                      Mon – Sat: 6:30 AM – 12:30 PM, 3:00 PM – 9:30 PM
                    </p>
                    <p className="text-xs text-red-500 font-mono mt-0.5 uppercase tracking-widest font-bold">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Box */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl relative overflow-hidden flex-1 min-h-[300px] backdrop-blur-md">
              <div className="relative w-full h-full rounded-2xl overflow-hidden min-h-[280px]">
                <iframe
                  title="Kalburn Gym Location Map"
                  src={gymDetails.googleMapsEmbed}
                  className="absolute inset-0 w-full h-full border-0 opacity-80"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Floating Directions Button Overlay */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href={gymDetails.googleMapsLink}
                    target="_blank"
                    rel="noreferrer"
                    id="map-directions-btn"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-black text-white border border-white/10 hover:border-red-500/50 hover:bg-zinc-900 transition-all font-sans font-bold uppercase tracking-wider text-[10px]"
                  >
                    <Navigation className="h-4 w-4 text-red-500 animate-pulse" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 shadow-xl h-full flex flex-col justify-between backdrop-blur-md">
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-1 text-left">
                  Send A Message
                </h3>
                <p className="text-xs text-zinc-400 text-left mb-6">
                  Fill in your coordinates and we'll reach out within 24 hours.
                </p>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Amit Sharma"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-red-500 transition-colors text-sm font-semibold"
                    />
                  </div>

                  {/* Dual Grid fields (Email, Phone) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. amit@gmail.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-red-500 transition-colors text-sm font-semibold"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-red-500 transition-colors text-sm font-semibold"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                      Inquiry Target
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors text-sm font-semibold"
                    >
                      <option className="bg-zinc-950 text-white">Membership Inquiry</option>
                      <option className="bg-zinc-950 text-white">Personal Training Slots</option>
                      <option className="bg-zinc-950 text-white">Corporate Fitness Packages</option>
                      <option className="bg-zinc-950 text-white">Diet & Nutrition Consultation</option>
                      <option className="bg-zinc-950 text-white">Complaints / Feedbacks</option>
                    </select>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                      Write Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message here detailing your fitness experience or goal targets..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-red-500 transition-colors text-sm font-semibold resize-none"
                    />
                  </div>

                  {/* Success Alert */}
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-semibold flex items-center space-x-2.5"
                      >
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                        <span>Incredible! Your message has been routed successfully. Our front desk will contact you via WhatsApp / Call soon!</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Trigger */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-form-submit-btn"
                      className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 text-white font-sans font-black uppercase tracking-widest text-xs rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Routing Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-white" />
                          <span>SEND SECURE INQUIRY</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Form security footer */}
              <div className="mt-8 pt-4 border-t border-white/10 text-center text-[10px] tracking-wider text-zinc-600 font-mono uppercase font-bold">
                🔒 Privacy Assured • Zero Spam • Secure Connection
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
