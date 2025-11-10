import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({});

  // Set your wedding date here
  const weddingDate = new Date("2025-11-27T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const headingText = "Countdown to Our Special Day";

  const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };

  const numberVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const countdownUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 md:py-16 bg-white text-[#043915] font-playfair">
        <motion.div
            className="flex flex-col items-center justify-center gap-8 md:gap-12 px-6 md:px-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Animated Heading */}
            <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
            {headingText.split("").map((char, index) => (
                <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.5, ease: "easeOut" }}
                className="inline-block"
                >
                {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
            </motion.h2>

            {/* Countdown Numbers */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 mt-8">
            {countdownUnits.map((unit, i) => (
                <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.8, ease: "easeOut" }}
                >
                <span className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
                    {unit.value ?? "0"}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2">
                    {unit.label}
                </span>
                </motion.div>
            ))}
            </div>

            {/* Paragraph */}
            <motion.p
            className="mt-6 md:mt-8 text-center text-base sm:text-lg md:text-xl text-black/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
            We can't wait to celebrate our love with all of you! Mark your calendars and join our special day.
            </motion.p>
        </motion.div>
    </section>
  );
};

export default Countdown;
