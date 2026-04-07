import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import InventoryIcon from "@mui/icons-material/Inventory";
import "./Home.css";

import heroImage from "../Assets/jcb.png";

function Home() {
  const heroSectionRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroSection = heroSectionRef.current;
      
      if (heroSection) {
        // Parallax effect - move background up at 50% speed
        const parallaxSpeed = 0.5;
        const yPos = -(scrolled * parallaxSpeed);
        heroSection.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
        <Box className="hero-shimmer" />

        <Container className="hero-content" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Box className="title-container">
            <Typography variant="h2" className="hero-title">
              Shree Krishna Krupa Enterprise
            </Typography>
            <Box className="boy-character">
           
              <Box className="boy-arms">
                <Box className="arm left-arm"></Box>
                <Box className="arm right-arm"></Box>
              </Box>
            </Box>
          </Box>

          <Typography className="hero-subtitle">
            Equipment Rental • Bricks • Sand • Stones  
          </Typography>

          <Typography className="hero-desc">
            Trusted partner for construction materials and heavy machinery.
          </Typography>

          <Box className="hero-cta-wrapper">
            <Button
              variant="contained"
              className="hero-btn enhanced"
              onClick={() => scrollToSection("contact")}
              startIcon={<ConstructionIcon />}
            >
              Get Quote
            </Button>
            <Button
              variant="outlined"
              className="hero-btn secondary"
              onClick={() => scrollToSection("services")}
            >
              Explore Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* SERVICES */}
      <Container className="services-section">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" className="section-title">
            Complete Construction Solutions
              <Typography variant="h6" className="section-subtitle">
            Everything you need for your construction project in one place!
          </Typography>
          </Typography>

          {/* <Typography variant="h6" className="section-subtitle">
            Everything you need for your construction project in one place
          </Typography> */}
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