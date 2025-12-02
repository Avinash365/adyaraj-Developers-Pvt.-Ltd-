'use client';

import Head from "next/head";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const info = [
    {
      icon: <MapPin className="w-6 h-6 text-orange-600" />,
      title: "Head Office",
      text: "202, Vishnu Palace\nEast Boring Canal Road\nPatna, Bihar - 800001",
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-600" />,
      title: "Contact Numbers",
      text: "+91 9334485893\n0612-2520018\n0612-6604972",
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-600" />,
      title: "Email",
      text: "webmail@adyaraj.com\nadyaraj.developers.p@gmail.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Working Hours",
      text: "Mon - Fri: 9 AM - 6 PM\nSat: 9 AM - 2 PM\nSunday: Closed",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Us | Adyaraj Developers Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get in touch with Adyaraj Developers Pvt. Ltd. for government infrastructure, road, and building projects across India."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-center overflow-hidden">
        {/* Replace orange gradient with your image */}
        <div className="absolute inset-0">
          <img
            src="/images/other/4.jpg"
            alt="Contact Us Banner"
            className="w-full h-full object-cover"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="z-10 space-y-4 px-6"
        >
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            Contact Us
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            For government projects, official communication, and partnership queries.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[60%_auto] gap-10 items-center">
          
          {/* Info Cards */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900"
            >
              Get in Touch
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-gray-600 leading-relaxed"
            >
              We ensure timely communication for all our ongoing and upcoming government projects.
              Our team will respond through the proper official channels.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {info.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="h-[150px] w-full p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100 hover:border-orange-300 hover:shadow-2xl transition duration-300 flex flex-col justify-center"
                >
                  <div className="flex items-start gap-4">
                    <span className="bg-orange-100 p-4 rounded-xl flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[380px]"
          >
            <a
              href="https://www.google.com/maps/place/Vishnu+Place/@25.615555,85.118199,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.679764156337!2d85.11819946107003!3d25.615555414534303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59006999e49f%3A0xf9466ce71d4df3ba!2sVishnu%20Place!5e0!3m2!1sen!2sin!4v1762935444296!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="border-0 pointer-events-none"
              ></iframe>
            </a>
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="relative bg-gray-900 py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/other/1.jpg')] bg-cover bg-center opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Building Trust Through Infrastructure
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Adyaraj Developers Pvt. Ltd. stands for integrity, efficiency, and long-term commitment to public development projects across India.
          </p>
        </motion.div>
      </section>
    </>
  );
}
