"use client";

import React from "react";
import "remixicon/fonts/remixicon.css";

export default function GovernmentExpertise() {
  // Icon Map (CSS class names)
  const iconMap = {
    building: "ri-government-line",
    infrastructure: "ri-building-2-line",
    medical: "ri-hospital-line",
    educational: "ri-book-2-line",
    fire: "ri-flashlight-line",
    park: "ri-tree-line",
  };

  // Expertise Data
  const services = [
    {
      id: 1,
      icon: iconMap.building,
      title: "Government Buildings",
      desc: "Specialized construction of government offices, administrative buildings, and public facilities with adherence to government standards.",
      points: [
        "Administrative Buildings",
        "Government Offices",
        "Public Service Centers",
        "Residential Officer's Quaters",
      ],
    },
    {
      id: 2,
      icon: iconMap.infrastructure,
      title: "Public Infrastructure",
      desc: "Large-scale government infrastructure projects including highways, bridges, and public transportation systems.",
      points: [
        "ROB",
        "Public Bridges",
        "Government Roads",
        "Urban Infrastructure",
      ],
    },
    {
      id: 3,
      icon: iconMap.medical,
      title: "Government Healthcare",
      desc: "Construction of government hospitals, primary health centers, and public medical facilities meeting government specifications.",
      points: [
        "Government Hospitals",
        "PHC Centers",
        "Medical College Buildings",
        "Public Health Infrastructure",
      ],
    },
    {
      id: 4,
      icon: iconMap.educational,
      title: "Government Education",
      desc: "Construction of government schools, colleges, and educational institutions with modern learning infrastructure.",
      points: [
        "Government Schools",
        "Public Colleges",
        "Technical Institutes",
        "Educational Infrastructure",
      ],
    },
    {
      id: 5,
      icon: iconMap.fire,
      title: "Electrical & Fire Safety",
      desc: "Complete electrical systems and fire safety solutions ensuring compliance with all safety standards.",
      points: [
        "Electrical Installation",
        "Fire Safety Systems",
        "Security Systems",
        "Emergency Solutions",
      ],
    },
    {
      id: 6,
      icon: iconMap.park,
      title: "Tourism Development",
      desc: "Sustainable tourism projects with beautiful lakefronts, eco-parks, and modern recreational infrastructure.",
      points: [
        "Lakefront Development",
        "Eco-Tourism Projects",
        "Recreational Facilities",
        "Cultural & Heritage Revitalization",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 md:px-[100px]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="bg-orange-100 text-orange-600 font-medium px-4 py-1 rounded-full text-sm">
            Our Services
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Government Construction{" "}
            <span className="text-orange-600">Expertise</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Specialized in government projects with proven track record in
            public infrastructure, healthcare, education, and administrative
            facilities across Bihar.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-50 text-orange-600 mb-4">
                <i className={`${service.icon} text-2xl`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{service.desc}</p>

              {/* Bullet Points */}
              <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc list-inside">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {/* Learn More */}
              {/* <button className="mt-4 text-orange-600 font-medium text-sm flex items-center gap-1 hover:underline">
                Learn More <i className="ri-arrow-right-line"></i>
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
