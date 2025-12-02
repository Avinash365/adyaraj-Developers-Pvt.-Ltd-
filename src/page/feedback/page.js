'use client';
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ClientFeedbackHero() {
  const [feedback, setFeedback] = useState("");
  const maxChars = 500;

  return (
    <>
      <Navbar />

      <main className="pt-[80px]">
        {/* Hero Section */}
        <section
          className="w-full h-[400px] flex items-center justify-center relative"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url("https://readdy.ai/api/search-image?query=Customer%20feedback%20and%20testimonials%2C%20professional%20business%20meeting%2C%20client%20satisfaction%2C%20construction%20project%20review%2C%20happy%20clients%20and%20contractors%2C%20professional%20consultation&width=1920&height=600&seq=feedback-hero&orientation=landscape")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="z-10 text-center w-full">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">
              Client Feedback
            </h1>
            <p className="text-white text-lg md:text-xl font-medium drop-shadow-lg">
              Your Opinion Matters to Us
            </p>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="bg-[#fafbfc] py-14 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
              Share Your <span className="text-orange-600">Experience</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-base">
              Help us improve our services by sharing your valuable feedback.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-orange-200 text-black"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800">
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-orange-200 text-black"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-orange-200 text-black"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-orange-200 text-black"
                    placeholder="e.g. DMCH Surgical Block"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800">
                    Overall Rating <span className="text-orange-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-orange-200 text-black"
                  >
                    <option value="">Select rating</option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Poor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800">
                    Would you recommend us?
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-orange-200 text-black">
                    <option value="">Select option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-gray-800">
                  Your Feedback <span className="text-orange-500">*</span>
                </label>
                <textarea
                  required
                  maxLength={maxChars}
                  value={feedback}
                  onChange={e => setFeedback(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 min-h-[120px] text-sm resize-none focus:ring-2 focus:ring-orange-200 text-black"
                  placeholder="Tell us about your experience..."
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {feedback.length}/{maxChars} characters
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#ec6608] text-white font-semibold rounded-md px-8 py-3 transition hover:bg-orange-700"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 pb-25 bg-white px-4">
          <div className="text-center mb-12">
            <span className="bg-orange-100 text-orange-600 font-medium px-4 py-1 rounded-full text-sm">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
              What Our <span className="text-orange-600">Clients Say</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-base">
              Read testimonials from our satisfied government clients.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-6">
            {[...Array(3)].map((_, i) => {
              const testimonials = [
                {
                  name: "Dr. Rajesh Kumar",
                  role: "Medical Superintendent, DMCH",
                  project: "Surgical Block Construction",
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20Indian%20doctor%20in%20white%20coat%2C%20medical%20superintendent%2C%20confident%20healthcare%20professional%2C%20hospital%20setting%2C%20professional%20portrait%20photography&width=80&height=80&seq=testimonial-doctor&orientation=squarish",
                  feedback:
                    "Exceptional quality and timely delivery. The surgical block was completed with all modern facilities as promised.",
                },
                {
                  name: "Eng. Priya Sharma",
                  role: "Railway Project Manager",
                  project: "Kodarma Station Development",
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20engineer%2C%20railway%20project%20manager%2C%20safety%20helmet%2C%20confident%20engineering%20professional%2C%20construction%20site%20background&width=80&height=80&seq=testimonial-engineer&orientation=squarish",
                  feedback:
                    "Outstanding work on the railway infrastructure. Professional team with excellent project management skills.",
                },
                {
                  name: "Mr. Anil Singh",
                  role: "District Collector",
                  project: "Residential School Complex",
                  image:
                    "https://readdy.ai/api/search-image?query=Professional%20Indian%20government%20official%2C%20district%20collector%2C%20formal%20attire%2C%20confident%20administrative%20officer%2C%20office%20setting&width=80&height=80&seq=testimonial-collector&orientation=squarish",
                  feedback:
                    "Adyaraj Developers delivered a world-class educational facility. Highly recommended for government projects.",
                },
              ];

              const t = testimonials[i];

              return (
                <div
                  key={i}
                  className="bg-[#f7f9fc] rounded-xl shadow-md p-6 w-full max-w-sm mx-auto flex flex-col items-start"
                >
                  <div className="flex items-center mb-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-100 object-cover mr-3"
                    />
                    <div>
                      <div className="font-bold text-base text-gray-900">{t.name}</div>
                      <div className="text-xs text-gray-600">{t.role}</div>
                      <div className="text-xs text-[#E18B34]">{t.project}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <span key={starIdx} className="text-[#ffcc32] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic font-medium">
                    &quot;{t.feedback}&quot;
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
