import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer"; 
import GovernmentClients from "@/page/home/Client";


export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      
      <Navbar/>  
      <main className="pt-[80px]"></main>

      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://readdy.ai/api/search-image?query=Professional%20construction%20company%20office%20building%20exterior%2C%20modern%20corporate%20architecture%2C%20glass%20facade%20with%20steel%20structure%2C%20company%20signage%2C%20professional%20business%20environment%2C%20clean%20corporate%20design%2C%20bright%20daylight%2C%20architectural%20photography%20style&width=1920&height=600&seq=about-hero&orientation=landscape")`,
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            Building Excellence Since 2005
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Adyaraj Developers Pvt. Ltd. was conceived and formed in the year
              2005 by a team formed by Mr. Jitendra Kumar Roy, Managing Director
              of ADPL, with Co-founder Mr. Amrendra Kumar Amar. A group of
              qualified and dedicated persons experienced in various facets of
              constructional activities ensures to{" "}
              <span className="font-semibold">“design, develop and deliver”</span>{" "}
              quality and long-standing projects to our clients.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The group was pledged to meet the growing demands of construction
              industry both in the Government and in the Private Sector. We have
              been constantly innovating at every step of development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In our journey from 2005, we have exceeded customer expectations
              and built a name to live up to, delivering value to customers while
              raising the bar to a higher level every time.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="bg-orange-100 p-2 rounded-2xl shadow-lg">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20construction%20company%20founders%20and%20management%20team%2C%20business%20executives%20in%20formal%20attire%2C%20corporate%20portrait%20photography%2C%20modern%20office%20setting%2C%20confident%20leadership%20team%2C%20professional%20business%20environment%2C%20high-quality%20corporate%20photography&width=600&height=400&seq=founders&orientation=landscape"
                alt="Our Team"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
  
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-3 rounded-lg text-orange-500 text-xl">
              🎯
            </div>
            <h2 className="text-xl font-bold text-black">Our Vision</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-orange-500">•</span> To become the leading contractor in eastern India
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500">•</span> To achieve long-term goodwill through profit for shareholders
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500">•</span> Satisfaction to customers and enthusiasm without ego in self
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500">•</span> Training to colleagues and clarity with vendors
            </li>
          </ul>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-3 rounded-lg text-orange-500 text-xl">
              🚀
            </div>
            <h2 className="text-xl font-bold  text-black">Our Mission</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="text-orange-500">•</span> To excel in core infrastructure segments of railways, roads, urban development, power transmission
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500">•</span> To rise over competitors through innovation and excellence
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500">•</span> To encourage young and dynamic professionals in development work
            </li>
          </ul>
        </div>

      </div>
    </section>
    
 
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Process</h2>
        <p className="text-gray-600 mt-2">
          A customized three-phase process that ensures excellence in every project
        </p>
      </div>

      {/* Process Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* DESIGN */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
          <div className="bg-orange-600 w-16 h-16 flex items-center justify-center rounded-full text-3xl text-white">
            ✏️
          </div>
          <h3 className="mt-4 text-lg font-bold text-gray-900">DESIGN</h3>
          <p className="mt-3 text-gray-600 text-sm">
            The design of your project is a collaborative effort. 
            We study your business, budget constraints, and timeline for completion. 
            We determine the audience you would like to reach and create innovative solutions.
          </p>
        </div>

        {/* DEVELOP */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
          <div className="bg-orange-600 w-16 h-16 flex items-center justify-center rounded-full text-3xl text-white">
            🛠️
          </div>
          <h3 className="mt-4 text-lg font-bold text-gray-900">DEVELOP</h3>
          <p className="mt-3 text-gray-600 text-sm">
            We develop and assemble ideas and directions from our engineers and project managers. 
            Using the most efficient technology, we create an impression that is unique, consistent, and efficient.
          </p>
        </div>

        {/* DELIVER */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
          <div className="bg-orange-600 w-16 h-16 flex items-center justify-center rounded-full text-3xl text-white">
            🚚
          </div>
          <h3 className="mt-4 text-lg font-bold text-gray-900">DELIVER</h3>
          <p className="mt-3 text-gray-600 text-sm">
            Once the project has been approved, it’s time for us to deliver. 
            We also help our clients set up a plan for long-term maintenance of the project site, ensuring lasting value.
          </p>
        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
        <p className="text-gray-600 mt-2">
          The principles that guide everything we do
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        {/* Quality Assurance */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-lg text-2xl mb-4">
            🛡️
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Quality Assurance</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Uncompromising commitment to quality in every project we undertake
          </p>
        </div>

        {/* Timely Delivery */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-lg text-2xl mb-4">
            ⏰
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Timely Delivery</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Meeting deadlines with precision and efficient project management
          </p>
        </div>

        {/* Expert Team */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-lg text-2xl mb-4">
            👥
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Expert Team</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Qualified professionals with extensive experience in construction
          </p>
        </div>

        {/* Innovation */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-lg text-2xl mb-4">
            💡
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Constantly innovating with latest technology and construction methods
          </p>
        </div>

      </div>
    </section>
    {/* <Timeline/> */}
    <GovernmentClients/>
    <Footer/>
    </>
  );
}



