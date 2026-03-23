import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function Services() {
  return (
    <Box id="services" sx={{ padding: "80px 20px", textAlign: "center" }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <EngineeringIcon sx={{ fontSize: 50, color: "#fbbf24" }} />
                <Typography variant="h6">Machine Rental</Typography>
                <Typography>Top quality construction machines on rent.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <BuildIcon sx={{ fontSize: 50, color: "#fbbf24" }} />
                <Typography variant="h6">Maintenance Support</Typography>
                <Typography>On-site assistance and technical support.</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <LocalShippingIcon sx={{ fontSize: 50, color: "#fbbf24" }} />
                <Typography variant="h6">Fast Delivery</Typography>
                <Typography>Quick delivery to your construction site.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;