import React from "react";
import { motion } from "framer-motion";
import venueIcon from "../assets/venue.png";
import dateIcon from "../assets/date.png";
import timeIcon from "../assets/time.png";

const Event = () => {
  const headingText = "Event Details";

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

  // Keep Venue visually in the middle
  const eventDetails = [
    { label: "Date", value: "Thursday, November 27, 2025", icon: dateIcon },
    { label: "Venue", value: "Sri Ambals Wedding Hall, Maskeliya", icon: venueIcon, mapLink: "https://maps.app.goo.gl/v8Xx9opTYNcxBAbw7" },
    { label: "Time", value: "09:00 AM - 12:30 PM", icon: timeIcon },
  ];

  return (
    <section className="py-20 bg-[#E6E39C] text-[#043915] font-playfair">
      <div className="flex flex-col items-center justify-center gap-12 px-6 md:px-16">
        {/* Animated Heading */}
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-[#043915]">
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

        {/* Event Info with Icons */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 text-center gap-6 md:gap-30">
          {eventDetails.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={paragraphVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-col items-center gap-4
                ${item.label === "Venue" ? "order-2" : ""} md:order-0`}
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />

              {/* Text */}
              <div className="mt-2 flex flex-col items-center gap-2">
                <span className="font-semibold block text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {item.label}
                </span>
                <span className="block text-sm sm:text-base md:text-lg lg:text-xl mt-1 text-[#06491b]/90">
                  {item.value}
                </span>

                {/* Show Map Button for Venue */}
                {item.label === "Venue" && item.mapLink && (
                  <a
                    href={item.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-4 py-1 bg-[#043915] text-white rounded hover:bg-[#06491b] transition"
                  >
                    View Map
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
