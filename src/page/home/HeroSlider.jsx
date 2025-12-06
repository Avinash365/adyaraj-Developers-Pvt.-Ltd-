"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const slides = [
  {
    title: "Building Excellence",
    subtitle: "Since 2005",
    description:
      "Trusted government contractor specializing in public infrastructure, healthcare facilities, educational institutions, and government buildings across Bihar and beyond",
    image: "/images/homePage/2.webp",
  },
  {
    title: "Building India's",
    subtitle: "Infrastructure",
    description:
      "Leading construction company specializing in government projects across Eastern India. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image: "/images/homePage/construction-silhouette.webp",
  },
  {
    title: "Roads & Bridges",
    subtitle: "Construction",
    description:
      "Building critical transportation infrastructure connecting communities. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image: "/images/homePage/road_Bridge.webp",
  },
  {
    title: "Railway Infrastructure",
    subtitle: "Excellence",
    description:
      "Specialized in station buildings, platforms, and railway development projects. We design, develop, and deliver world-class infrastructure with excellence and innovation.",
    image: "/images/homePage/railway-sunrise.webp",
  },
];

// Custom Arrow Component
const Arrow = ({ onClick, direction }) => (
  <div
    onClick={onClick}
    className={`absolute top-1/2 z-20 w-12 h-12 hidden md:flex items-center justify-center rounded-full backdrop-blur-md bg-white/20 cursor-pointer transition hover:bg-white/30 hover:scale-110 ${
      direction === "left" ? "left-4" : "right-4"
    }`}
    style={{ transform: "translateY(-50%)" }}
  >
    {direction === "left" ? (
      <i className="ri-arrow-left-s-line text-2xl text-white"></i>
    ) : (
      <i className="ri-arrow-right-s-line text-2xl text-white"></i>
    )}
  </div>
);

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  // Preload images on client only to prevent stutter
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  const autoplaySpeed = 5000; // Increased slightly for better readability

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    arrows: true,
    pauseOnHover: false, // Changed to false to prevent "stuck" feeling when mouse accidentally hovers
    fade: false,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)", // Smoother easing function
    waitForAnimate: false, // Prevents locking controls during animation
    beforeChange: (_, next) => setActive(next),
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    appendDots: (dots) => (
      <div className="absolute bottom-6 w-full flex justify-center items-center z-30">
        <ul className="flex gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          active === i ? "border-orange-500" : "border-white"
        }`}
      >
        {active === i && (
          <motion.div
            layoutId="active-dot"
            className="w-2.5 h-2.5 rounded-full bg-orange-500"
            transition={{ duration: 0.3 }}
          />
        )}
      </div>
    ),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full outline-none">
            {/* FIX: Changed motion.div to standard div. 
               Removed initial/animate/exit opacities on the background.
               This ensures the image is ALREADY there when the slide scrolls in.
            */}
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image})`,
              }}
            />

            {/* Slide Content - We keep animations here, but reset them on 'active' state */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-16">
              {active === index && (
                <>
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    {slide.title}{" "}
                    <span className="text-orange-500">{slide.subtitle}</span>
                  </motion.h1>

                  <motion.p
                    className="mt-4 text-white text-sm md:text-lg max-w-2xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="mt-6 flex gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <a
                      href="/projects"
                      className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition hover:scale-105 transform duration-200"
                    >
                      View Our Projects
                    </a>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}