
export default function OurNetwork() {
  const jointVentures = [
    "SUPER ADYARAJ CONSTRUCTION COMPANY JV",
    "ADYARAJ MACRO RANJAN CON JV",
    "SAM INDIA ADYARAJ JV",
    "SHANTI ADYARAJ JV",
  ];

  const plantMachinery = [
    "SCAFOLDING",
    "WATER TANK",
    "TRANSIT MIXER",
    "CONCRETE PUMP",
    "GENERATORS SETS",
    "CONCRETE MIXER",
    "SELF LOADER",
    "POWER DRIVEN EARTH RAMMER",
    "FULLY EQUIPPED QC LAB",
    "FABRICATION EQUIPMENT",
    "SHUTTERING PLATE, SPANNER & JACKS",
    "TOWER HOIST WITH WINCH MACHINE",
    "POCLAIN, DUMPER, TRACTOR & LOADER",
    "BATCHING PLANT ELECTRICALLY OPERATED",
    "SURVEY EQUIPMENT WITH TOTAL STATION",
    "COMPRESSOR WITH BREAKERS & JACK HAMMERS",
  ];

  const strengths = [
    { team: "Administrator & Management", members: 7 },
    { team: "Accounts & Finance", members: 11 },
    { team: "Engineers", members: 25 },
    { team: "Supervisors", members: 41 },
    { team: "Foreman & Electrician", members: 14 },
    { team: "Operators & Mechanics", members: 30 },
    { team: "Marketing & Stores", members: 18 },
    { team: "Care Taker & Watchman", members: 20 },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-orange-500">
            Company Presence
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600">
            Our Network
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Joint Ventures Section */}
        <section className="relative group p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-orange-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute -top-4 left-6 px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-semibold shadow-sm">
            Strategic Collaborations
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700">
              Our Network of Joint Ventures
            </span>
          </h2>

          <div className="space-y-4">
            {jointVentures.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-r from-sky-50 to-emerald-50 p-4 rounded-xl shadow-sm border border-sky-100 hover:shadow-md hover:bg-gradient-to-br transition-all duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-sky-500 text-sky-700 font-bold">
                  {index + 1}
                </div>
                <span className="font-semibold text-slate-800 text-sm sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Plant & Machinery Section */}
        <section className="relative group p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-emerald-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute -top-4 left-6 px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800 font-semibold shadow-sm">
            Infrastructure & Assets
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700">
              Plant & Machinery
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plantMachinery.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-sky-50 p-4 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md hover:bg-gradient-to-br transition-all duration-200"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white border-2 border-emerald-500 text-emerald-700 text-sm font-bold">
                  {index + 1}
                </div>
                <span className="font-medium text-slate-900 text-sm sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Strength Section */}
        <section className="relative group p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-indigo-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div className="absolute -top-4 left-6 px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800 font-semibold shadow-sm">
            Human Capital
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-600">
              Our Strength
            </span>
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 sm:p-4 border-r border-slate-700">Sr. No.</th>
                  <th className="p-3 sm:p-4 border-r border-slate-700">Name of Team</th>
                  <th className="p-3 sm:p-4">Members</th>
                </tr>
              </thead>
              <tbody>
                {strengths.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-t border-slate-200 transition-colors duration-150 hover:bg-indigo-50 ${
                      index % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }`}
                  >
                    <td className="p-3 sm:p-4 border-r border-slate-200">
                      {index + 1}
                    </td>
                    <td className="p-3 sm:p-4 border-r border-slate-200 font-medium text-slate-800">
                      {row.team}
                    </td>
                    <td className="p-3 sm:p-4 font-semibold text-indigo-700">
                      {row.members}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

