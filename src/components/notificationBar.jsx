"use client";

import { useCallback } from "react";

export default function NotificationBar() {
  const handleClick = useCallback(() => {
    const section = document.getElementById("latest-news");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      onClick={handleClick}
      className="
        bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
        text-white font-medium text-sm md:text-base
        py-2 overflow-hidden relative cursor-pointer
        hover:opacity-90
      "
    >
      {/* The marquee container */}
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="mx-8">
          🚧 New Project: <strong>School of Law Building, CUSB Campus, Gaya</strong>
        </span>
        <span className="mx-8">
          🚧 New Project: <strong>Lakefront Development, Saharsha</strong>
        </span>
        <span className="mx-8">
          🏆 Vishwakarma Award: <strong>Anjuman Islamia Hall</strong> Recognized for Excellence in Construction
        </span>
        <span className="mx-8">
          🏗️ Explore Our Latest Projects and Announcements — Click Here to View
        </span>
        {/* Duplicate the content for seamless loop */}
        <span className="w-70"></span>
        <span className="mx-8">
          🚧 New Project: <strong>School of Law Building, CUSB Campus, Gaya</strong>
        </span>
        <span className="mx-8">
          🚧 New Project: <strong>Lakefront Development, Saharsha</strong>
        </span>
        <span className="mx-8">
          🏆 Vishwakarma Award: <strong>Anjuman Islamia Hall</strong> Recognized for Excellence in Construction
        </span>
        <span className="mx-8">
          🏗️ Explore Our Latest Projects and Announcements — Click Here to View
        </span>
      </div>
    </div>
  );
}
