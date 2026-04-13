import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container
} from "@mui/material";
import logo from "../Assets/LOGO4.png";

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
  const [navBackground, setNavBackground] = useState("transparent");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldElevate = currentScrollY > 20;
      setElevate(shouldElevate);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Determine text color based on scroll position and actual background detection
      if (currentScrollY > 20) {
        // When scrolling, detect current section's background
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
          setTextColor("#fff");
          setNavBackground("rgba(0, 0, 0, 0.8)");
        } else if (lightBackgroundSections.includes(currentSection)) {
          setTextColor("#1a1a1a");
          setNavBackground("rgba(255, 255, 255, 0.98)");
        } else {
          // Default fallback - check scroll position
          setTextColor(currentScrollY > 200 ? "#1a1a1a" : "#fff");
          setNavBackground(currentScrollY > 200 ? "rgba(255, 255, 255, 0.98)" : "rgba(0, 0, 0, 0.8)");
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
          setTextColor("#fff");
          setNavBackground("transparent");
        } else if (lightBackgroundSections.includes(currentSection)) {
          setTextColor("#1a1a1a");
          setNavBackground("rgba(255, 255, 255, 0.98)");
        } else {
          setTextColor("#fff");
          setNavBackground("transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={elevate ? 4 : 0}
      sx={{
        background: navBackground,
        backdropFilter: elevate ? "blur(16px)" : "none",
        WebkitBackdropFilter: elevate ? "blur(16px)" : "none",
        border: elevate && navBackground.includes("255") 
          ? "1px solid rgba(0, 0, 0, 0.08)" 
          : navBackground.includes("0") && elevate
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "none",
        transition: "all 0.3s ease",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        boxShadow: elevate 
          ? navBackground.includes("255")
            ? "0 2px 12px rgba(0, 0, 0, 0.06)"
            : "0 2px 12px rgba(0, 0, 0, 0.1)"
          : "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
          minHeight: { xs: "56px", sm: "64px" }
        }}>

          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Shree Krushna Krupa Enterprise"
            sx={{
              height: { xs: 50, sm: 60, md: 70 },
              width: "auto",
              cursor: "pointer",
              transition: "all 0.25s ease",
              filter: navBackground.includes("255") || navBackground === "transparent"
                ? "brightness(1) drop-shadow(0 1px 4px rgba(0,0,0,0.2))"
                : "brightness(1.1) drop-shadow(0 1px 4px rgba(255,255,255,0.3))",
              "&:hover": {
                filter: navBackground.includes("255") || navBackground === "transparent"
                  ? "brightness(1.05) drop-shadow(0 2px 6px rgba(0,0,0,0.25))"
                  : "brightness(1.15) drop-shadow(0 2px 6px rgba(255,255,255,0.35))"
              }
            }}
            onClick={() => scrollToSection('home')}
          />

          {/* Menu */}
          <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2, md: 3 }, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: textColor,
                  fontWeight: 500,
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                  position: "relative",
                  textTransform: "none",
                  px: { xs: 1, sm: 1.5, md: 2 },
                  py: 0.5,
                  borderRadius: "4px",
                  transition: "all 0.25s ease",
                  backgroundColor: "transparent",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "1.5px",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#fbbf24",
                    transition: "all 0.25s ease",
                    borderRadius: "1px",
                  },
                  "&:hover": {
                    backgroundColor: navBackground.includes("255")
                      ? "rgba(251, 191, 36, 0.06)"
                      : "rgba(255, 255, 255, 0.08)",
                    "&::before": {
                      width: "50%",
                    }
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;