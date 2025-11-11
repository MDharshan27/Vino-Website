import React, { useEffect, useState } from "react";
import logoVideo from "../assets/logo-animation.mp4";

const Loader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSlide(false), 3000); // slide up after 3s
    const endTimer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 5500); // remove loader after 5.5s

    return () => {
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
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transform: slide ? "translateY(0%)" : "translateY(-100%)",
        transition: "transform 0.5s ease",
      }}
    >
      <div
        style={{
          width: "30vw",
          maxWidth: "200px",
          height: "30vw",
          maxHeight: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
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
    </div>
  );
};

export default Loader;
