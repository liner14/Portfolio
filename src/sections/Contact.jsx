import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  Stack,
} from "@mui/material";
import {
  Person,
  Email,
  Message,
  Send,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import SectionWrapper from "../components/SectionWrapper";
import { socialLinks } from "../data";

/**
 * Contact — Contact form + social links (MUI TextField + Framer Motion)
 */
const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);

    try {
      // 1. Prepare data for Web3Forms
      const payload = new FormData();
      // ⚠️ Replace this with your actual Web3Forms access key from web3forms.com
      payload.append("access_key", "000eaa34-f9e5-4573-a95c-5502e1051408");
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      // 2. Send POST request to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      
      const data = await response.json();

      // 3. Handle success or error
      if (data.success) {
        toast.success("Message sent! I'll get back to you soon 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Could not send message.");
    } finally {
      setSending(false);
    }
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)",
      "& fieldset": {
        borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(99,102,241,0.4)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6366f1",
      },
    },
    "& .MuiInputBase-input": {
      color: darkMode ? "#f1f5f9" : "#1e293b",
    },
    "& .MuiInputLabel-root": {
      color: darkMode ? "#94a3b8" : "#64748b",
      "&.Mui-focused": { color: "#6366f1" },
    },
    "& .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: darkMode ? "#94a3b8" : "#64748b",
    },
  };

  return (
    <SectionWrapper id="contact">
      {/* Section heading */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem" },
              background: "linear-gradient(135deg, #818cf8, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              mb: 1.5,
            }}
          >
            Get In Touch
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 4,
              background: "linear-gradient(90deg, #6366f1, #818cf8)",
              borderRadius: 2,
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: darkMode ? "#94a3b8" : "#64748b", maxWidth: 420, mx: "auto" }}
          >
            Have a project in mind or want to collaborate? Drop me a message below.
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", maxWidth: 520 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: 3,
              background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)",
              border: "1px solid",
              borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Stack spacing={2.5} component="form" onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                sx={fieldSx}
              />

              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                sx={fieldSx}
              />

              <TextField
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={5}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1 }}>
                      <Message fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                sx={fieldSx}
              />

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  disabled={sending}
                  endIcon={
                    sending ? (
                      <Box
                        component="span"
                        sx={{
                          width: 16,
                          height: 16,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "white",
                          borderRadius: "50%",
                          animation: "spin 0.7s linear infinite",
                          "@keyframes spin": {
                            from: { transform: "rotate(0deg)" },
                            to: { transform: "rotate(360deg)" },
                          },
                        }}
                      />
                    ) : (
                      <Send fontSize="small" />
                    )
                  }
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    boxShadow: "0 6px 20px rgba(99,102,241,0.35)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #4f46e5, #4338ca)",
                      boxShadow: "0 10px 30px rgba(99,102,241,0.5)",
                    },
                    "&:disabled": { opacity: 0.65 },
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </Stack>

            {/* Social links */}
            <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid", borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}>
              <Typography
                variant="caption"
                sx={{ color: darkMode ? "#94a3b8" : "#64748b", display: "block", textAlign: "center", mb: 1.5 }}
              >
                Or reach me via
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                {[
                  { href: socialLinks.github, icon: <GitHub fontSize="small" />, label: "GitHub" },
                  { href: socialLinks.linkedin, icon: <LinkedIn fontSize="small" />, label: "LinkedIn" },
                ].map(({ href, icon, label }) => (
                  <motion.div key={label} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={icon}
                      size="small"
                      sx={{
                        color: darkMode ? "#94a3b8" : "#64748b",
                        fontWeight: 600,
                        "&:hover": { color: "#6366f1" },
                      }}
                    >
                      {label}
                    </Button>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </SectionWrapper>
  );
};

export default Contact;
