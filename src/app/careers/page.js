import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ApplicationForm from "@/page/careers/ApplicationForm";

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]"></main>

      {/* Hero Section */}
      <section
        className="w-full h-[350px] flex items-center justify-center relative"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url("https://readdy.ai/api/search-image?query=Professional%20construction%20team%20at%20work%2C%20diverse%20group%20of%20engineers%20and%20construction%20workers%2C%20modern%20construction%20site%2C%20teamwork%20and%20collaboration%2C%20career%20opportunities%20in%20construction%2C%20professional%20development%2C%20bright%20workplace%20environment&width=1920&height=600&seq=careers-hero&orientation=landscape")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10 text-center w-full px-4">
          <h1 className="text-white text-3xl sm:text-4xl font-bold drop-shadow mb-2">
            Join Our Team
          </h1>
          <p className="text-white text-base sm:text-lg font-medium drop-shadow">
            Build Your Career with Eastern India&apos;s Leading Construction Company
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-[#fafbfc]">
        <div className="text-center mb-10 px-4">
          <span className="bg-orange-100 text-orange-600 font-medium px-3 py-1 rounded-full text-xs">
            Careers at Adyaraj
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">
            Why Choose <span className="text-orange-600">Adyaraj Developers?</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Join a company that values innovation, excellence, and professional growth.  
            Be part of building India&apos;s infrastructure future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              icon: "₹",
              title: "Competitive Salary",
              desc: "Industry-leading compensation packages with performance bonuses",
            },
            {
              icon: "🩺",
              title: "Health Insurance",
              desc: "Comprehensive medical coverage for employees and their families",
            },
            {
              icon: "🎓",
              title: "Professional Development",
              desc: "Training programs, certifications, and career advancement opportunities",
            },
            {
              icon: "📅",
              title: "Work-Life Balance",
              desc: "Flexible working arrangements and generous leave policies",
            },
            {
              icon: "🤝",
              title: "Team Environment",
              desc: "Collaborative workplace with experienced professionals",
            },
            {
              icon: "🔦",
              title: "Recognition Programs",
              desc: "Employee appreciation and achievement recognition initiatives",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
            >
              <span className="bg-[#ffe6ca] text-[#E9A663] rounded-xl mb-3 flex items-center justify-center w-10 h-10 text-2xl">
                {item.icon}
              </span>
              <h3 className="font-semibold text-base text-[#22223B] mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-14 bg-white">
        <div className="text-center mb-10 px-4">
          <span className="bg-orange-100 text-orange-600 font-medium px-3 py-1 rounded-full text-xs">
            Hiring Process
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">
            Simple &amp; Transparent <span className="text-orange-600">Application</span> Steps
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We believe in a fair and efficient hiring process to connect the right talent with the right opportunity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-6xl mx-auto px-4">
          {[
            {
              step: "01",
              title: "Apply Online",
              desc: "Submit your application through our career portal with your resume and cover letter.",
            },
            {
              step: "02",
              title: "Initial Screening",
              desc: "Our HR team reviews applications and conducts initial phone screening.",
            },
            {
              step: "03",
              title: "Technical Interview",
              desc: "Interview with project leads and department heads based on your expertise.",
            },
            {
              step: "04",
              title: "Final Selection",
              desc: "Reference checks followed by a formal offer to selected candidates.",
            },
          ].map((step, idx) => (
            <div key={idx} className="flex-1 text-center px-3">
              <div className="bg-[#ec6608] text-white rounded-full w-14 h-14 flex items-center justify-center text-lg font-bold mx-auto mb-3 shadow">
                {step.step}
              </div>
              <h3 className="text-base font-semibold text-[#22223B] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ApplicationForm />
      <Footer />
    </>
  );
}
