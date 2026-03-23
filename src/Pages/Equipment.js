import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import "./Equipment.css";

const equipmentData = [
  {
    id: 1,
    name: "JCB Excavator",
    price: "₹5000/day",
    image: "https://source.unsplash.com/400x300/?excavator",
  },
  {
    id: 2,
    name: "Hitachi Crane",
    price: "₹8000/day",
    image: "https://source.unsplash.com/400x300/?crane",
  },
  {
    id: 3,
    name: "JCB Bulldozer",
    price: "₹7000/day",
    image: "https://source.unsplash.com/400x300/?bulldozer",
  },
  {
    id: 4,
    name: "Hitachi Loader",
    price: "₹6000/day",
    image: "https://source.unsplash.com/400x300/?loader",
  },
  {
    id: 5,
    name: "JCB Roller",
    price: "₹4500/day",
    image: "https://source.unsplash.com/400x300/?roller",
  },
  {
    id: 6,
    name: "Hitachi Dumper",
    price: "₹7500/day",
    image: "https://source.unsplash.com/400x300/?dumper",
  },
];

function Equipment() {
  return (
    <Box id="equipment">
      {/* HERO SECTION */}
      <Box className="equipment-hero">
        <Container>
          <Typography variant="h3" className="equipment-hero-title">
            Our Equipment Fleet
          </Typography>
          <Typography variant="h6">
            JCB, Hitachi & Premium Machinery Available for Rent
          </Typography>
        </Container>
      </Box>

      {/* EQUIPMENT SECTION */}
      <Container className="equipment-section">
        <Typography variant="h4" className="section-title">
          Available Equipment
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
                        ?.scrollIntoView({ behavior: "smooth" })
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
      <Box className="equipment-cta">
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

export default Equipment;