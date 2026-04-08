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
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ConstructionIcon from "@mui/icons-material/Construction";
import "./Services.css";

function Services() {
  return (
    <Box id="services">
      {/* HERO SECTION */}
      <Box className="services-hero">
        <Container>
          <Typography variant="h3" className="services-hero-title">
            Our Services
          </Typography>
          <Typography variant="h6">
            Complete Construction Equipment Solutions
          </Typography>
        </Container>
      </Box>

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
  );
}

export default Services;                                                                                                                                                                                