"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ navLinks, menuOpen, setMenuOpen }) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden backdrop-blur-md bg-white/95 shadow-lg border-t border-gray-200"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">

            {navLinks.map((link) => {
              // ABOUT DROPDOWN (NO ICON HERE)
              if (link.name === "About") {
                return (
                  <div key="About">
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700
                                 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300"
                    >
                      <span>About</span>

                      {/* + / - toggle */}
                      <i
                        className={`text-xl ${
                          aboutOpen ? "ri-subtract-line" : "ri-add-line"
                        }`}
                      ></i>
                    </button>

                    {/* Submenu Animation */}
                    <AnimatePresence>
                      {aboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="ml-6 mt-1 space-y-2"
                        >
                          <a
                            href="/aboutUs"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700
                                       hover:text-orange-600 hover:bg-orange-50 transition"
                          >
                            <i className="ri-building-4-line text-lg"></i>
                            Company Profile
                          </a>

                          <a
                            href="/aboutUs/directors-message"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700
                                       hover:text-orange-600 hover:bg-orange-50 transition"
                          >
                            <i className="ri-user-voice-line text-lg"></i>
                            Director’s Message
                          </a>

                          <a
                            href="/aboutUs/our-network"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700
                                       hover:text-orange-600 hover:bg-orange-50 transition"
                          >
                            <i className="ri-share-forward-line text-lg"></i>
                            Our Network
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              //  Normal menu items
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700
                             hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300"
                >
                  {link.name}
                </a>
              );
            })}

            {/* Tender Info button */}
            <motion.a
              href="/quote"
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full text-center mt-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md shadow-md transition"
            >
              <i className="ri-file-edit-line mr-1"></i> Tender Info
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
