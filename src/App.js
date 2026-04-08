import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Equipment from "./Pages/Equipment";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Equipment />
      <Contact />
    </>
  );  
}

export default App;