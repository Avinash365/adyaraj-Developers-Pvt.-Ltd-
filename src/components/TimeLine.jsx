// components/Timeline.jsx

const timelineData = [
  { year: '2005', description: 'Company founded by Mr. Jitendra Kumar Roy and Mr. Amrendra Kumar Amar' },
  { year: '2007', description: 'First major railway infrastructure project completed' },
  { year: '2010', description: 'Expanded operations across Bihar and Jharkhand' },
  { year: '2015', description: 'Completed 25+ government projects' },
  { year: '2020', description: 'Achieved leading contractor status in Eastern India' },
  { year: '2024', description: 'Continuing excellence with 50+ completed projects' },
];

// Styling variables for easy customization
const styles = {
  dotColor: 'bg-orange-500',
  yearColor: 'text-orange-600',
  hoverEffect: 'hover:shadow-lg hover:scale-105 hover:border-orange-300',
  textColor: 'text-gray-800',
  cardBase: 'border border-gray-200 bg-white shadow-sm',
};

export default function Timeline() {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-2 text-black">Our Journey</h2>
      <p className="text-center text-gray-500 mb-10">Key milestones in our growth story</p>

      <div className="flex flex-col items-center space-y-6">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`
              w-full max-w-2xl 
              p-6 rounded-lg transition-all duration-300 transform 
              ${styles.cardBase} ${styles.hoverEffect}
            `}
          >
            <div className="flex items-start">
              <span className={`w-3 h-3 mt-2 rounded-full ${styles.dotColor} mr-4`}></span>
              <div>
                <div className={`font-semibold text-lg ${styles.yearColor}`}>{item.year}</div>
                <div className={`${styles.textColor}`}>{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
