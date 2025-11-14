// App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import OurStory from "./pages/OurStory";
import Countdown from "./pages/Countdown";
import Event from "./pages/Event";
import Gallery from "./pages/Gallery";
import Wish from "./components/Wish";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    // Scroll to top when page reloads
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // Simulate loader finish (replace with actual trigger in your Loader)
    const timer = setTimeout(() => {
      setLoading(false); // Loader finished
    }, 3500); // Adjust based on your loader animation time

    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable copy
    const handleCopy = (e) => e.preventDefault();
    document.addEventListener("copy", handleCopy);

    // Disable text selection
    document.body.style.userSelect = "none";

    // Disable DevTools shortcuts
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          ["I", "J"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative min-h-screen scroll-smooth">

      {/* Loader – shows first */}
      {loading && <Loader />}

      <Navbar />

      {/* Hero waits until loader is finished */}
      <section id="home">
        <Hero startAnimation={!loading} />
      </section>

      {/* Our Story Section */}
      <section id="ourstory">
        <OurStory />
      </section>

      {/* Countdown Section */}
      <Countdown />

      {/* Event Section */}
      <section id="event">
        <Event />
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Wish Section */}
      <Wish />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
