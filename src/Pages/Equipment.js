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
  Divider,
} from "@mui/material";
import { Construction, ArrowForward, CheckCircleOutline } from "@mui/icons-material";
import "./Equipment.css";

// ✅ Local Images (Ensure these paths match your folder structure)
import escavor from "../Assets/excavator.png";
import jcb from "../Assets/jcb.jpg";
import tipper from "../Assets/tipper.png";
import rockbreaker from "../Assets/rockbreaker.png";

// ✅ Equipment Data
const equipmentData = [
  {
    id: 1,
    name: "Excavator",
    image: escavor,
    desc: "Heavy-duty digging & earthmoving machine for major projects.",
  },
  {
    id: 2,
    name: "Backhoe Loader",
    image: jcb,
    desc: "Versatile and compact, perfect for digging, trenching, and backfilling.",
  },
  {
    id: 3,
    name: "Tipper Truck",
    image: tipper,
    desc: "High-capacity transport for aggregate, sand, and heavy materials.",
  },
  {
    id: 4,
    name: "Rock Breaker",
    image: rockbreaker,
    desc: "Powerful hydraulic attachments for breaking concrete and rocks.",
  },
];

function Equipment() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="equipment"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        color: "#111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        
        {/* HEADER SECTION (Matches Contact Page) */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#111",
              position: "relative",
              display: "inline-block",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                borderRadius: "2px",
              },
            }}
          >
            Our Equipment Fleet
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#666", maxWidth: 600, mx: "auto", mt: 3 }}
          >
            Powerful, well-maintained machines ready to tackle your toughest construction needs.
          </Typography>
        </Box>

        {/* EQUIPMENT GRID */}
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {equipmentData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card
                elevation={6}
                sx={{
                  height: "100%",
                  maxWidth: 240,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  background: "white",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  // Animated top border to match Contact cards
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                    transform: "scaleX(0)",
                    transition: "transform 0.3s ease",
                    zIndex: 10,
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    "& .MuiCardMedia-root": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                <Box sx={{ overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 180,
                      objectFit: "cover",
                      objectPosition: "center",
                      transition: "transform 0.5s ease",
                      borderRadius: "12px 12px 0 0",
                    }}
                    image={item.image}
                    alt={item.name}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: "#111" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>

                  <Divider sx={{ mb: 2, borderColor: "#eee" }} />

                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <CheckCircleOutline fontSize="small" sx={{ mr: 1, color: "#f59e0b" }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: "#111" }}>
                      Available for Hire
                    </Typography>
                  </Box>

                  <Button
                    fullWidth
                    endIcon={<ArrowForward />}
                    onClick={scrollToContact}
                    sx={{
                      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      borderRadius: "50px",
                      textTransform: "none",
                      py: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 25px rgba(251, 191, 36, 0.4)",
                      },
                    }}
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* BOTTOM CTA SECTION */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: "#111",
              position: "relative",
              display: "inline-block",
              mb: 3,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                borderRadius: "2px",
              },
            }}
          >
            Need Equipment for Your Project?
          </Typography>
          <Typography variant="h6" sx={{ color: "#666", mb: 4 }}>
            Get the best machines with reliable service and competitive rates.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<Construction />}
            onClick={scrollToContact}
            sx={{
              background: "#111",
              color: "#fff",
              fontWeight: "bold",
              px: 6,
              py: 1.5,
              borderRadius: "50px",
              fontSize: "1.1rem",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#333",
                transform: "translateY(-3px)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Contact Us Today
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

export default Equipment;