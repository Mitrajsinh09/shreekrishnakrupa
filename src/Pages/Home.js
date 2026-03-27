import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import InventoryIcon from "@mui/icons-material/Inventory";
import "./Home.css";

import heroImage from "../Assets/jcb.png";

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box id="home">

      {/* HERO */}
      <Box
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Box className="overlay" />

        <Container className="hero-content" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h2" className="hero-title">
            Shree Krishna Krupa Enterprise
          </Typography>

          <Typography className="hero-subtitle">
            Equipment Rental • Bricks • Sand • Stones
          </Typography>

          <Typography className="hero-desc">
            Trusted partner for construction materials and heavy machinery.
          </Typography>

          <Button
            variant="contained"
            className="hero-btn"
            onClick={() => scrollToSection("contact")}
          >
            Get Quote
          </Button>
        </Container>
      </Box>

      {/* SERVICES */}
      <Container className="services-section">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" className="section-title">
            Complete Construction Solutions
          </Typography>

          <Typography variant="h6" className="section-subtitle">
            Everything you need for your construction project in one place
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