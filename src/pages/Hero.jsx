import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/SAT06874-copy.jpg";

const Hero = () => {
  const firstLine = "Love isn’t something you find, it’s";
  const secondLine = "something that finds you.";

  // Letter animation variants
  const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative w-full h-[140vh] md:h-[150vh] lg:h-[160vh]">
      {/* Background Image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(
            rgba(4, 57, 21, 0.7),
            rgba(176, 206, 136, 0.3)
          ), url(${heroImage})`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 md:px-10 pt-40 md:pt-32 lg:pt-40">
        {/* Main Heading Letter-by-Letter */}
        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-[#E6E39C] mb-2">
          {firstLine.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair text-[#E6E39C] mb-4">
          {secondLine.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-[#043915] mb-8"
        >
          Join us for our special moments
        </motion.h2>

        {/* CTA Button */}
        <motion.a
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="#invitation"
          className="px-8 py-4 bg-[#E6E39C] hover:bg-[#B0CE88] text-[#043915] font-semibold rounded-full text-lg transition"
        >
          View Invitation
        </motion.a>

        {/* Scroll Down Arrow with Text */}
        <motion.div
          className="flex flex-col items-center mt-8 text-[#E6E39C]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="mt-1 text-[#E6E39C] text-sm md:text-base font-medium">
            Scroll Down
          </span>
          <motion.span
            className="text-3xl md:text-4xl font-bold"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
