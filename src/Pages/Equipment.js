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

const equipmentData = [
  {
    id: 1,
    name: "Excavator",
    price: "₹5000/day",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Crane",
    price: "₹8000/day",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Bulldozer",
    price: "₹7000/day",
    image: "https://via.placeholder.com/300",
  },
];

function Equipment() {
  return (
    <Box id="equipment" sx={{ padding: "80px 20px" }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Our Equipment
        </Typography>

        <Grid container spacing={4}>
          {equipmentData.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography color="text.secondary">{item.price}</Typography>

                  <Button
                    variant="contained"
                    sx={{ marginTop: 2, background: "#fbbf24", color: "#000" }}
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
    </Box>
  );
}

export default Equipment;