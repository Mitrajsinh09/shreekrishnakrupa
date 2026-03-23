import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        padding: "80px 20px",
        background: "#111",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Typography gutterBottom>
          📞 +91 XXXXXXXX
        </Typography>
        <Typography gutterBottom>
          📍 Ahmedabad, Gujarat
        </Typography>

        <Box
          component="form"
          sx={{ marginTop: 3, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField label="Your Email" variant="outlined" fullWidth />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />

          <Button
            variant="contained"
            sx={{ background: "#fbbf24", color: "#000" }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;