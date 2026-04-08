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
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
<<<<<<< HEAD
import ConstructionIcon from "@mui/icons-material/Construction";
=======
import InventoryIcon from "@mui/icons-material/Inventory";
import servicesImage from "../Assets/services.png";
>>>>>>> e5ea99c397bf73ce3c0fb16ed10f890517c68dec
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
<<<<<<< HEAD
    <Box id="services">
      {/* HERO SECTION */}
      <Box className="services-hero">
        <Container>
          <Typography variant="h3" className="services-hero-title">
            Our Services
          </Typography>
          <Typography variant="h6">
            Complete Construction Equipment Solutions
=======
    <div id="services" className="services-page-wrapper">
      
      {/* Animated Hero Banner Section */}
      <div 
        className="services-hero-banner fade-in-up"
        style={{
          backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url(${servicesImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Container maxWidth="lg" className="hero-content">
          <Typography variant="h2" component="h2" className="hero-title">
                        Our Services
          </Typography>
          <div className="hero-divider"></div>
          <Typography variant="h6" className="hero-subtitle">
            Providing Top-Tier Machines, Premium Materials, and Reliable Logistics for Your Next Big Project.
>>>>>>> e5ea99c397bf73ce3c0fb16ed10f890517c68dec
          </Typography>
        </Container>
      </div>

<<<<<<< HEAD
      {/* SERVICES SECTION */}
      <Container className="services-section">
        <Typography variant="h4" className="section-title">
          What We Offer
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="service-card">
              <CardContent>
                <EngineeringIcon className="service-icon" />
                <Typography variant="h6">JCB & Excavators</Typography>
                <Typography>
                  High-quality JCB and excavator machines for digging, trenching, and earthmoving.
                </Typography>
                <Button 
                  variant="contained" 
                  className="service-btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="service-card">
              <CardContent>
                <BuildIcon className="service-icon" />
                <Typography variant="h6">Hitachi Machinery</Typography>
                <Typography>
                  Premium Hitachi construction equipment including excavators and loaders.
                </Typography>
                <Button 
                  variant="contained" 
                  className="service-btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="service-card">
              <CardContent>
                <LocalShippingIcon className="service-icon" />
                <Typography variant="h6">Fast Delivery</Typography>
                <Typography>
                  Quick delivery to your construction site with professional operators.
                </Typography>
                <Button 
                  variant="contained" 
                  className="service-btn"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA SECTION */}
      <Box className="services-cta">
        <Typography variant="h4">
          Need Equipment for Your Project?
        </Typography>
        <Typography sx={{ marginTop: "10px" }}>
          Contact us for best deals and quick service
        </Typography>
        <Button
          variant="contained"
          size="large"
          className="cta-btn"
          sx={{ marginTop: "20px" }}
          startIcon={<ConstructionIcon />}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
=======
      {/* Services Grid Section */}
      <Container maxWidth="lg" className="services-grid-container">
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
>>>>>>> e5ea99c397bf73ce3c0fb16ed10f890517c68dec
  );
}

export default Services;                                                                                                                                                                                