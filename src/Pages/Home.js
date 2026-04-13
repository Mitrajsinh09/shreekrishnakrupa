import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, Container, Fade, Slide } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import InventoryIcon from "@mui/icons-material/Inventory";
import "./Home.css";

import heroImage from "../Assets/homes.png";
import logo4 from "../Assets/LOGO4.png";


function Home() {
  const heroSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box id="home">

      {/* HERO */}
      <Box
        ref={heroSectionRef}
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Box className="overlay" />

        <Container className="hero-content" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Fade in={isVisible} timeout={800}>
            <Box className="hero-logo-container">
              <img 
                src={logo4}
                alt="Shree Krushna Krupa Enterprise"
                className="hero-logo"
                style={{
                  transform: `translateX(${mousePosition.x * 0.3}px) translateY(${mousePosition.y * 0.3}px)`
                }}
              />
            </Box>
          </Fade>

          <Fade in={isVisible} timeout={1000}>
            <Box className="title-container">
              <Typography 
                variant="h2" 
                className="hero-title"
                style={{
                  transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`
                }}
              >
                Shree Krushna Krupa Enterprise
              </Typography>
              <Box className="floating-elements">
                <Box className="floating-element element-1"></Box>
                <Box className="floating-element element-2"></Box>
                <Box className="floating-element element-3"></Box>
              </Box>
            </Box>
          </Fade>

          <Slide in={isVisible} direction="up" timeout={1200}>
            <Typography className="hero-subtitle">
              Equipment Rental • Building Materials • Heavy Machinery
            </Typography>
          </Slide>

          <Slide in={isVisible} direction="up" timeout={1200}>
            <Typography className="hero-desc">
              Your trusted partner for premium construction solutions. From foundation to completion, we deliver excellence with quality materials and state-of-the-art equipment.
            </Typography>
          </Slide>

          <Slide in={isVisible} direction="up" timeout={1400}>
            <Box className="hero-cta-wrapper">    
              <Button
                variant="contained"
                className="hero-btn enhanced"
                onClick={() => scrollToSection("contact")}
                startIcon={<ConstructionIcon />}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                className="hero-btn secondary"
                onClick={() => scrollToSection("services")}
              >
                View Services
              </Button>
            </Box>
          </Slide>
        </Container>

      </Box>

      {/* SERVICES */}
      <Container className="services-section">
        <Box sx={{ textAlign: 'center', mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Typography variant="h3" className="section-title">
            Complete Construction Solutions
          </Typography>
          <Typography variant="h6" className="section-subtitle" sx={{ textAlign: 'center !important', width: '100%', display: 'block' }}>
            Everything you need for your construction project in one place!
          </Typography>
        </Box>

        <Box className="services-container">
          <Box className="service-box">
            <ConstructionIcon className="service-icon" />
            <Typography variant="h6">Equipment Rental</Typography>
            <Typography>
              JCB, Excavators and heavy machinery available on rent for all project sizes.
            </Typography>
          </Box>

          <Box className="service-box">
            <InventoryIcon className="service-icon" />
            <Typography variant="h6">Building Materials</Typography>
            <Typography>
              High-quality bricks, sand and raw materials for strong construction.
            </Typography>
          </Box>
        </Box>
      </Container>

    </Box>
  );
}

export default Home;