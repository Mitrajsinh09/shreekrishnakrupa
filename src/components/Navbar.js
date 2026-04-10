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
      elevation={elevate ? 6 : 0}
      sx={{
        background: elevate ? "rgba(255, 255, 255, 0.1)" : "transparent",
        backdropFilter: elevate ? "blur(10px)" : "none",
        WebkitBackdropFilter: elevate ? "blur(10px)" : "none",
        border: elevate ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
        transition: "all 0.3s ease"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Shree Krishna Krupa Enterprise"
            sx={{
              height: 120,
              width: "auto",
              cursor: "pointer",
              transition: "all 0.3s ease",
              filter: textColor === "#fff" ? "brightness(1)" : "brightness(0.8)",
              "&:hover": {
                transform: "scale(1.05)",
                filter: textColor === "#fff" ? "brightness(1.1)" : "brightness(0.9)"
              }
            }}
            onClick={() => scrollToSection('home')}
          />

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
                    color: textColor,
                    fontWeight: 500,
                    position: "relative",
                    transition: "color 0.3s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: textColor === "#fff" ? "#f4b400" : "#111",
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

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;