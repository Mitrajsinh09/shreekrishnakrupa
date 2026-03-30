import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Button 
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ConstructionIcon from "@mui/icons-material/Construction";
import BuildIcon from "@mui/icons-material/Build";
import SupportIcon from "@mui/icons-material/Support";
import "./Services.css";

function Services() {
  return (
    <Box id="services">
      {/* HERO SECTION */}
      <Box className="services-hero">
        <Container>
          <Typography variant="h2" className="services-hero-title">
            Our Premium Services
          </Typography>
          <Typography variant="subtitle1" className="services-hero-subtitle">
            Complete Construction Equipment Solutions
          </Typography>
        </Container>
      </Box>

      {/* MAIN SERVICES */}
      <Container className="services-content">
        {/* INTRO SECTION */}
        <Box className="services-intro" textAlign="center">
          <Typography className="intro-text">
            We provide reliable and affordable construction equipment and material services for all types of projects. From heavy machinery rental to building material supply, we ensure quality, efficiency, and on-time delivery.
          </Typography>
          <Typography className="intro-text">
            With years of experience in the construction industry, we understand your project requirements and deliver solutions that exceed expectations.
          </Typography>
          <Typography className="intro-text">
            Our commitment to excellence and customer satisfaction makes us the preferred choice for contractors and builders across the region.
          </Typography>
        </Box>

        <Box className="services-header" textAlign="center">
          <Typography variant="h3" className="services-title">
            Our Services
          </Typography>
          <Typography variant="subtitle1" className="services-subtitle">
            Comprehensive Solutions for Your Construction Needs
          </Typography>
        </Box>

        <Grid container spacing={3} className="services-grid">

          {/* Equipment Rental */}
          <Grid item xs={12} sm={6}>
            <Card className="service-card enhanced compact">
              <CardContent>
                <Box className="service-icon-wrapper">
                  <EngineeringIcon className="service-icon animated" />
                </Box>
                <Typography variant="h6" className="service-title">
                  🚜 Equipment Rental
                </Typography>
                <Typography className="service-description">
                  Wide range of construction machinery for short & long-term projects.
                </Typography>
                <Box className="service-list">
                  <Typography className="service-item">• Excavators (Kobelco 380)</Typography>
                  <Typography className="service-item">• JCB 3DX</Typography>
                  <Typography className="service-item">• Rock Breakers</Typography>
                </Box>
                <Button className="service-action-btn" variant="contained">
                  View Equipment
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Building Material Supply */}
          <Grid item xs={12} sm={6}>
            <Card className="service-card enhanced compact">
              <CardContent>
                <Box className="service-icon-wrapper">
                  <ConstructionIcon className="service-icon animated" />
                </Box>
                <Typography variant="h6" className="service-title">
                  🧱 Building Materials
                </Typography>
                <Typography className="service-description">
                  High-quality construction materials at competitive prices.
                </Typography>
                <Box className="service-list">
                  <Typography className="service-item">• Bricks</Typography>
                  <Typography className="service-item">• Sand</Typography>
                  <Typography className="service-item">• Stone</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Transportation Services */}
          <Grid item xs={12} sm={6}>
            <Card className="service-card enhanced compact">
              <CardContent>
                <Box className="service-icon-wrapper">
                  <LocalShippingIcon className="service-icon animated" />
                </Box>
                <Typography variant="h6" className="service-title">
                  🚛 Transportation
                </Typography>
                <Typography className="service-description">
                  Reliable transportation for construction materials.
                </Typography>
                <Box className="service-list">
                  <Typography className="service-item">• Tipper trucks available</Typography>
                  <Typography className="service-item">• Safe & timely delivery</Typography>
                  <Typography className="service-item">• Bulk transport support</Typography>
                </Box>
                <Button className="service-action-btn" variant="contained">
                  View Services
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Custom Project Support */}
          <Grid item xs={12} sm={6}>
            <Card className="service-card enhanced compact">
              <CardContent>
                <Box className="service-icon-wrapper">
                  <BuildIcon className="service-icon animated" />
                </Box>
                <Typography variant="h6" className="service-title">
                  ⚙️ Project Support
                </Typography>
                <Typography className="service-description">
                  Complete solutions for contractors and builders.
                </Typography>
                <Box className="service-list">
                  <Typography className="service-item">• Machinery + operator</Typography>
                  <Typography className="service-item">• Flexible rental plans</Typography>
                  <Typography className="service-item">• Site-based support</Typography>
                </Box>
                <Button className="service-action-btn" variant="contained">
                  Get Support
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Maintenance & Support */}
          <Grid item xs={12}>
            <Card className="service-card enhanced featured compact">
              <CardContent>
                <Box className="service-icon-wrapper">
                  <SupportIcon className="service-icon animated" />
                </Box>
                <Typography variant="h6" className="service-title">
                  🛠️ Maintenance & Support
                </Typography>
                <Typography className="service-description">
                  All equipment well-maintained and ready for immediate use.
                </Typography>
                <Box className="service-list-horizontal">
                  <Typography className="service-item">• Regular servicing</Typography>
                  <Typography className="service-item">• On-site assistance</Typography>
                  <Typography className="service-item">• Quick replacement</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>

        {/* Call to Action */}
        <Box className="services-cta" textAlign="center">
          <Typography variant="h5" className="cta-text">
            Ready to Get Started?
          </Typography>
          <Button
            variant="contained"
            className="services-cta-btn enhanced"
            startIcon={<ConstructionIcon />}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Services;