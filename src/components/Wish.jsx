import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wishImage from "../assets/SAT06892.png";

const Wish = () => {
  const headingText =
    "“In your eyes, I found my home — in your heart, my forever.”";

  const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };

  const paragraphVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 + i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  const paragraphLines = [
    "Today we celebrate not just love, but destiny —",
    "two souls meant to meet,",
    "two hearts choosing to beat as one,",
    "and a lifetime of memories yet to come.",
  ];

  // State to hold background position
  const [bgPosition, setBgPosition] = useState("bottom right");

  // Update background position based on screen size
  useEffect(() => {
    const updateBgPosition = () => {
      const w = window.innerWidth;
      if (w <= 480) setBgPosition("70% 95%");
      else if (w <= 768) setBgPosition("60% 80%");
      else if (w <= 1024) setBgPosition("55% 75%");
      else setBgPosition("50% 70%");
    };

    updateBgPosition();
    window.addEventListener("resize", updateBgPosition);
    return () => window.removeEventListener("resize", updateBgPosition);
  }, []);

  return (
    <section className="relative w-full h-[120vh] md:h-[130vh] lg:h-[140vh] flex items-start justify-start text-[#FFFD8F] font-playfair overflow-hidden py-20 px-6 md:px-16">
      {/* Background Image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.3)
          ), url(${wishImage})`,
          backgroundSize: "cover",
          backgroundPosition: bgPosition,
        }}
      ></div>

      {/* Overlay Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-left mt-0 md:mt-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-snug break-normal whitespace-pre-wrap"
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Animated Paragraph */}
        {paragraphLines.map((line, i) => (
          <motion.p
            key={i}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#E6E39C] font-light leading-relaxed max-w-full md:max-w-3xl mb-1 md:mb-2 break-normal whitespace-pre-wrap"
            custom={i}
            variants={paragraphVariant}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Wish;
