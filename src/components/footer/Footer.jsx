// components/Footer.jsx
import "remixicon/fonts/remixicon.css";

const companyInfo = {
  name: "Adyaraj Developers",
  description:
    "A trusted construction partner specializing in government projects across Eastern India. We deliver quality public infrastructure with innovation and integrity.",
  tagline: "DESIGN • DEVELOP • DELIVER",
};

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },

//   { name: "Company Profile", href: "/about/company-profile" },
// { name: "Director's Message", href: "/about/directors-message" },
// { name: "Our Network", href: "/about/our-network" },

  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const contactInfo = {
  address: [
    "202, Vishnu Palace",
    "East Boring Canal Road",
    "Patna, Bihar - 800001",
  ],
  phone: "+91 9334485593, +91 9431050079, +91 9472884865",
  email: "webmail@adyaraj.com,  adyaraj.dev@gmail.com",
  icons: {
    address: "ri-map-pin-line",
    phone: "ri-phone-line",
    email: "ri-mail-line",
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#0d1421] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            {companyInfo.name}
          </h2>
          <p className="leading-relaxed">{companyInfo.description}</p>
          <p className="mt-4 text-orange-400 font-semibold tracking-wide uppercase text-xs">
            {companyInfo.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i
                className={`${contactInfo.icons.address} text-orange-400 text-xl`}
              ></i>
              <span className="leading-relaxed">
                {contactInfo.address.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </span>
            </li>

            <li className="flex items-center gap-3">
              <i className={`${contactInfo.icons.phone} text-orange-400 text-xl`}></i>
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:text-orange-400 transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
            </li>

            <li className="flex items-center gap-3">
              <i className={`${contactInfo.icons.email} text-orange-400 text-xl`}></i>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-orange-400 transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-gray-500 text-xs py-4">
        © {new Date().getFullYear()} {companyInfo.name} Pvt. Ltd. | All Rights
        Reserved
      </div>
    </footer>
  );
}
