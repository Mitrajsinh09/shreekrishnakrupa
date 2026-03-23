import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from "@mui/material";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Equipment", id: "equipment" },
  { label: "Contact", id: "contact" }
];

function Navbar() {
  const [elevate, setElevate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={elevate ? 6 : 0}
      sx={{
        background: elevate ? "#111" : "transparent",
        transition: "all 0.3s ease"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, letterSpacing: 1 }}
          >
            Shree Krishna Krupa Enterprice
          </Typography>

          {/* Menu */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#f4b400",
                      transition: "0.3s"
                    },
                    "&:hover::after": {
                      width: "100%"
                    }
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              onClick={() => scrollToSection("contact")}
              sx={{
                background: "#f4b400",
                color: "#000",
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: "8px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
                "&:hover": {
                  background: "#ffcc00"
                }
              }}
            >
              Get Quote
            </Button>
          </motion.div>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;