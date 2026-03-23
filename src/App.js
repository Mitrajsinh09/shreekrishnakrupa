import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Equipment from "./Pages/Equipment";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      {/* Scroll Sections */}
      <Home />
      <About />
      <Services />
      <Equipment />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;