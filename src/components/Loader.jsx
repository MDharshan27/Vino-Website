import React, { useEffect, useState } from "react";
import logoVideo from "../assets/logo-animation.mp4";

const Loader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);
  const [slide, setSlide] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Increment percentage smoothly
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 1 : 100));
    }, 55); // 5500ms / 100 steps

    // Slide out animation after 5s
    const timer = setTimeout(() => setSlide(false), 5000);
    // End loader after 5.5s
    const endTimer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transform: slide ? "translateY(0%)" : "translateY(-100%)",
        transition: "transform 0.5s ease",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <div
        style={{
          width: "clamp(150px, 30vw, 250px)",
          height: "clamp(150px, 30vw, 250px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <video
          src={logoVideo}
          autoPlay
          muted
          loop={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Percentage Text Only */}
      <div
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          color: "#043915",
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default Loader;
