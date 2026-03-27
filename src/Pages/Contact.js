import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Send,
  CheckCircle,
  Error,
} from "@mui/icons-material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email content
      const emailContent = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
      `;

      // Using Formspree or similar service - replace with your preferred service
      // For now, we'll use a simple mailto link as fallback
      const mailtoLink = `mailto:shreekrushnakrupaenterprise@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailContent)}`;
      
      // Try to open email client
      window.open(mailtoLink, '_blank');

      setSnackbar({
        open: true,
        message: "Email client opened! Please send the email to complete your message.",
        severity: "success",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
    } catch (error) {
      console.error("Error sending email:", error);
      setSnackbar({
        open: true,
        message: "Failed to open email client. Please try again or email us directly at shreekrushnakrupaenterprise@gmail.com",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        color: "#111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box textAlign="center" mb={6}>
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
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#666", maxWidth: 600, mx: "auto" }}
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information - Single Row */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                mb: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: "white",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  flex: 1,
                  minWidth: 280,
                  maxWidth: 350,
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
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                      mr: 2,
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <Phone sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: "#111", fontWeight: 600 }}>
                    Phone
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
                  +91 9712311128
                </Typography>
              </Paper>

              <Paper
                elevation={8}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: "white",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  flex: 1,
                  minWidth: 280,
                  maxWidth: 350,
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
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                      mr: 2,
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <Email sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: "#111", fontWeight: 600 }}>
                    Email
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
shreekrushnakrupaenterprise@gmail.com                </Typography>
              </Paper>

              <Paper
                elevation={8}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: "white",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  flex: 1,
                  minWidth: 280,
                  maxWidth: 350,
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
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                      mr: 2,
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <LocationOn sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: "#111", fontWeight: 600 }}>
                    Address
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
                 undavi,Bhavnagar,Gujarat
                
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12}>
            <Box sx={{ pl:"140px" }}>
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: "white",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  maxWidth: 800,
                  width: "100%",
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
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                <Box textAlign="center" mb={4}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#111",
                      position: "relative",
                      display: "inline-block",
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
                    Send us a Message
                  </Typography>
                </Box>

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ddd",
                            },
                            "&:hover fieldset": {
                              borderColor: "#fbbf24",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbbf24",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "#666",
                          },
                          "& .MuiInputBase-input": {
                            color: "#111",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ddd",
                            },
                            "&:hover fieldset": {
                              borderColor: "#fbbf24",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbbf24",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "#666",
                          },
                          "& .MuiInputBase-input": {
                            color: "#111",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number *"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ddd",
                            },
                            "&:hover fieldset": {
                              borderColor: "#fbbf24",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbbf24",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "#666",
                          },
                          "& .MuiInputBase-input": {
                            color: "#111",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject *"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ddd",
                            },
                            "&:hover fieldset": {
                              borderColor: "#fbbf24",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbbf24",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "#666",
                          },
                          "& .MuiInputBase-input": {
                            color: "#111",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message *"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        multiline
                        rows={5}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#ddd",
                            },
                            "&:hover fieldset": {
                              borderColor: "#fbbf24",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#fbbf24",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "#666",
                          },
                          "& .MuiInputBase-input": {
                            color: "#111",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
                      sx={{
                        py: 1.5,
                        px: 6,
                        background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        borderRadius: "50px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: "0 10px 25px rgba(251, 191, 36, 0.4)",
                        },
                        "&:disabled": {
                          background: "#ccc",
                          color: "#666",
                        },
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* Success/Error Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{
              minWidth: 300,
              "& .MuiAlert-icon": {
                fontSize: 24,
              },
            }}
            icon={
              snackbar.severity === "success" ? (
                <CheckCircle fontSize="inherit" />
              ) : (
                <Error fontSize="inherit" />
              )
            }
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Contact;
