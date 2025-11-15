import React from "react";
import { motion } from "framer-motion";
import storyImage from "../assets/SAT07095.png";

const OurStory = () => {
  const headingText = "Our Love Story";

  // Letter animation for heading
  const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Image animation
  const imageVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Paragraph animation
  const paragraphVariant = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 + i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  const paragraphs = [
    `Eleven beautiful years ago, two hearts found their rhythm — on the serene evening of May 18, 2015, our story began with a quiet promise and a shared dream. What started as a gentle spark soon grew into an unshakable bond that withstood every storm that crossed our path.`,
    `Through moments of doubt and endless patience, we never let go of each other’s hands. Love, we learned, isn’t about perfection — it’s about faith in “us.”`,
    `After years of trials, tears, and triumphs, our families now stand with hearts full of blessings. And now, on the 27th, our long-awaited dream finally blooms into a lifetime promise — a celebration of love that never gave up.`
  ];

  return (
    <section className="py-20 bg-[#E6E39C] text-[#043915] font-playfair">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6 md:px-16">
        
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-80 h-[480px] md:w-[420px] md:h-[480px] overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(4,57,21,0.25)] hover:shadow-[0_12px_36px_rgba(4,57,21,0.35)] transition-shadow duration-500">
            <img
              src={storyImage}
              alt="Our Love Story"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>

        {/* Right Side - Story Text */}
        <div className="w-full md:w-1/2 text-center md:text-left leading-relaxed">
          
          {/* Animated Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-[#043915]"
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

          {/* Animated Paragraphs */}
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={paragraphVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`mt-4 text-lg text-[#06491b]/90 ${i === 0 ? "mt-0" : ""}`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
