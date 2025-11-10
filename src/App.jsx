// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import OurStory from "./pages/OurStory";
// (Add more sections later: Gallery, Events, Contact)

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

      {/* Future Sections */}
      {/* <section id="gallery"><Gallery /></section> */}
      {/* <section id="events"><Events /></section> */}
      {/* <section id="contact"><Contact /></section> */}
    </div>
  );
}

export default App;
