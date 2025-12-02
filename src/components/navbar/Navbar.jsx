
"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutUs" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contactUs" },
  ];

  return (
    <nav className="fixed w-full z-50 shadow-md">
      {/* Top Orange Strip */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-center px-2 py-1">
          <div className="flex gap-3 sm:gap-6 text-center">
            <span className="flex items-center gap-1 text-[6px] md:text-[12px]">
              <i className="ri-government-line"></i> GOVERNMENT CONTRACTS EXCLUSIVELY
            </span>
            <span className="flex items-center gap-1 text-[6px] md:text-[12px]">
              <i className="ri-shield-check-line"></i> CLASS A LICENSED
            </span>
            <span className="flex items-center gap-1 text-[6px] md:text-[12px]">
              <i className="ri-file-list-3-line"></i> ISO 9001:2015 & 45001:2018 Certified.
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 cursor-pointer group">
              <img
                src="/logo.png"
                alt="Adyaraj Developers Logo"
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  Adyaraj Developers
                </span>
                <span className="text-xs text-gray-500">Private Limited</span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 items-center">
              {/* About dropdown: uses CSS hover to rotate arrow */}
              <div className="group relative">
                <span className="flex items-center text-gray-700 hover:text-orange-600 cursor-pointer transition-colors duration-300">
                  About
                  {/* arrow points UP visually (use up icon) and rotates 180deg on hover (becomes down) */}
                  <i className="ri-arrow-up-s-line ml-1 transition-transform duration-300 group-hover:rotate-180" />
                </span>

                {/* Dropdown Menu (visible on hover) */}
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                  <Link
                    href="/aboutUs"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    Company Profile
                  </Link>

                  <Link
                    href="/aboutUs/directors-message"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    Director’s Message
                  </Link>

                  <Link
                    href="/aboutUs/our-network"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    Our Network
                  </Link>
                </div>
              </div>

              {/* Other Links */}
              {navLinks
                .filter((link) => link.name !== "About")
                .map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center text-gray-700 hover:text-orange-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
            </div>

            {/* Tender Info Button */}
            <div className="hidden md:block">
              <Link
                href="/"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md shadow-md transition"
              >
                <i className="ri-file-edit-line mr-1"></i> Tender Info
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu navLinks={navLinks} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
}
