"use client";

import Image from "next/image";
import { useState } from "react";

// Icon Map (CSS class names)
const iconMap = {
  railway: "ri-train-line",
  medical: "ri-hospital-line",
  educational: "ri-book-2-line",
  infrastructure: "ri-building-2-line",
  tourism: "ri-tree-line",
  award: "ri-award-fill"
};

// Featured News Card (Left Side)
function NewsCardLeftSide({ date, title, description, type, image }) {
  const iconClass = iconMap[type] || "ri-building-2-line";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300 h-full">
      <div className="relative w-full h-72 sm:h-80 md:h-96">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 p-3 rounded-full shadow-md bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <i className={`${iconClass} text-white text-2xl`}></i>
        </div>
      </div>
      <div className="p-6 flex flex-col h-full">
        <p className="text-gray-500 text-sm">{date}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mt-2">{title}</h3>
        <p className="text-gray-700 mt-3 leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  );
}

// Right Side News List Item
function NewsCardRightSide({ date, title, type, onClick, active }) {
  const iconClass = iconMap[type] || "ri-building-2-line";

  return (
    <div
      className={`flex gap-4 items-center p-3 rounded-xl cursor-pointer transition-colors duration-200 ${
        active
          ? "bg-orange-50 border-l-4 border-orange-500"
          : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
        <i className={`${iconClass} text-orange-500 text-xl`}></i>
      </div>
      <div className="flex-1">
        <p className="text-gray-500 text-xs">{date}</p>
        <h4 className="text-sm font-semibold text-gray-900 mt-1 line-clamp-2">
          {title}
        </h4>
      </div>
    </div>
  );
}

// Main Section Component
export default function LatestNews() {
  const newsData = [
    {
      type: "infrastructure",
      date: "New Tender Awarded",
      title: "School of Law Building in CUSB Campus, Gaya",
      description:
        "We are proud to announce the award of a new tender for the development of world-class educational infrastructure in EPC mode. The project includes the design and construction of the School of Business Studies & Management, School of Health Science, School of Law & Governance and School of Physical & Chemical Science.",
      image: "/images/news/school_gaya.jpeg",
    },
    {
      type: "tourism",
      date: "New Tender Awarded",
      title: "Lakefront Development, Saharsha",
      description:
        "Transforming Matsyangandha Lake into a modern eco-tourism destination with lakefront beautification, landscaping, boating, and public amenities promoting sustainability and recreation.",
      image: "/images/news/tourism-saharsa.jpeg",
    },
    {
      type: "award",
      date: "Vishwakarma Award",
      title: "Anjuman Islamia Hall Recognized for Excellence in Construction",
      description:
        "Anjuman Islamia Hall project has been honored with the Vishwakarma Award for outstanding excellence in civil construction and architectural innovation. This achievement highlights our continuous commitment to quality, sustainability, and engineering excellence in every project we undertake.",
      image: "/images/news/anjuman.png",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedNews = newsData[selectedIndex];

  return (
    <section className="px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mt-4">
          Latest News & <span className="text-orange-600">Projects</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Stay updated with our latest projects, achievements, and industry developments.
        </p>
      </div>

      <div className="max-w-7xl px-3 mx-auto flex flex-col-reverse lg:flex-row gap-10">
        {/* Left: Selected News */}
        <div className="lg:w-2/3 h-full">
          <NewsCardLeftSide {...selectedNews} />
        </div>

        {/* Right: News List */}
        <div className="lg:w-1/3 flex flex-col gap-3 max-h-[500px] overflow-y-auto hide-scrollbar">
          {newsData.map((news, idx) => (
            <NewsCardRightSide
              key={idx}
              {...news}
              onClick={() => setSelectedIndex(idx)}
              active={selectedIndex === idx}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar styling */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
