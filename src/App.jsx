// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import OurStory from "./pages/OurStory";
import Countdown from "./pages/Countdown";
import Event from "./pages/Event"
import Gallery from "./pages/Gallery";
import Wish from "./components/Wish";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Our Story Section */}
      <section id="ourstory">
        <OurStory />
      </section>

      <Countdown/>
            
      <section id="event">
        <Event />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <Wish/>
      <Footer/>
    
    </div>
  );
}

export default App;
