"use client";

import React from "react";

export default function ProjectStats() {
  const stats = [
    { id: 1, value: "55+", label: "Projects Completed", color: "text-orange-600" },
    { id: 2, value: "₹255.33 Cr", label: "Annual Turnover", color: "text-blue-600" },
    { id: 3, value: "20+", label: "Years Experience", color: "text-yellow-500" },
    { id: 4, value: "100%", label: "Client Satisfaction", color: "text-orange-600" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-orange-50 via-gray-50 to-yellow-50 shadow-sm p-10 text-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800">Project Statistics</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
            Our track record speaks for itself with consistent growth and successful project delivery.
          </p>

          {/* Stats Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id}>
                <h3 className={`text-xl  sm:text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
                <p className="text-gray-600 mt-1 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
