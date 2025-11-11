import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#043915] text-[#E6E39C] font-playfair py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        
        {/* Left Column: HustleMind Co */}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">HustleMind Co.</h1>
          <p className="text-base leading-relaxed mb-4">
            HustleMind Co is a freelance development company creating modern, 
            responsive web and app solutions that bring your ideas to life 
            with creativity and precision.
          </p>
            {/* Email and Phone for HustleMind Co */}
            <p className="text-sm mt-2">
                Email: <a href="mailto:hustlemindc@gmail.com" className="text-[#B0CE88] hover:underline">
                    hustlemindc@gmail.com
                </a> <br />
                Phone: <a href="tel:+94701503246" className="text-[#B0CE88] hover:underline">
                    +94 70 150 3246
                </a>
            </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://www.instagram.com/_hustlemind.co?igsh=MTR0ZjI1dnVzMXR4eA==" className="hover:text-[#E6E39C] transition">
              <FaInstagram />
            </a>
            <a href="https://whatsapp.com/channel/0029Vb4LjU6F1YlO2EjcVh1p" className="hover:text-[#E6E39C] transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Middle Column: Photography Studio */}
        <div className="md:w-1/3 text-center">
          <h1 className="text-3xl font-bold mb-4">Photographic Credits</h1>
          <p className="text-xl text-center leading-relaxed mb-2">
            Studio Ravana
          </p>
          {/* Email and Phone for Studio */}
            <p className="text-sm mt-2">
                Email: <a href="mailto:studioravanalk@gmail.com" className="text-[#B0CE88] hover:underline">
                    studioravanalk@gmail.com
                </a> <br />
                Phone: <a href="tel:+94763333673" className="text-[#B0CE88] hover:underline">
                    +94 76 333 3673
                </a>
            </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.facebook.com/studioravana" className="hover:text-[#E6E39C] transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/studio_ravana?igsh=Y2Zxam83dWtsNHpn" className="hover:text-[#E6E39C] transition">
              <FaInstagram />
            </a>
            <a href="https://wa.me/c/94763333673" className="hover:text-[#E6E39C] transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right Column: Quick Links */}
        <div className="md:w-1/3 text-center md:text-right">
          <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 mb-2">
            <li>
              <a href="#home" className="hover:text-[#E6E39C] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#ourstory" className="hover:text-[#E6E39C] transition">
                Our Story
              </a>
            </li>
            <li>
              <a href="#event" className="hover:text-[#E6E39C] transition">
                Event
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#E6E39C] transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-[#E6E39C]/50 pt-4 text-center text-sm footer-text">
        &copy; {new Date().getFullYear()} HustleMind Co. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
