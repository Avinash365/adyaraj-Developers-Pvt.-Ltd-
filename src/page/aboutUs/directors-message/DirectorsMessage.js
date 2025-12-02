

export default function DirectorsMessage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-orange-50 to-white flex justify-center pt-32 px-4 sm:px-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-orange-500 mb-2">
            Message from the Director
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-orange-600">
            Director&apos;s Message
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Intro with highlight card */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-8 mb-10">
          <p className="text-[15px] sm:text-lg leading-relaxed text-gray-700 text-justify">
            Welcome to our institution. Our mission is to empower students with knowledge,
            skills, and values that shape them into future leaders. This page presents a
            structured overview of our vision, goals, achievements, and commitments.
          </p>

          <div className="bg-white border border-orange-100 shadow-md rounded-xl p-4 sm:p-5 flex flex-col gap-2">
            <h2 className="text-base sm:text-lg font-semibold text-orange-600 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-sm font-bold">
                ⭐
              </span>
              At a Glance
            </h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✔ Focus on holistic development</li>
              <li>✔ Student-centric academic ecosystem</li>
              <li>✔ Strong industry and research orientation</li>
            </ul>
          </div>
        </div>

        {/* Information Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="p-4 text-left text-sm sm:text-base">Section</th>
                <th className="p-4 text-left text-sm sm:text-base">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm sm:text-base">
              <tr className="border-b border-gray-200 hover:bg-orange-50/60 transition-colors">
                <td className="p-4 font-semibold">Director&apos;s Vision</td>
                <td className="p-4">
                  To lead the institution toward academic excellence and holistic development.
                </td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-orange-50/60 transition-colors">
                <td className="p-4 font-semibold">Core Values</td>
                <td className="p-4">
                  Integrity, Innovation, Inclusivity, and Commitment to Growth.
                </td>
              </tr>

              <tr className="border-b border-gray-200 hover:bg-orange-50/60 transition-colors">
                <td className="p-4 font-semibold">Achievements</td>
                <td className="p-4">
                  The institution has consistently ranked among the top for academic
                  excellence and student satisfaction.
                </td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50 hover:bg-orange-50/60 transition-colors">
                <td className="p-4 font-semibold">Future Goals</td>
                <td className="p-4">
                  Expansion of research programs, digital transformation, and global
                  collaborations.
                </td>
              </tr>

              <tr className="hover:bg-orange-50/60 transition-colors">
                <td className="p-4 font-semibold">Message to Students</td>
                <td className="p-4">
                  Believe in yourself, stay consistent, and embrace learning at every
                  stage. The future belongs to those who prepare today.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Info Badges */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-orange-100 text-orange-700 font-medium">
            Student First Approach
          </span>
          <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-green-100 text-green-700 font-medium">
            Research & Innovation
          </span>
          <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            Global Exposure
          </span>
        </div>

        {/* Closing Message */}
        <div className="mt-10 grid md:grid-cols-[1fr,auto] gap-6 items-end">
          <div className="text-[15px] sm:text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              As the Director, I am proud to lead such a vibrant and dedicated community.
              Our collective efforts continue to shape a brighter and more innovative future.
              I invite every student and faculty member to join hands in this journey of
              excellence.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="h-16 w-16 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-2xl">
              🎓
            </div>
            <p className="mt-2 font-semibold text-orange-600 text-base sm:text-lg">
              - Director
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Committed to Excellence & Growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
