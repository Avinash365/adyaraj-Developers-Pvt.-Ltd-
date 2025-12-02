"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HERO_IMAGES = [
      "https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&width=1920&height=1080&seq=hero-construction-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&width=1920&height=1080&seq=hero-construction-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&width=1920&height=1080&seq=hero-construction-4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&width=1920&height=1080&seq=hero-construction-4&orientation=landscape",
];

const heroVariants = {
  enter: { opacity: 0, scale: 1.06 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
};

export default function HomePage() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setBgIndex((idx) => (idx + 1) % HERO_IMAGES.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      {/* Construction texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        style={{
          background: "url('/images/texture_construction.png') repeat",
          mixBlendMode: "multiply"
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            variants={heroVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(17,19,25,0.55),rgba(17,19,25,0.79)), url('${HERO_IMAGES[bgIndex]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1 }}
          className="text-center px-4 z-10"
        >
          <motion.h1
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="text-6xl md:text-8xl font-bold mb-8 text-white"
            style={{ textShadow: "0px 15px 35px rgba(0,0,0,0.5)" }}
          >
            Roads & Bridges{" "}
            <span className="text-orange-400 block">Construction</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Building critical transportation infrastructure connecting
            communities. We design, develop, and deliver world-class
            infrastructure with excellence and innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="#"
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 border border-orange-500/30 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
            >
              View Our Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-white/25 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
            >
              Get Quote
            </Link>
          </motion.div>
        </motion.div>
        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-300 bg-orange-500 ${
                bgIndex === i ? "scale-125 shadow-lg" : "opacity-60"
              }`}
              onClick={() => setBgIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Our Specializations */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="relative z-10 py-28 px-4 md:px-12 bg-gradient-to-br from-orange-50 via-white to-orange-100"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-orange-800 text-center mb-12">
          Our Specializations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <motion.div
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white bg-opacity-90 rounded-xl shadow-xl flex flex-col items-center py-10 px-6 border border-orange-100 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-orange-400">
              <i className="ri-train-line"></i>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Railway Projects
            </div>
            <div className="text-lg text-orange-600 font-bold">
              32+ completed
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white bg-opacity-90 rounded-xl shadow-xl flex flex-col items-center py-10 px-6 border border-orange-100 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-orange-400">
              <i className="ri-hospital-line"></i>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Healthcare Infra
            </div>
            <div className="text-lg text-orange-600 font-bold">
              18+ hospitals
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white bg-opacity-90 rounded-xl shadow-xl flex flex-col items-center py-10 px-6 border border-orange-100 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-orange-400">
              <i className="ri-building-4-line"></i>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Educational Buildings
            </div>
            <div className="text-lg text-orange-600 font-bold">
              25+ complete
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.05 }}
            className="bg-white bg-opacity-90 rounded-xl shadow-xl flex flex-col items-center py-10 px-6 border border-orange-100 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-orange-400">
              <i className="ri-road-map-line"></i>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              Infra Development
            </div>
            <div className="text-lg text-orange-600 font-bold">
              40+ roads, bridges
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
