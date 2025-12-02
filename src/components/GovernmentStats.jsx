import React from "react";

export default function GovernmentStats() {
  const stats = [
    {
      value: "₹500+",
      label: "Crores Contract Value",
      subtext: "Government Projects Only",
    },
    {
      value: "55+",
      label: "Projects Completed",
      subtext: "All Government Departments",
    },
    {
      value: "10+",
      label: "Active Contracts",
      subtext: "Currently Executing",
    },
    {
      value: "100%",
      label: "Government Focus",
      subtext: "No Private Contracts",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-900 to-orange-400 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Title */}
        <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 text-white">
          Government Project Statistics
        </h2>
        <p className="text-sm sm:text-base text-orange-100 mb-8 sm:mb-12">
          Our proven track record in government construction projects
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-5 sm:p-6 rounded-xl sm:rounded-2xl 
                         shadow-md border border-white/10 hover:shadow-xl hover:scale-105 
                         transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-extrabold mb-1 sm:mb-2 text-white">
                {stat.value}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-orange-200 mb-1">
                {stat.label}
              </p>
              <p className="text-xs sm:text-sm text-orange-100 opacity-80">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
