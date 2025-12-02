"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "remixicon/fonts/remixicon.css";

export default function Projects() {
  // Tabs
  const tabs = ["Ongoing Projects", "Completed Projects"];

  const iconMap = {
    railway: "ri-train-line",
    medical: "ri-hospital-line",
    educational: "ri-book-2-line",
    infrastructure: "ri-building-2-line",
    tourism: "ri-tree-line",
  };

  // Project Data
  const projects = [
    // ✅ Ongoing Projects
    {
      id: 1,
      title: "School of Law Building in CUSB Campus",
      location: "Bodh Gaya, Bihar",
      desc: "Four new academic blocks for the School of Law.",
      category: "Educational Building",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/school_gaya.jpeg",
    },
    {
      id: 2,
      title: "Lakefront Development",
      location: "Saharsha, Bihar",
      desc: "Modern lakefront with public park and walkway.",
      category: "Tourism Development",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["tourism"],
      image: "/images/project/tourism-saharsa.jpeg",
    },
    {
      id: 3,
      title: "Krshi Jaiv Prowdyogiki Mahavidyalay",
      location: "Sabour, Bihar",
      desc: "Agricultural Biotechnology Institute.",
      category: "Educational Building",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/krishi-sabour.jpeg",
    },
    {
      id: 4,
      title: "World Class Railway Station",
      location: "Bapudham, Motihari, Bihar",
      desc: "Redevelopment of major railway station.",
      category: "Railway Station",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["railway"],
      image: "/images/project/railway-motihari.jpeg",
    },
    {
      id: 5,
      title: "Admin Block Patna University",
      location: "Patna, Bihar",
      desc: "New administrative building for Patna University.",
      category: "Educational Building",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/admin-block-patna.jpeg",
    },
    {
      id: 6,
      title: "PHED Headquarter Building",
      location: "Patna, Bihar",
      desc: "Public Health Engineering Department HQ.",
      category: "Government Building",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/phd-headquater-patna.jpeg",
    },
    {
      id: 7,
      title: "Koderma Railway Station",
      location: "Koderma, Jharkhand",
      desc: "Main station building with circulating area and FOB.",
      category: "Railway Station",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["railway"],
      image: "/images/project/railway-koderma.png",
    },
    {
      id: 8,
      title: "Redevelopment of Bazar Samiti Phase - 2",
      location: "Bettiah, Bihar",
      desc: "Krishi Utpadan Bazar Samiti expansion and modernization.",
      category: "Commercial Hub",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/railway-koderma.png",
    },
    {
      id: 9,
      title: "Residential Quarters Phase - 2",
      location: "Adalatganj, Patna",
      desc: "Multi-storied residential quarters for Patna High Court.",
      category: "Residential",
      status: "In Progress",
      type: "Ongoing Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/railway-koderma.png",
    },

    // ✅ Completed Projects
    {
      id: 51,
      title: "Institute of Petro Chemicals Technology",
      location: "Bihta, Bihar",
      desc: "Fully functional petrochemical institute campus.",
      category: "Educational Building",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/ipt-bhita.jpeg",
    },
    {
      id: 52,
      title: "New Eklavya Model Residential High School",
      location: "Belatandi, Ramnagar, Bihar",
      desc: "High school with 720-bed capacity for tribal students.",
      category: "Educational Building",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/belatadi.jpg",
    },
    {
      id: 53,
      title: "Krshi Jaiv Prowdyogiki Mahavidyalay",
      location: "Sabour, Bihar",
      desc: "Agricultural college completed ahead of schedule.",
      category: "Educational Building",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/krishi-sabour.jpeg",
    },
    {
      id: 54,
      title: "Bihar Sadan",
      location: "Dwarka, New Delhi",
      desc: "State-run guest house and office building for the Government of Bihar.",
      category: "Government Building",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/biharsadan.avif",
    },
    {
      id: 55,
      title: "Agriculture Institute",
      location: "Piprakothi, East Champaran",
      desc: "Government center for farmer training and technology demonstration.",
      category: "Educational Building",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/agri-piprakothi.png",
    },
    {
      id: 56,
      title: "Central Super Speciality Hospital",
      location: "Patna Junction, Bihar",
      desc: "Healthcare facility primarily serving railway employees and their families.",
      category: "150 Bedded Railway Hospital",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/railway-hospital-patna.png",
    },
    {
      id: 57,
      title: "Anjuman Islamia Hall",
      location: "Patna, Bihar",
      desc: "Spacious, modern banquet hall and community center.",
      category: "Community Center",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/anjuman-patna.jpg",
    },
    {
      id: 58,
      title: "Surgical Block at DMCH",
      location: "Darbhanga, Bihar",
      desc: "Multi-story super-specialty facility",
      category: "Darbhanga Medical College and Hospital",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/dmch.jpg",
    },
    {
      id: 59,
      title: "Women ITI",
      location: "Bhagalpur, Bihar",
      desc: "A government-run vocational training center",
      category: "Industrial Training Institute",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/iti-bhagalpur.png",
    },
    {
      id: 60,
      title: "ECR GM Bunglow",
      location: "Dighaghat, Patna",
      desc: "Gazetted Officer Quarter Allotment - East Central Railway",
      category: "Officer's Quarter",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["infrastructure"],
      image: "/images/project/gm-bunglow-digha.png",
    },
    {
      id: 61,
      title: "Indo-Danish Tool Room",
      location: "Patliputra Industrial Area, Patna",
      desc: "Tool Room & Training Centre, Patna (TRTC)",
      category: "Educational Building",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/tool-room-patna.png",
    },
    {
      id: 62,
      title: "Type VI PHOD’S Quarters",
      location: "Dighaghat, Patna",
      desc: "Official bungalow allotted to senior railway officers by (ECR).",
      category: "Officer's Quarters",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["railway"],
      image: "/images/project/phod-digha.png",
    },
    {
      id: 63,
      title: "Office of the Chief Administrative Officer (COA)",
      location: "Mahendru Ghat, Bihar",
      desc: "Office of the Chief Administrative Officer (Construction) (CAO/Con) for East Central Railway (ECR).",
      category: "Administrative Center",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["railway"],
      image: "/images/project/coa-mahendrughat.png",
    },
    {
      id: 64,
      title: "ANM & GNM Paramendical Institute",
      location: "Katihar, Bihar",
      desc: "Government-run institution that offers the Auxiliary Nursing Midwifery (ANM) and General Nursing and Midwifery (GNM) diploma courses",
      category: "Healthcare",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/anm-gnm-katihar.png",
    },
    {
      id: 65,
      title: "Type VI Officer's Quarter ECR",
      location: "Karbigahiya, Patna",
      desc: "Official bungalow allotted to senior railway officers by (ECR).",
      category: "Officer's Quarters",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["railway"],
      image: "/images/project/quarter-karbighaya.png",
    },
    {
      id: 66,
      title: "ECR General Manager (GM) Office",
      location: "Hajipur, Bihar",
      desc: "The headquarters of East Central Railway (ECR)",
      category: "Railway Headquarter",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["railway"],
      image: "/images/project/gmbuilding-hajipur.png",
    },
    {
      id: 67,
      title: "Hospital in campus of DRPCAU",
      location: "Pusa, Bihar",
      desc: "Dr. Rajendra Prasad Central Agricultural University (DRPCAU), Pusa, maintains an in-house facility simply referred to as the University Hospital.",
      category: "Healthcare",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["educational"],
      image: "/images/project/hospital-pusa.png",
    },
    {
      id: 68,
      title: "Type V Officer's Quarter Block A",
      location: "Dighghat, Patna",
      desc: "Official bungalow allotted to senior railway officers by (ECR).",
      category: "Officer's Quarters",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["railway"],
      image: "/images/project/quarter-dighaghat.png",
    },
    {
      id: 69,
      title: "ECR AUDITORIUM at GM Office Campus",
      location: "Hajipur, Bihar",
      desc: "Conference and meeting facility located within the headquarters of the East Central Railway (ECR).",
      category: "Railway Headquarter",
      status: "Completed",
      type: "Completed Projects",
      iconClass: iconMap["railway"],
      image: "/images/project/auditorium-hajipur.png",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = projects.filter((p) => p.type === activeTab);

  return (
    <section className="bg-gray-50 py-16 relative px-[100px]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our <span className="text-orange-600">Projects</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Excellence in infrastructure, education, and sustainable development.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium shadow-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow-md scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <div
                  className="relative h-44 cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 p-2 rounded-full shadow-md bg-black/40 backdrop-blur-sm border border-white/30">
                    <i className={`${project.iconClass} text-white text-xl`}></i>
                  </div>
                  <span
                    className={`absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-600"
                        : "bg-orange-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="font-semibold text-lg text-gray-800 mt-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <i className="ri-map-pin-2-fill text-orange-500"></i>
                    {project.location}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full px-4">
              <img
                src={selectedImage}
                alt="Full View"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-1 right-4 text-orange-600 text-3xl hover:text-orange-200 transition"
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
