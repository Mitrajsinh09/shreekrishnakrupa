import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Avatar,
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import ConstructionIcon from "@mui/icons-material/Construction";
import BusinessIcon from "@mui/icons-material/Business";
import HandshakeIcon from "@mui/icons-material/Handshake";
import "./About.css";

import aboutImage from "../Assets/abouts.jpg";

function About() {

  return (
    <Box id="about" className="about-page">

      {/* HERO */}
      <Box className="about-hero" style={{ backgroundImage: `url(${aboutImage})` }}>
        <Container>
          <Typography variant="h3" className="about-hero-title">
            About Shree Krishna Krupa Enterprise
          </Typography>
          <Typography variant="h6">
            Trusted Construction Equipment Rental Service Since 2014
          </Typography>
        </Container>
      </Box>

      {/* MAIN CONTENT */}
      <Container className="about-content">
        <Box className="story-section">
          {/* Header with animation */}
          <Box className="story-header" textAlign="center">
            <Typography variant="h2" className="story-title">
              Our Story
            </Typography>
            <Typography variant="subtitle1" className="story-subtitle">
              Building Dreams Since 2014
            </Typography>
          </Box>

          {/* Story Cards Grid */}
          <Grid container spacing={3} className="story-grid">
            
            {/* Company Overview Card */}
            <Grid item xs={12} md={4}>
              <Paper className="story-card" elevation={8}>
                <Box className="card-header">
                  <Avatar className="card-avatar">
                    <BusinessIcon />
                  </Avatar>
                  <Typography variant="h6" className="card-title">
                    Who We Are
                  </Typography>
                </Box>
                <Typography className="card-content">
                  Welcome to Shree Krishna Krupa Enterprise, your premier destination for 
                  high-quality construction equipment rental services. With over a decade of 
                  experience, we've become the trusted partner for construction companies 
                  throughout the region.
                </Typography>
              </Paper>
            </Grid>

            {/* Services Card */}
            <Grid item xs={12} md={4}>
              <Paper className="story-card" elevation={8}>
                <Box className="card-header">
                  <Avatar className="card-avatar">
                    <EngineeringIcon />
                  </Avatar>
                  <Typography variant="h6" className="card-title">
                    Our Expertise
                  </Typography>
                </Box>
                <Typography className="card-content">
                  We specialize in top-of-the-line JCB, Hitachi, and heavy machinery. 
                  Our extensive fleet includes excavators, bulldozers, cranes, loaders, 
                  rollers, and dumpers - all maintained to the highest standards.
                </Typography>
              </Paper>
            </Grid>

            {/* Commitment Card */}
            <Grid item xs={12} md={4}>
              <Paper className="story-card" elevation={8}>
                <Box className="card-header">
                  <Avatar className="card-avatar">
                    <HandshakeIcon />
                  </Avatar>
                  <Typography variant="h6" className="card-title">
                    Our Promise
                  </Typography>
                </Box>
                <Typography className="card-content">
                  We build lasting relationships through exceptional service, 
                  competitive pricing, and unwavering commitment to your project's 
                  success. Our team is always ready to provide expert guidance.
                </Typography>
              </Paper>
            </Grid>

          </Grid>

          {/* Call to Action */}
          <Box className="story-cta" textAlign="center">
            <Typography variant="h5" className="cta-text">
              Ready to Start Your Next Project?
            </Typography>
            <Button
              variant="contained"
              className="about-cta-btn enhanced"
              startIcon={<ConstructionIcon />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>
      </Container>

      {/* FEATURES */}
      <Container className="about-features">
        <Box className="features-header" textAlign="center">
          <Typography variant="h3" className="features-title">
            Why Choose Shree Krishna Krupa
          </Typography>
          <Typography variant="subtitle1" className="features-subtitle">
            Your Trusted Partner in Construction Excellence
          </Typography>
        </Box>

        <Grid container spacing={2} className="features-grid" alignItems="center">

          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card className="feature-card enhanced compact horizontal">
              <CardContent>
                <Box className="feature-icon-wrapper">
                  <EngineeringIcon className="feature-icon animated" />
                </Box>
                <Typography variant="h6" className="feature-title">Expert Service</Typography>
                <Typography className="feature-description">
                  Professional guidance and 24/7 support for all your equipment needs.
                </Typography>
                <Box className="feature-points">
                  <Typography className="feature-point">÷ Certified Technicians</Typography>
                  <Typography className="feature-point">÷ Expert Guidance</Typography>
                  <Typography className="feature-point">÷ 24/7 Support</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card className="feature-card enhanced compact horizontal">
              <CardContent>
                <Box className="feature-icon-wrapper">
                  <BuildIcon className="feature-icon animated" />
                </Box>
                <Typography variant="h6" className="feature-title">Quality Equipment</Typography>
                <Typography className="feature-description">
                  Well-maintained, modern machinery for optimal performance and safety.
                </Typography>
                <Box className="feature-points">
                  <Typography className="feature-point">÷ Modern Fleet</Typography>
                  <Typography className="feature-point">÷ Regular Maintenance</Typography>
                  <Typography className="feature-point">÷ Safety Certified</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card className="feature-card enhanced compact horizontal">
              <CardContent>
                <Box className="feature-icon-wrapper">
                  <VerifiedIcon className="feature-icon animated" />
                </Box>
                <Typography variant="h6" className="feature-title">Trusted Partner</Typography>
                <Typography className="feature-description">
                  Reliable service with on-time delivery and competitive pricing always.
                </Typography>
                <Box className="feature-points">
                  <Typography className="feature-point">÷ On-Time Delivery</Typography>
                  <Typography className="feature-point">÷ Best Prices</Typography>
                  <Typography className="feature-point">÷ 10+ Years Trust</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>

      {/* STATS */}
      <Box className="about-stats">
        <Container>
          <Box className="stats-grid">

            <Box className="stat-item">
              <EngineeringIcon className="stat-icon" />
              <Typography variant="h3" className="stat-number">500+</Typography>
              <Typography className="stat-label">Projects Completed</Typography>
            </Box>

            <Box className="stat-item">
              <BusinessIcon className="stat-icon" />
              <Typography variant="h3" className="stat-number">200+</Typography>
              <Typography className="stat-label">Happy Clients</Typography>
            </Box>

            <Box className="stat-item">
              <VerifiedIcon className="stat-icon" />
              <Typography variant="h3" className="stat-number">10+</Typography>
              <Typography className="stat-label">Years Experience</Typography>
            </Box>

          </Box>
        </Container>
      </Box>

    </Box>
  );
}

export default About;