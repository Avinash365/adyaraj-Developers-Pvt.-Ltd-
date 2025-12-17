"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutCompany() {
  const currentYear = new Date().getFullYear();
  const foundingYear = 2005;
  const yearsOfExcellence = currentYear - foundingYear;

  // ========= CONFIG VARIABLES =========
  const company = {
    badge: "About Our Company",
    title: "Trusted Quality in",
    highlight: "Every Build",
    description1:
      "M/s Adyaraj Developers Pvt. Ltd., established in 2005, is a trusted Government Contractor specializing in Public Infrastructure projects. With years of experience and a skilled team, we focus exclusively on Designing, Developing, and Delivering high-quality, durable projects that serve the public sector with excellence.",
    description2:
      "Our expertise spans across Buildings — including Hospitality, Residential, Institutional, and Hospital projects, all equipped with advanced Electrical and Fire Safety Systems — as well as Bridges and Parks. Driven by innovation, quality, and reliability, we continuously meet and exceed government standards, setting new benchmarks in construction, public service, and infrastructure development.",
    button: "View Company Profile",
    image: "/images/governmentPartner/image.png",
    badgeYears: `${yearsOfExcellence}+`,
    badgeText: "Years of Excellence",
  };

  const leadership = [
    {
      name: "Mr. Jitendra Kumar Roy",
      role: "Managing Director",
    },
    {
      name: "Mr. Amrendra Kumar Amar",
      role: "Co-founder",
    },
  ];

  const trustPoints = [
    {
      title: "Govt. Compliance",
      desc: "Strict adherence to CPWD, PWD & statutory norms.",
      icon: "ri-government-fill", 
      color: "text-blue-700",
      bg: "bg-blue-50",
    },
    {
      title: "Proven Delivery",
      desc: "Successful execution of hospitals & public infra.",
      icon: "ri-building-4-fill",
      color: "text-green-700",
      bg: "bg-green-50",
    },
    {
      title: "Safety & Quality",
      desc: "Robust QA/QC with zero compromise on safety.",
      icon: "ri-shield-check-fill",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Transparent Practices",
      desc: "Ethical, audit-ready documentation.",
      icon: "ri-file-list-3-fill",
      color: "text-purple-700",
      bg: "bg-purple-50",
    },
  ];

  const stats = [
    {
      icon: "ri-medal-2-line",
      color: "text-orange-600",
      value: "100%",
      label: "Quality Commitment",
    },
    {
      icon: "ri-user-star-line",
      color: "text-blue-600",
      value: "50+",
      label: "Expert Team",
    },
    {
      icon: "ri-award-line",
      color: "text-yellow-600",
      value: "ISO",
      label: "Certified",
    },
    {
      icon: "ri-bar-chart-line",
      color: "text-orange-600",
      value: "697%",
      label: "Growth Rate",
    },
  ];

  return (
    <section className="bg-white py-16 md:px-[100px]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div>
            <span className="bg-white/10 backdrop-blur-md border border-white/30 text-orange-600 font-medium px-4 py-2 rounded-full text-sm shadow-sm">
              {company.badge}
            </span>

            <h2 className="text-4xl text-black font-bold mt-4 leading-snug">
              {company.title}{" "}
              <span className="text-orange-600">{company.highlight}</span>
            </h2>

            <p className="text-gray-800 mt-4 text-justify">
              {company.description1}
            </p>
            <p className="text-gray-600 mt-4 text-justify">
              {company.description2}
            </p>

            {/* Leadership Section */}
            <div className="mt-6 border rounded-xl p-3">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Leadership
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {leadership.map((leader, idx) => (
                  <div key={idx} className="text-center space-y-3">
                    <div className="font-sans italic text-lg text-gray-800">
                      {leader.name}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {leader.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Section */}
            <div className="mt-6 border border-gray-200 rounded-3xl py-6 px-6 shadow-xl bg-gradient-to-br from-white to-gray-50">
              <h3 className="text-lg font-bold text-gray-900 mb-5 text-center tracking-wide">
                Why Government Agencies Trust Us
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {trustPoints.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    // Subtle Hover Effect: Slight scale up
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 p-2 rounded-xl transition-colors cursor-default"
                  >
                    <div className={`shrink-0 p-2 rounded-lg ${item.bg} mt-1`}>
                      <i className={`${item.icon} ${item.color} text-2xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col h-full"> 
          
          {/* Top Image with Badge */}
          <div className="relative shrink-0 mb-12"> 
            <Image
              src={company.image}
              alt="Team discussion"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -left-6 -bottom-6 bg-orange-500 text-white px-5 py-4 rounded-xl shadow-lg text-center">
              <p className="text-2xl font-bold">{company.badgeYears}</p>
              <p className="text-sm">{company.badgeText}</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 flex-1">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="h-full flex flex-col justify-center rounded-2xl shadow-md border border-gray-100 bg-white px-4 text-center hover:shadow-lg transition group"
              >
                <div className="mb-2">
                   <i className={`${stat.icon} ${stat.color} text-3xl group-hover:scale-110 transition-transform inline-block`}></i>
                </div>
                <p className="text-xl font-bold text-black leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-xs mt-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learn more button */}
      <div className="flex justify-center mt-10">
        <Link href="/aboutUs">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-medium rounded-xl px-8 py-4 shadow-lg"
          >
            {company.button}
          </motion.button>
        </Link>
      </div>
    </section>
  );
}