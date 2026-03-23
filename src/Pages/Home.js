import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ConstructionIcon from "@mui/icons-material/Construction";
import "./Home.css";

const equipmentData = [
  {
    id: 1,
    name: "Excavator",
    price: "₹5000/day",
    image: "https://source.unsplash.com/400x300/?excavator",
  },
  {
    id: 2,
    name: "Crane",
    price: "₹8000/day",
    image: "https://source.unsplash.com/400x300/?crane",
  },
  {
    id: 3,
    name: "Bulldozer",
    price: "₹7000/day",
    image: "https://source.unsplash.com/400x300/?bulldozer",
  },
];

function Home() {
  return (
    <Box>

      {/* HERO SECTION */}
      <Box id="home" className="hero-section">
        <Container>
          <Typography variant="h3" className="hero-title">
            Rent Construction Equipment Easily
          </Typography>

          <Typography variant="h6" className="hero-subtitle">
            Reliable Machines. Affordable Prices. Fast Service.
          </Typography>

          <Button
            variant="contained"
            size="large"
            className="hero-btn"
            startIcon={<ConstructionIcon />}
            onClick={() =>
              document
                .getElementById("equipment")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Equipment
          </Button>
        </Container>
      </Box>

      {/* FEATURES SECTION */}
      <Container className="features">
        <Grid container spacing={4} textAlign="center">
          <Grid item xs={12} md={4}>
            <EngineeringIcon className="feature-icon" />
            <Typography variant="h6">High Quality Machines</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <ConstructionIcon className="feature-icon" />
            <Typography variant="h6">Affordable Pricing</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <EngineeringIcon className="feature-icon" />
            <Typography variant="h6">Fast Delivery</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* EQUIPMENT SECTION */}
      <Container className="equipment-section">
        <Typography variant="h4" className="section-title">
          Featured Equipment
        </Typography>

        <Grid container spacing={4}>
          {equipmentData.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card className="equipment-card">
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="text.secondary">
                    {item.price}
                  </Typography>

                  <Button
                    variant="contained"
                    className="card-btn"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Rent Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA SECTION */}
      <Box className="cta-section">
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
        >
          Contact Us
        </Button>
      </Box>

    </Box>
  );
}

export default Home;