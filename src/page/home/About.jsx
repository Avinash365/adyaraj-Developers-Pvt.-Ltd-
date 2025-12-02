"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ResponsiveContainer,
  Line,
  Bar,
  XAxis,
  Tooltip,
  ComposedChart,
  LabelList,
} from "recharts";

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
    button: "Learn More About Us",
    image: "/images/governmentPartner/image.png",
    badgeYears: `${yearsOfExcellence}+`,
    badgeText: "Years of Excellence",
  };

  const leadership = [
    {
      name: "Mr. Jitendra Kumar Roy",
      role: "Managing Director"
    },
    {
      name: "Mr. Amrendra Kumar Amar",
      role: "Co-founder",
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

  // ========= TURNOVER DATA =========
  const turnoverData = [
    { year: "2019-20", turnover: 70.69 },
    { year: "2020-21", turnover: 59.56 },
    { year: "2021-22", turnover: 73.52 },
    { year: "2022-23", turnover: 105.95 },
    { year: "2023-24", turnover: 206.57 },
    { year: "2024-25", turnover: 255.33 }
  ];

  // ===== Animation setup =====
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setAnimate(true);
  }, [isInView]);

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800 mb-1">{label}</p>
          <p className="text-blue-600 font-medium">₹{payload[0].value} Cr</p>
        </div>
      );
    }
    return null;
  };

  // ====================================

  return (
    <section className="bg-white py-16 md:px-[100px]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
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

            <p className="text-gray-800 mt-4 text-justify">{company.description1}</p>
            <p className="text-gray-600 mt-4 text-justify">{company.description2}</p>

            {/* Leadership - Redesigned: Side-by-side layout with photo above name and role */}
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

            {/* Turnover Chart */}
            <div
              ref={chartRef}
              className="mt-6 border border-gray-200 rounded-3xl py-3 px-6 shadow-xl bg-gradient-to-br from-white to-gray-50"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Annual Turnover
              </h3>

              <div className="w-full h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={turnoverData} margin={{ top: 25, right: 15, left: 10, bottom: 2 }}>
                    <XAxis 
                      dataKey="year" 
                      tick={{ 
                        fontSize: 10, 
                        fontWeight: 600, 
                        fill: '#6b7280',
                        angle: -45, 
                        textAnchor: 'end', 
                        dominantBaseline: 'middle' 
                      }} 
                      tickLine={false}
                      axisLine={{ stroke: '#e5e7eb' }}
                      interval={0}
                      height={50}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="turnover"
                      fill="#3b82f6"
                      barSize={25}
                      radius={[8, 8, 0, 0]}
                      animationDuration={animate ? 2000 : 0}
                    >
                      <LabelList 
                        dataKey="turnover" 
                        position="top" 
                        offset={8}
                        formatter={(value) => `${value.toFixed(2)} Cr`}
                        style={{ fontSize: 10, fontWeight: 600, fill: '#1f2937' }}
                      />
                    </Bar>
                    <Line
                      type="monotone"
                      dataKey="turnover"
                      stroke="#f97316"
                      strokeWidth={3}
                      dot={{ r: 5, fill: '#f97316', strokeWidth: 2, stroke: '#ffffff' }}
                      animationDuration={animate ? 2500 : 0}
                      connectNulls={false}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <p className="text-gray-500 text-xs mt-0 text-center italic">
                *Data represents annual turnover in crores.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between h-full space-y-6">
          {/* Top Image with Badge */}
          <div className="relative">
            <Image
              src={company.image}
              alt="Team discussion"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <div className="absolute -left-6 -bottom-6 bg-orange-500 text-white px-5 py-4 rounded-xl shadow-lg text-center">
              <p className="text-2xl font-bold">{company.badgeYears}</p>
              <p className="text-sm">{company.badgeText}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl shadow-md border p-6 text-center hover:shadow-lg transition"
              >
                <i className={`${stat.icon} ${stat.color} text-3xl`}></i>
                <p className="mt-2 text-xl font-bold text-black">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learn more button */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-medium rounded-xl px-8 py-4 shadow-lg"
        >
          {company.button}
        </motion.button>
      </div>
    </section>
  );
}
