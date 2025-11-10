import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Our Story", "Gallery", "Events", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-poppins ${
        scrolled
          ? "backdrop-blur-sm bg-[#043915]/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl md:text-3xl font-playfair text-[#E6E39C] tracking-wide"
        >
          Wedding Bliss
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-[#E6E39C] font-medium">
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            >
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="relative group transition font-medium"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#043915] group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
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

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="absolute top-full left-0 w-full bg-[#043915]/90 backdrop-blur-md md:hidden transition-all duration-300"
        >
          <ul className="flex flex-col items-center space-y-6 py-6 text-[#E6E39C] text-lg font-medium">
            {links.map((link) => (
              <li key={link} onClick={() => setMenuOpen(false)}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, "")}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
