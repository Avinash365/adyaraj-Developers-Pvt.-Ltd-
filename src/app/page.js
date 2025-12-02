"use client";

import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NotificationBar from "@/components/notificationBar";
import HeroSlider from "@/page/home/HeroSlider";
import LatestNews from "@/page/home/LatestNews";
import AboutCompany from "@/page/home/About"; 
import GovernmentExpertise from "@/page/home/Specialization";
import ProjectStats from "@/page/home/ProjectStatisticsBar";
import GovernmentClients from "@/page/home/Client";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div>
      <Navbar/>

      {/* Animate on mount instead of scroll */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <HeroSlider/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <NotificationBar/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <AboutCompany/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <GovernmentClients/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <GovernmentExpertise/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <ProjectStats/>
      </motion.div>

      <motion.div
        id="latest-news" 
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <LatestNews/>
      </motion.div>

      <Footer/>
    </div>
  );
}
