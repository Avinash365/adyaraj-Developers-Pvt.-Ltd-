// components/HeroSection.js


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&amp;width=1920&amp;height=1080&amp;seq=hero-construction-4&amp;orientation=landscape')`,
        opacity: 1, transform: 'scale(0.99)'
      }}
    />
    {/* Decorative gradient elements */}
    <div className="absolute top-14 left-14 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20" />
    <div className="absolute top-13 right-13 w-12 h-12 bg-orange-500/20 backdrop-blur-sm rounded-xl border border-orange-300/30" />
    <div className="absolute bottom-13 left-13 w-20 h-20 bg-blue-500/15 backdrop-blur-sm rounded-3xl border border-blue-300/25" />

    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white w-full relative z-10" style={{ perspective: '1000px', rotate: '5deg', transformStyle: 'preserve-3d', opacity: 1 }}>
      <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight" style={{ textShadow: 'rgba(0,0,0,0.5) 0px 10px 30px' }}>
        <span className="block" style={{ opacity: 1, transform: 'translateY(-34px) rotateX(61deg)' }}>
          Roads & Bridges
        </span>
        <span className="text-orange-400 block" style={{ opacity: 1, transform: 'translateY(-19px) rotateX(33deg)' }}>
          Construction
        </span>
      </h1>
      <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: 'rgba(0,0,0,0.3) 0px 5px 15px' }}>
        <span style={{ opacity: 1 }}>
          Building critical transportation infrastructure connecting communities. We design, develop, and deliver world-class infrastructure with excellence and innovation.
        </span>
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ opacity: 1 }}>
        <Link href="/projects" passHref legacyBehavior>
          <a className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl hover:shadow-orange-500/25 border border-orange-500/30 backdrop-blur-sm">
            View Our Projects
          </a>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <a className="border-2 border-white/50 text-white hover:bg-white/10 hover:text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl hover:shadow-white/25 backdrop-blur-sm">
            Get Quote
          </a>
        </Link>
      </div>
    </div>
    {/* Decorative buttons at bottom left/right, can be connected for carousel or actions as needed */}
    <div className="absolute bottom-8 left-12 transform -translate-x-12 flex space-x-3 z-20">
      <button className="w-4 h-4 rounded-full transition-all duration-300 cursor-pointer bg-orange-500 scale-125" tabIndex="0" style={{ boxShadow: 'rgba(255,165,0,0.6) 0px 0px 20px' }} />
      <button className="w-4 h-4 rounded-full transition-all duration-300 cursor-pointer bg-white/50 hover:bg-white/75" tabIndex="0" />
      <button className="w-4 h-4 rounded-full transition-all duration-300 cursor-pointer bg-white/50 hover:bg-white/75" tabIndex="0" />
      <button className="w-4 h-4 rounded-full transition-all duration-300 cursor-pointer bg-white/50 hover:bg-white/75" tabIndex="0" />
    </div>
    {/* Carousel navigation arrows (if needed) */}
    <button className="absolute left-8 top-12 transform -translate-y-12 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer z-20 backdrop-blur-sm border border-white/30" tabIndex="0">
      <i className="ri-arrow-left-line text-xl" />
    </button>
    <button className="absolute right-8 top-12 transform -translate-y-12 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer z-20 backdrop-blur-sm border border-white/30" tabIndex="0">
      <i className="ri-arrow-right-line text-xl" />
    </button>
  </section>
);

export default HeroSlider;


// components/HeroSection.js

// components/HeroSection.js

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroSlider = () => (
//   <section className="relative h-screen flex items-center justify-center overflow-hidden">
//     <div
//       className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Bridge%20and%20flyover%20construction%2C%20highway%20infrastructure%20development%2C%20concrete%20bridge%20construction%2C%20government%20road%20project%2C%20heavy%20construction%20machinery%2C%20professional%20engineering%20work%2C%20modern%20infrastructure%20development%2C%20construction%20site%20photography&width=1920&height=1080&seq=hero-construction-4&orientation=landscape')`,
//         opacity: 1, transform: 'scale(0.99)'
//       }}
//     />

//     {/* ----- HERO CONTENT ----- */}
//     <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white w-full relative z-10">
//       <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
//         <span className="block">Roads & Bridges</span>
//         <span className="text-orange-400 block">Construction</span>
//       </h1>

//       <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
//         Building critical transportation infrastructure connecting communities.
//       </p>
//     </div>

//     {/* ----- BOTTOM INDICATOR DOTS ----- */}
//     <div className="absolute bottom-8 left-12 flex space-x-3 z-20">
//       <button className="w-4 h-4 rounded-full bg-orange-500 scale-125 shadow-orange-400/60 shadow-lg" />
//       <button className="w-4 h-4 rounded-full bg-white/50 hover:bg-white/75" />
//       <button className="w-4 h-4 rounded-full bg-white/50 hover:bg-white/75" />
//     </div>

//     {/* ----- ARROWS WITH HOVER ROTATION ----- */}
//     <button
//       className="
//         absolute left-8 top-12 w-12 h-12
//         bg-white/20 hover:bg-white/30
//         rounded-full flex items-center justify-center
//         text-white border border-white/30 backdrop-blur-sm
//         cursor-pointer z-20 transition-all duration-300
//         group
//       "
//     >
//       <i
//         className="ri-arrow-up-line text-xl transition-transform duration-300 group-hover:rotate-180"
//       />
//     </button>

//     <button
//       className="
//         absolute right-8 top-12 w-12 h-12
//         bg-white/20 hover:bg-white/30
//         rounded-full flex items-center justify-center
//         text-white border border-white/30 backdrop-blur-sm
//         cursor-pointer z-20 transition-all duration-300
//         group
//       "
//     >
//       <i
//         className="ri-arrow-up-line text-xl transition-transform duration-300 group-hover:rotate-180"
//       />
//     </button>
//   </section>
// );

// export default HeroSlider;
