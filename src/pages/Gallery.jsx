import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import img1 from "../assets/SAT07123.jpg";
import img2 from "../assets/SAT07494.jpg";
import img3 from "../assets/SAT07053.jpg";
import img4 from "../assets/SAT06727.jpg";
import img5 from "../assets/SAT07287.jpg";
import img6 from "../assets/SAT07558.jpg";
import img7 from "../assets/SAT06956.jpg";
import img8 from "../assets/SAT07303.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const headingText = "Our Beautiful Moments";

  return (
    <section className="py-20 bg-white text-[#043915] font-playfair px-6 md:px-16 flex flex-col items-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Masonry Gallery using CSS columns */}
      <div className="w-full max-w-[1400px] columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            className="break-inside-avoid relative cursor-pointer overflow-hidden rounded-xl shadow-lg mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-auto object-cover transform hover:scale-110 transition duration-500 rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-h-full max-w-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
