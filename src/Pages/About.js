import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import "./About.css";

function About() {
  return (
    // 🔥 IMPORTANT: ID MUST BE HERE (TOP LEVEL)
    <Box id="about" className="about-page">

      {/* HERO */}
      <Box className="about-hero">
        <Typography variant="h3" className="about-hero-title">
          About Krishna Krupa
        </Typography>
        <Typography variant="h6">
          Trusted Construction Equipment Rental Service
        </Typography>
      </Box>

      {/* CONTENT */}
      <Container className="about-content">
        <Grid container spacing={4} alignItems="center">

          {/* IMAGE */}
          <Grid item xs={12} md={6}>
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
              alt="construction"
              className="about-img"
            />
          </Grid>

          {/* TEXT */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className="section-title">
              Who We Are
            </Typography>

            <Typography className="about-text">
              Krishna Krupa Construction provides top-quality machinery on rent
              for all types of construction projects.
            </Typography>

            <Typography className="about-text">
              We focus on reliability, affordability, and customer satisfaction
              with fast delivery and expert support.
            </Typography>
          </Grid>

        </Grid>
      </Container>

      {/* FEATURES */}
      <Container className="about-features">
        <Typography variant="h4" className="section-title" align="center">
          Why Choose Us
        </Typography>

        <Grid container spacing={4}>

          <Grid item xs={12} md={4}>
            <Card className="feature-card">
              <CardContent>
                <EngineeringIcon className="feature-icon" />
                <Typography variant="h6">Quality Equipment</Typography>
                <Typography>
                  Well-maintained and high-performance machines.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="feature-card">
              <CardContent>
                <BuildIcon className="feature-icon" />
                <Typography variant="h6">Expert Support</Typography>
                <Typography>
                  Professional guidance for your projects.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card className="feature-card">
              <CardContent>
                <VerifiedIcon className="feature-icon" />
                <Typography variant="h6">Trusted Service</Typography>
                <Typography>
                  Reliable and on-time delivery every time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>

      {/* STATS */}
      <Box className="about-stats">
        <Grid container spacing={4} textAlign="center">

          <Grid item xs={12} md={4}>
            <Typography variant="h4">500+</Typography>
            <Typography>Projects Completed</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h4">200+</Typography>
            <Typography>Happy Clients</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h4">10+</Typography>
            <Typography>Years Experience</Typography>
          </Grid>

        </Grid>
      </Box>

    </Box>
  );
}

export default About;