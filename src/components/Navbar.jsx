import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedMenuLinks from "./AnimatedMenuLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "Our Story", "Gallery", "Events"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-poppins transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-sm bg-[#043915]/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-playfair text-[#E6E39C] tracking-wide">
          Wedding Bliss
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-[#E6E39C] font-medium">
          {links.map((link, i) => {
            const id = link.toLowerCase().replace(/\s+/g, "");
            return (
              <li key={i}>
                <a
                  href={`#${id}`}
                  className="relative group transition font-medium"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#043915] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-[#E6E39C] text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && <AnimatedMenuLinks closeMenu={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
