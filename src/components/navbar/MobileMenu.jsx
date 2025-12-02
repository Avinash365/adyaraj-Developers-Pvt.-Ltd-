"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ navLinks, menuOpen, setMenuOpen }) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden backdrop-blur-md bg-white/95 shadow-lg border-t border-gray-200"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 
                           hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* Tender Info button with hover effect */}
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
