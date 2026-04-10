import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton
} from "@mui/material";
import { motion } from "framer-motion";
import logo from "../Assets/logo.png";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Equipment", id: "equipment" },
  { label: "Contact", id: "contact" }
];

function Navbar() {
  const [elevate, setElevate] = useState(false);
  const [textColor, setTextColor] = useState("#fff");

  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 40);
      
      // Determine text color based on scroll position and actual background detection
      if (window.scrollY > 40) {
        // When scrolling, detect the current section's background
        const sections = ['home', 'about', 'services', 'equipment', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        // Sections with dark backgrounds - use white text
        const darkBackgroundSections = ['home', 'about'];
        // Sections with light backgrounds - use dark text
        const lightBackgroundSections = ['services', 'equipment', 'contact'];
        
        if (darkBackgroundSections.includes(currentSection)) {
          setTextColor("#fff"); // White text for dark backgrounds
        } else if (lightBackgroundSections.includes(currentSection)) {
          setTextColor("#111"); // Dark text for light backgrounds
        } else {
          // Default fallback - check scroll position
          setTextColor(window.scrollY > 200 ? "#111" : "#fff");
        }
      } else {
        // At top of page - detect current section
        const sections = ['home', 'about', 'services', 'equipment', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        // Intelligent color detection based on section
        const darkBackgroundSections = ['home', 'about'];
        const lightBackgroundSections = ['services', 'equipment', 'contact'];
        
        if (darkBackgroundSections.includes(currentSection)) {
          setTextColor("#fff"); // White text for dark backgrounds
        } else if (lightBackgroundSections.includes(currentSection)) {
          setTextColor("#111"); // Dark text for light backgrounds
        } else {
          setTextColor("#fff"); // Default to white for safety
        }
      }
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
      elevation={0}
      sx={{
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "70px" }}>

          {/* Company Name */}
          <Typography
            variant="h5"
            sx={{
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1.2rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                color: "#f4b400"
              }
            }}
            onClick={() => scrollToSection('home')}
          >
            Shree Krishna Krupa
          </Typography>

          {/* Menu */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textTransform: "none",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    padding: "8px 16px"
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );

}

export default Navbar;