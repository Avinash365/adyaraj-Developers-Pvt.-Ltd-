"use client";

import React from "react";
import {
  Building2,
  HardHat,
  Truck,
  Users,
  Briefcase,
  Wrench,
  Activity,
  ShieldCheck,
  Zap,
  Hammer,
} from "lucide-react";

export default function OurNetwork() {
  const jointVentures = [
    "SUPER ADYARAJ CONSTRUCTION COMPANY JV",
    "ADYARAJ MACRO RANJAN CON JV",
    "SAM INDIA ADYARAJ JV",
    "SHANTI ADYARAJ JV",
  ];

  const plantMachinery = [
    "Scaffolding Systems",
    "Water Tankers",
    "Transit Mixers",
    "Concrete Pumps",
    "Generator Sets",
    "Concrete Mixers",
    "Self Loaders",
    "Earth Rammers",
    "Fully Equipped QC Lab",
    "Fabrication Equipment",
    "Shuttering / Jacks",
    "Tower Hoists",
    "Poclain / Dumpers",
    "Batching Plants",
    "Total Station Survey",
    "Breakers & Jack Hammers",
  ];

  const strengths = [
    { team: "Admin & Management", members: 7, icon: <Briefcase className="w-5 h-5" /> },
    { team: "Accounts & Finance", members: 11, icon: <Activity className="w-5 h-5" /> },
    { team: "Engineers", members: 25, icon: <HardHat className="w-5 h-5" /> },
    { team: "Supervisors", members: 41, icon: <ShieldCheck className="w-5 h-5" /> },
    { team: "Foreman & Electrician", members: 14, icon: <Zap className="w-5 h-5" /> },
    { team: "Operators & Mechanics", members: 30, icon: <Wrench className="w-5 h-5" /> },
    { team: "Marketing & Stores", members: 18, icon: <Users className="w-5 h-5" /> },
    { team: "Care Taker & Watchman", members: 20, icon: <Building2 className="w-5 h-5" /> },
  ];

  // compute totals for progress bars and summary
  const totalMembers = strengths.reduce((s, r) => s + r.members, 0);
  const maxMembers = Math.max(...strengths.map((s) => s.members), 1);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 relative">
      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#475569 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 space-y-24">
        {/* Header */}
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Company Infrastructure
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Network & <span className="text-orange-600">Assets</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Building the future with strong partnerships, state-of-the-art machinery, and a dedicated workforce.
          </p>
        </header>

        {/* Joint Ventures */}
        <section aria-labelledby="jv-heading">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-slate-900 rounded-lg text-white">
              <Building2 size={20} aria-hidden />
            </div>
            <h2 id="jv-heading" className="text-2xl font-bold text-slate-900">
              Strategic Joint Ventures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jointVentures.map((item, index) => (
              <article
                key={`jv-${index}`}
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                aria-label={item}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110 pointer-events-none" />
                <div className="relative flex items-center gap-5">
                  <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 text-slate-900 font-bold text-lg border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {index + 1}
                  </span>

                  <h3 className="font-semibold text-slate-800 text-lg group-hover:text-orange-600 transition-colors">
                    {item}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Plant & Machinery */}
        <section aria-labelledby="plant-heading">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-orange-600 rounded-lg text-white">
              <Truck size={20} aria-hidden />
            </div>
            <h2 id="plant-heading" className="text-2xl font-bold text-slate-900">
              Plant & Machinery
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {plantMachinery.map((item, index) => (
                <div
                  key={`pm-${index}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-orange-50 hover:border-orange-100 transition-colors duration-200"
                >
                  <Hammer className="w-4 h-4 text-slate-400" aria-hidden />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strength / Workforce */}
        <section aria-labelledby="strength-heading">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <Users size={20} aria-hidden />
            </div>
            <div>
              <h2 id="strength-heading" className="text-2xl font-bold text-slate-900">
                Workforce Strength
              </h2>
              <p className="text-slate-500 text-sm">Active personnel across all departments</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((row, index) => {
              const pct = Math.round((row.members / maxMembers) * 100);
              return (
                <div
                  key={`strength-${index}`}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-100 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div
                      className="p-2 bg-slate-50 rounded-lg text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors"
                      aria-hidden
                    >
                      {row.icon}
                    </div>

                    <span className="text-3xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {row.members}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 text-sm">{row.team}</h4>

                    <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden" aria-hidden>
                      <div
                        className="h-full bg-slate-800 group-hover:bg-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TOTAL CARD */}
          <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border border-slate-200 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 via-slate-100 to-white opacity-70 pointer-events-none"></div>

            <h3 className="relative text-sm font-semibold text-slate-600 tracking-wide">
              Total Workforce Strength
            </h3>

            <div className="relative mt-3 text-4xl md:text-5xl font-extrabold text-indigo-700 flex justify-center items-center gap-3">
              <span className="animate-pulse">{totalMembers}</span>
              <Users className="w-8 h-8 opacity-70" />
            </div>

            <p className="relative mt-2 text-xs text-slate-500">
              Dedicated professionals across all departments
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
