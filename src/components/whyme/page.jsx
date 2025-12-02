"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    icon: "ri-government-line",
    title: "Government Projects",
    desc: "Public infrastructure, government buildings, hospitals & schools",
  },
  {
    id: 2,
    icon: "ri-team-line",
    title: "Expert Team",
    desc: "Skilled professionals with extensive construction experience",
  },
  {
    id: 3,
    icon: "ri-medal-line",
    title: "Quality Assured",
    desc: "ISO certified with proven track record since 2005",
  },
];

export default function FloatingWhyChoose() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.2}
    >
      {/* 🔴 Blinking / Pulsing Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="bg-orange-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-700 transition"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <i
          className={`ri-${open ? "close-line" : "question-line"} text-2xl`}
        ></i>
      </motion.button>

      {/* 📌 Floating Card with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-3 w-72 sm:w-80 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white/30 cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{
              left: -200,
              right: 200,
              top: -200,
              bottom: -200,
            }}
            dragElastic={0.3}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Why Choose Adyaraj?
            </h3>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <i
                    className={`${item.icon} text-orange-600 text-xl shrink-0`}
                  ></i>
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
