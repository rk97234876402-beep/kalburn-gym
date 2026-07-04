import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Clock, Calendar, ShieldAlert, CheckCircle } from "lucide-react";
import { weeklySchedule } from "../data";

export default function Schedule() {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(-1); // 0 = Sun, 1 = Mon, etc.
  const [currentLocalTimeString, setCurrentLocalTimeString] = useState<string>("");

  useEffect(() => {
    const checkGymOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      setCurrentDayIndex(day);
      setCurrentLocalTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

      if (day === 0) {
        // Sunday is always Closed
        setIsOpenNow(false);
        return;
      }

      // Shifts in minutes from midnight
      // Morning Shift: 6:30 AM to 12:30 PM (390 to 750 mins)
      const morningStart = 6 * 60 + 30; // 390
      const morningEnd = 12 * 60 + 30;  // 750

      // Evening Shift: 3:00 PM to 9:30 PM (900 to 1290 mins)
      const eveningStart = 15 * 60;     // 900
      const eveningEnd = 21 * 60 + 30;  // 1290

      const isDuringMorningShift = totalMinutes >= morningStart && totalMinutes < morningEnd;
      const isDuringEveningShift = totalMinutes >= eveningStart && totalMinutes < eveningEnd;

      if (isDuringMorningShift || isDuringEveningShift) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkGymOpenStatus();
    // Refresh every 30 seconds to keep the live badge highly accurate
    const interval = setInterval(checkGymOpenStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  // Map JS Day index (0=Sun, 1=Mon... 6=Sat) to table index
  const getScheduleHighlightIndex = (dayIndex: number) => {
    if (dayIndex === 0) return 6; // Sunday is index 6
    return dayIndex - 1; // Mon=0, Tue=1 etc.
  };

  return (
    <section id="schedule" className="relative py-24 bg-zinc-950/40 border-b border-zinc-950 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-80 w-80 rounded-full bg-red-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-mono tracking-widest text-red-500 uppercase mb-3">OPERATING HOURS</p>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-white uppercase tracking-tight">
            WEEKLY <span className="text-red-500">SCHEDULE</span>
          </h2>
          <div className="h-1 w-16 bg-red-600 mx-auto mt-4" />
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl mx-auto">
            Review our extensive daily slots. We operate multi-session morning and evening batches fitting effortlessly into busy professional routines.
          </p>
        </div>

        {/* Bento Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Live Status Display Banner */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-between h-full space-y-8 relative overflow-hidden">
              {/* Backlight orb */}
              <div className="absolute -bottom-16 -left-16 h-48 w-48 bg-red-600/5 blur-2xl rounded-full pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-white">
                  <Clock className="h-6 w-6 text-red-500" />
                  <h3 className="text-lg font-bold uppercase tracking-wider">Live Status</h3>
                </div>

                {/* Pulsating Open/Closed state indicator card */}
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-left space-y-4">
                  <div className="flex items-center space-x-3">
                    {isOpenNow ? (
                      <div className="flex items-center space-x-2">
                        <span className="relative flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                        </span>
                        <span className="text-sm font-bold uppercase tracking-wider text-emerald-500">
                          Currently Open
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span className="relative flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500" />
                        </span>
                        <span className="text-sm font-bold uppercase tracking-wider text-red-500">
                          Currently Closed
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-zinc-400">
                    Your local time is <span className="text-white font-semibold font-mono">{currentLocalTimeString}</span>.
                  </p>

                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {isOpenNow
                      ? "Great timing! Our professional trainers are on the floor waiting to help you crush today's heavy lift targets."
                      : "We are currently resting or sanitizing the temple. See you on the floor during our next active shift slot!"}
                  </p>
                </div>
              </div>

              {/* Note on Sunday */}
              <div className="p-5 rounded-2xl bg-red-600/5 border border-white/10 text-left flex items-start space-x-3">
                <ShieldAlert className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-400">
                  <p className="font-bold text-white uppercase tracking-wider">SUNDAY REST DAYS</p>
                  <p className="mt-1 leading-normal">
                    Sunday is strictly closed. We believe resting the central nervous system is just as crucial for growth as heavy squat sets.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Schedule Timetable Grid */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl backdrop-blur-md">
              <div className="flex items-center space-x-3 text-white mb-6">
                <Calendar className="h-5 w-5 text-red-500" />
                <h3 className="text-base font-bold uppercase tracking-wider">Weekly Timetable</h3>
              </div>

              {/* Grid Rows */}
              <div className="space-y-3">
                {weeklySchedule.map((item, idx) => {
                  const isToday = getScheduleHighlightIndex(currentDayIndex) === idx;
                  return (
                    <motion.div
                      key={item.day}
                      whileHover={{ scale: 1.01 }}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left ${
                        isToday
                          ? "bg-red-600/10 border-red-500/40 shadow-lg shadow-red-950/10"
                          : "bg-black/40 border-white/10 hover:border-white/20"
                      }`}
                    >
                      {/* Left: Day & Current Indicator */}
                      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                        {isToday ? (
                          <div className="px-2.5 py-0.5 rounded bg-red-600 text-[9px] font-sans font-black text-white uppercase tracking-wider">
                            TODAY
                          </div>
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-zinc-700" />
                        )}
                        <h4 className={`text-sm font-extrabold uppercase tracking-wider ${
                          isToday ? "text-white" : "text-zinc-300"
                        }`}>
                          {item.day}
                        </h4>
                      </div>

                      {/* Right: Shifts details */}
                      {item.closed ? (
                        <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest bg-red-600/10 border border-red-500/20 px-3 py-1 rounded">
                          Closed
                        </span>
                      ) : (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-6 gap-y-1">
                          <div className="flex items-center space-x-1.5 text-xs">
                            <span className="text-zinc-500 font-mono">AM Batch:</span>
                            <span className="text-zinc-300 font-semibold font-mono">{item.hours}</span>
                          </div>
                          {item.eveningHours && (
                            <div className="flex items-center space-x-1.5 text-xs">
                              <span className="text-zinc-500 font-mono">PM Batch:</span>
                              <span className="text-zinc-300 font-semibold font-mono">{item.eveningHours}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
