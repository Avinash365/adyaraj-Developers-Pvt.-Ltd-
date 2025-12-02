"use client";

import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/page/projects/Projects";
import GalleryHero from "@/page/projects/HeroSection";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div>
      <Navbar/> 
         <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <GalleryHero/>
        </motion.div>
    
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects/>
      </motion.div>

      <Footer/>
    </div>
  );
}
