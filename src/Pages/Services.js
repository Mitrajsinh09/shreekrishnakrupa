import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ConstructionIcon from "@mui/icons-material/Construction";

import InventoryIcon from "@mui/icons-material/Inventory";
import servicesImage from "../Assets/services.png";
import "./Services.css";

const services = [
  {
    title: "Heavy Equipment Rental",
    desc: "JCB, excavators, loaders and more for all types of construction work.",
    icon: <EngineeringIcon className="service-icon-svg" />,
    tag: "Machines"
  },
  {
    title: "Material Supply",
    desc: "Bricks, sand, stone, cement and all building materials.",
    icon: <InventoryIcon className="service-icon-svg" />,
    tag: "Materials"
  },
  {
    title: "Fast Delivery",
    desc: "Quick and reliable delivery to your construction site.",
    icon: <LocalShippingIcon className="service-icon-svg" />,
    tag: "Logistics"
  }
];

function Services() {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="services" className="services-page-wrapper">
      
      {/* Enhanced Hero Banner Section */}
      <div 
        className="services-hero-banner hero-enhanced fade-in-up"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(31, 41, 55, 0.9) 50%, rgba(17, 24, 39, 0.85) 100%), url(${servicesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative'
        }}
      >
        {/* Animated overlay particles */}
        <div className="hero-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
        
        <Container maxWidth="lg" className="hero-content">
          {/* Animated badge */}
          <div className="hero-badge">
            <span className="badge-text">CONSTRUCTION SERVICES</span>
          </div>
          
          <Typography variant="h1" component="h1" className="hero-title">
            OUR SERVICES
          </Typography>
          
          <div className="hero-divider">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>
          
          <Typography variant="h6" className="hero-subtitle">
            Providing Top-Tier Machines, Premium Materials, and Reliable Logistics for Your Next Big Project.
          </Typography>
        </Container>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
          <div className="scroll-text">Scroll to explore</div>
        </div>
      </div>

      {/* Services Grid Section */}
      <Container maxWidth="lg" className="services-grid-container" id="services-grid">
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Dynamic animation delay for staggered entrance */}
              <Card 
                className="new-service-card fade-in-up" 
                style={{ animationDelay: `${0.2 + (index * 0.15)}s` }}
              >
                <CardContent className="new-service-content">
                  
                  {/* Top: Tag & Icon */}
                  <div className="card-top-row">
                    <div className="icon-badge">
                      {service.icon}
                    </div>
                    <Chip
                      label={service.tag}
                      size="small"
                      className="card-tag-chip"
                    />
                  </div>

                  {/* Middle: Text */}
                  <Typography variant="h5" component="h3" className="card-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="card-description">
                    {service.desc}
                  </Typography>

                  {/* Bottom: Button */}
                  <div className="card-action-area">
                    <Button
                      variant="text"
                      className="card-action-btn"
                      onClick={handleScrollToContact}
                      disableRipple
                    >
                      Enquire Now <span className="arrow-icon">→</span>
                    </Button>
                  </div>
                  
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Services;