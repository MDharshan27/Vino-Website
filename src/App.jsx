// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import OurStory from "./pages/OurStory";
import Countdown from "./pages/Countdown";
import Gallery from "./pages/Gallery";

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

      <section id="gallery">
        <Gallery />
      </section>
      
      {/* <section id="events"><Events /></section> */}
      {/* <section id="contact"><Contact /></section> */}
    </div>
  );
}

export default App;
