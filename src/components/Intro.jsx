import React from "react";
import { motion } from "framer-motion";
import Bride from "../assets/Bride.jpg";
import Groom from "../assets/Groom.jpg";

const Intro = () => {
  const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const headingText = "Bride & Groom";
  const brideName = "Vinothani";
  const groomName = "Vinoth";

  return (
    <section className="py-16 bg-white text-[#043915] overflow-hidden">
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair text-center text-[#043915] mb-12"
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
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6">
        {/* Bride */}
        <motion.div
          className="flex flex-col items-center text-center max-w-xs"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#043915] mb-4 shadow-[0_8px_20px_rgba(4,57,21,0.2)] hover:shadow-[0_12px_30px_rgba(4,57,21,0.35)] transition-shadow duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={Bride}
              alt="Bride"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bride Name - letter by letter */}
          <motion.h3 className="text-2xl md:text-3xl font-playfair mb-2 text-[#043915]">
            {brideName.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h3>

          <p className="text-gray-600 font-playfair">
            Inspires hearts and minds, guiding with patience and wisdom.
          </p>
        </motion.div>

        {/* Groom */}
        <motion.div
          className="flex flex-col items-center text-center max-w-xs"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#043915] mb-4 shadow-[0_8px_20px_rgba(4,57,21,0.2)] hover:shadow-[0_12px_30px_rgba(4,57,21,0.35)] transition-shadow duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={Groom}
              alt="Groom"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Groom Name - letter by letter */}
          <motion.h3 className="text-2xl md:text-3xl font-playfair mb-2 text-[#043915]">
            {groomName.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h3>

        <p className="text-gray-600 font-playfair">
          Protects the community with courage, honor, and dedication each day.
        </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
