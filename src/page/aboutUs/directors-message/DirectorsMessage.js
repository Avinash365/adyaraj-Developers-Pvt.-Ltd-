"use client";

import React from "react";
import {
  Quote,
  Building2,
  HardHat,
  Truck,
  Users,
  Wrench,
  Award,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function DirectorsMessage() {
  // Construction-focused strategic pillars
  const strategicPillars = [
    {
      title: "Our Vision",
      content:
        "To be the preferred partner for public infrastructure — delivering safe, durable, and cost-effective projects that connect communities and empower growth.",
      icon: <Building2 className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Safety & Compliance",
      content:
        "Safety is non-negotiable. We follow strict HSE protocols, continuous training, and on-site audits to ensure zero compromise on people and process.",
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Quality Assurance",
      content:
        "Our QC lab and experienced supervisors ensure materials and workmanship meet international standards and project specifications.",
      icon: <Award className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Sustainable Practices",
      content:
        "We minimise waste, adopt energy-efficient methods, and prioritize environmentally responsible construction techniques on every site.",
      icon: <Sparkles className="w-6 h-6 text-orange-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-20 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      {/* Container Card - Increased width from max-w-6xl to max-w-7xl */}
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-stone-100">
        {/* Top Banner / Hero */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 md:p-12 overflow-hidden">
          {/* decorative large quote in background */}
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Quote size={200} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <p className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-2">
                From the Desk of
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Managing Director
              </h1>
              <p className="mt-3 max-w-xl text-slate-200">
                Delivering safe and resilient infrastructure since 2005 — with
                transparent processes, accountable teams and a relentless focus
                on quality.
              </p>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <div className="h-px w-32 bg-orange-500 mb-4" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_0.9fr] gap-0">
          {/* Left Column: Narrative */}
          <main className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-stone-100">
            <div className="flex gap-4 mb-8">
              <Quote className="w-10 h-10 text-orange-200 flex-shrink-0" />
              {/* Added text-justify here */}
              <p className="text-xl md:text-2xl text-slate-700 font-serif italic leading-relaxed text-justify">
                  {"\"Building infrastructure is not merely about concrete and steel—it is about creating enduring value for the communities we serve and the partners who trust us.\""}
              </p>
            </div>

            {/* Added text-justify here */}
            <article className="prose prose-slate prose-lg text-slate-600 leading-relaxed space-y-6 text-justify">
              <p>
                Since our inception in 2005, Adyaraj Developers Pvt. Ltd. has
                been driven by a singular commitment: to deliver infrastructure
                projects that stand the test of time, executed with precision,
                integrity, and respect for all stakeholders.
              </p>

              <p>
                Over the past two decades, we have earned the confidence of
                leading government agencies and public sector undertakings
                across eastern India. From critical railway infrastructure and
                highways to institutional buildings and urban utilities, each
                project reflects our unwavering focus on robust engineering,
                transparent governance, and meticulous quality control.
              </p>

              <p>
                Our strength lies in our people—a dedicated team of qualified
                engineers, seasoned project managers, and skilled professionals
                who bring both expertise and accountability to every site.
                Supported by a modern fleet of construction equipment and a
                documented quality assurance framework, we ensure that every
                milestone is met with consistency and care.
              </p>

              <p>
                We recognize that our clients—including East Central Railway,
                Bihar Rajya Pul Nirman Nigam Limited, CPWD, and many other
                esteemed organizations—expect more than timely completion. They
                expect partners who understand regulatory rigor, anticipate
                challenges, and maintain open lines of communication from
                tendering through commissioning and beyond. This is the standard
                we uphold on every engagement.
              </p>

              <p>
                As we look to the future, our focus remains clear: expanding our
                execution capacity, integrating digital monitoring systems for
                real-time project oversight, and advancing sustainable
                construction practices that reduce environmental impact without
                compromising on timelines or quality. Innovation and
                responsibility must go hand in hand as we build the
                infrastructure of tomorrow.
              </p>

              <p>
                Our promise is straightforward: we deliver projects on time, to
                specification, and with deep respect for the communities and
                environments we operate in. We invest continuously in our
                people, our systems, and our equipment so that every partner
                receives measurable, lasting value.
              </p>

              <p>
                Thank you for your continued trust in Adyaraj Developers.
                Together, we are building not just structures, but a legacy of
                excellence and integrity in infrastructure development.
              </p>
            </article>

            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-stone-100 flex items-center gap-6">
              {/* Placeholder for Director's Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src="/images/leadership/jit.png"
                  alt="Director Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-2xl text-slate-900">
                  Mr. Jitendra Kumar Roy
                </p>
                <p className="text-xs uppercase tracking-wider text-orange-600 font-bold mt-1">
                  Managing Director
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Adyaraj Developers Pvt. Ltd.
                </p>
              </div>
            </div>
          </main>

          {/* Right Column: Strategic Pillars & Highlights */}
          <aside className="bg-stone-50/50 p-8 md:p-12">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-8">
              <span className="w-2 h-8 bg-orange-500 rounded-full" />
              Strategic Framework
            </h3>

            <div className="space-y-6">
              {strategicPillars.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md hover:border-orange-200 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Stats / Highlights */}
            <div className="mt-8 pt-8 border-t border-stone-200">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Core Capabilities
              </p>

              {/* Increased gap from 3 to 4 */}
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1: Increased padding from p-3 to p-5 */}
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 bg-white border border-stone-200 p-5 rounded-md h-full">
                  <div className="p-2 bg-orange-50 rounded-md text-orange-600 w-fit">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      Skilled Workforce
                    </div>
                    <div className="text-xs text-slate-500">
                      Certified & trained teams
                    </div>
                  </div>
                </div>

                {/* Card 2: Increased padding from p-3 to p-5 */}
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 bg-white border border-stone-200 p-5 rounded-md h-full">
                  <div className="p-2 bg-orange-50 rounded-md text-orange-700 w-fit">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      Equipment Fleet
                    </div>
                    <div className="text-xs text-slate-500">
                      Ready for mobilization
                    </div>
                  </div>
                </div>

                {/* Card 3: Increased padding from p-3 to p-5 */}
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 bg-white border border-stone-200 p-5 rounded-md h-full">
                  <div className="p-2 bg-orange-50 rounded-md text-orange-700 w-fit">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      Fabrication
                    </div>
                    <div className="text-xs text-slate-500">
                      Custom solutions
                    </div>
                  </div>
                </div>

                {/* Card 4: Increased padding from p-3 to p-5 */}
                <div className="flex flex-col xl:flex-row xl:items-center gap-3 bg-white border border-stone-200 p-5 rounded-md h-full">
                  <div className="p-2 bg-orange-50 rounded-md text-orange-700 w-fit">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      Certified QA Lab
                    </div>
                    <div className="text-xs text-slate-500">
                      Material testing
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="mt-6 bg-gradient-to-r from-white to-orange-50 border border-orange-100 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-orange-700">
                    Trusted Since 2005
                  </div>
                  <div className="text-xs text-slate-600">
                    Delivered diverse government infrastructure projects across
                    Eastern India.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}