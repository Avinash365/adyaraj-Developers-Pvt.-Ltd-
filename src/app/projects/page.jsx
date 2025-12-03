"use client";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Projects from "../../page/projects/Projects";
import GalleryHero from "../../page/projects/HeroSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    // small delay to allow SSR -> client handoff visually
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <Navbar />

      <div className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
        <GalleryHero />
      </div>

      <div className={`transition-opacity duration-500 delay-100 ${visible ? "opacity-100" : "opacity-0"}`}>
        <Projects />
      </div>

      <Footer />
    </div>
  );
}
