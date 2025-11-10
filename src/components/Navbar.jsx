// Navbar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedMenuLinks from "./AnimatedMenuLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-poppins bg-transparent md:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-playfair text-[#E6E39C] tracking-wide">
          Wedding Bliss
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-[#E6E39C] font-medium">
          {["Home", "Our Story", "Gallery", "Events", "Contact"].map(
            (link, i) => (
              <li key={i}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                  className="relative group transition font-medium"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#043915] group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            )
          )}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <AnimatedMenuLinks closeMenu={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
