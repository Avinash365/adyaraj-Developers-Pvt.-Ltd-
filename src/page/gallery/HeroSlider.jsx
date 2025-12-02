'use client';

import Link from 'next/link';

export default function GalleryHero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/other/5.jpg"
          alt="Gallery Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-yellow-100 max-w-2xl mx-auto">
            Step into our gallery and witness the craftsmanship, innovation, and attention to detail that define every project we undertake.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-400 mb-2">55+</div>
              <div className="text-xs sm:text-sm text-yellow-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-orange-400 mb-2">10+</div>
              <div className="text-xs sm:text-sm text-yellow-200">Active Sites</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-red-400 mb-2">20+</div>
              <div className="text-xs sm:text-sm text-yellow-200">Years of Experience</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Link 
              href="#projects" 
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap text-sm sm:text-base"
            >
              Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements (optional) */}
      <div className="absolute top-20 left-20 w-10 h-10 sm:w-16 sm:h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-32 w-8 h-8 sm:w-12 sm:h-12 bg-orange-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-14 h-14 sm:w-20 sm:h-20 bg-red-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
    </div>
  );
}
