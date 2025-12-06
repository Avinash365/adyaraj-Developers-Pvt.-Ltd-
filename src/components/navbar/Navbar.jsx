"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutUs" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contactUs" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cleanup hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  /**
   * isActive(href, exact = false)
   * - For "/" (root) we match only when pathname === "/"
   * - If exact=true we require pathname === href
   * - Otherwise we match either exact or pathname starting with href + "/"
   */
  const isActive = (href, exact = false) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Hover handlers (desktop). We keep a short delay when closing to avoid accidental flicker.
  const handleAboutMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    // small delay so user can move cursor into menu
    hoverTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
      hoverTimeoutRef.current = null;
    }, 120);
  };

  // Toggle on click (useful for keyboard/touch)
  const handleAboutClick = (e) => {
    e.preventDefault();
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setAboutOpen((s) => !s);
  };

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
            <div className="hidden lg:flex space-x-6 items-center">
              {navLinks.map((link) => {
                // ABOUT DROPDOWN (placed in correct order)
                if (link.name === "About") {
                  const aboutActive = isActive("/aboutUs"); // main About highlighted when any about page or nested

                  return (
                    <div
                      key="About"
                      ref={aboutRef}
                      // important: wrapper contains both the button and the menu so mouse stays inside
                      onMouseEnter={handleAboutMouseEnter}
                      onMouseLeave={handleAboutMouseLeave}
                      className="relative"
                    >
                      <button
                        onClick={handleAboutClick}
                        aria-expanded={aboutOpen}
                        aria-haspopup="true"
                        className={`flex items-center gap-2 transition-colors duration-200 px-2 py-1 rounded-md ${
                          aboutActive ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                        }`}
                      >
                        {/* reversed icon logic (down when closed, up when open) */}
                        <span className="select-none">About</span>
                        <i
                          className={`ri-arrow-down-s-line transition-transform duration-200 ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        />
                      </button>

                      <div
                        // show on desktop only (desktop links are hidden on mobile)
                        className={`absolute left-0 mt-3 min-w-[220px] bg-white rounded-none shadow-2xl z-50 transform transition-all duration-200 origin-top overflow-hidden ${
                          aboutOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                        role="menu"
                        aria-label="About submenu"
                        style={{ willChange: "transform, opacity" }}
                      >
                        <div className="py-2">
                          <Link
                            href="/aboutUs"
                            onClick={() => setAboutOpen(false)}
                            className={`flex items-center px-4 py-2 text-sm ${
                              isActive("/aboutUs", true)
                                ? "text-orange-600 bg-orange-50"
                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                            }`}
                            role="menuitem"
                          >
                            <i className="ri-building-4-line mr-3 text-lg"></i>
                            Company Profile
                          </Link>

                          <Link
                            href="/aboutUs/directors-message"
                            onClick={() => setAboutOpen(false)}
                            className={`flex items-center px-4 py-2 text-sm ${
                              isActive("/aboutUs/directors-message", true)
                                ? "text-orange-600 bg-orange-50"
                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                            }`}
                            role="menuitem"
                          >
                            <i className="ri-user-voice-line mr-3 text-lg"></i>
                            Director’s Message
                          </Link>

                          <Link
                            href="/aboutUs/our-network"
                            onClick={() => setAboutOpen(false)}
                            className={`flex items-center px-4 py-2 text-sm ${
                              isActive("/aboutUs/our-network", true)
                                ? "text-orange-600 bg-orange-50"
                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                            }`}
                            role="menuitem"
                          >
                            <i className="ri-share-forward-line mr-3 text-lg"></i>
                            Our Network
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Normal nav links (Home special-cased inside isActive)
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center transition-colors duration-200 px-2 py-1 rounded-md ${
                      isActive(link.href) ? "text-orange-600" : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Tender Info Button */}
            <div className="hidden lg:block">
              <Link
                href="/"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md shadow-md transition"
              >
                <i className="ri-file-edit-line mr-1"></i> Tender Info
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
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
