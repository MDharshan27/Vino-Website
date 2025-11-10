// AnimatedMenuLinks.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const menuLinks = [
  { path: "./", label: "Hero" },
  { path: "./ourstory", label: "OurStory" },
  { path: "./countdown", label: "Countdown" },
  { path: "./gallery", label: "Gallery" },
  { path: "./event", label: "Event" },
];

const AnimatedMenuLinks = ({ closeMenu }) => {
  const linksRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      linksRef.current,
      { y: 75, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      }
    );
  }, []);

  const handleLinkClick = (path) => {
    window.location.href = path;
    closeMenu();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#043915] z-50 flex flex-col justify-center items-start px-12">
      {/* Close Button */}
      <div
        className="absolute top-4 right-6 text-4xl md:text-5xl text-[#E6E39C] cursor-pointer z-50"
        onClick={closeMenu}
      >
        ✕
      </div>


      {/* Menu Links */}
      <div className="w-full">
        {menuLinks.map((link, index) => (
          <div
            key={index}
            ref={(el) => (linksRef.current[index] = el)}
            className="overflow-hidden my-5"
          >
            <div
              className="cursor-pointer"
              onClick={() => handleLinkClick(link.path)}
            >
              <span
                className="block text-[#E6E39C] text-4xl md:text-6xl font-light font-playfair tracking-tight leading-snug hover:text-white transition-all duration-300"
              >
                {link.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedMenuLinks;
