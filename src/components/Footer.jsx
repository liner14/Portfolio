import { motion } from "framer-motion";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  KeyboardArrowUp,
  FileDownload,
  Code,
} from "@mui/icons-material";
import { socialLinks, heroInfo } from "../data";

/**
 * Footer — Site footer with MUI + Framer Motion
 */
const Footer = ({ darkMode }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        px: 3,
        borderTop: "1px solid",
        borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
        background: darkMode ? "#0f172a" : "#f8fafc",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
        >
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                cursor: "pointer",
                background: "linear-gradient(135deg, #818cf8, #6366f1, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 800,
                fontSize: "1.2rem",
                fontFamily: "Inter, sans-serif",
                userSelect: "none",
              }}
              onClick={scrollToTop}
            >
              <Code sx={{ color: "#6366f1", WebkitTextFillColor: "#6366f1" }} fontSize="small" />
              liner14
            </Box>
          </motion.div>

          {/* Social + Resume */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            {[
              { href: socialLinks.github, icon: <GitHub fontSize="small" />, label: "GitHub" },
              { href: socialLinks.linkedin, icon: <LinkedIn fontSize="small" />, label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <motion.div key={label} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  size="small"
                  sx={{
                    color: darkMode ? "#94a3b8" : "#64748b",
                    background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                    border: "1px solid",
                    borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                    "&:hover": {
                      color: "#6366f1",
                      borderColor: "rgba(99,102,241,0.4)",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component="a"
                href={heroInfo.resumeUrl}
                download
                size="small"
                startIcon={<FileDownload fontSize="small" />}
                sx={{
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  color: "#fff",
                  fontWeight: 700,
                  px: 2,
                  fontSize: "0.8rem",
                  "&:hover": {
                    background: "linear-gradient(135deg, #4f46e5, #4338ca)",
                  },
                }}
              >
                Resume
              </Button>
            </motion.div>
          </Stack>

          {/* Back to top */}
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <IconButton
              onClick={scrollToTop}
              size="small"
              aria-label="Back to top"
              sx={{
                color: darkMode ? "#94a3b8" : "#64748b",
                background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                border: "1px solid",
                borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                "&:hover": { color: "#6366f1", borderColor: "rgba(99,102,241,0.4)" },
              }}
            >
              <KeyboardArrowUp fontSize="small" />
            </IconButton>
          </motion.div>
        </Stack>

        <Divider sx={{ my: 3, borderColor: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" }} />

        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            color: darkMode ? "#64748b" : "#94a3b8",
          }}
        >
          © {new Date().getFullYear()} Akash (liner14) · Built with React, Vite, MUI & Framer Motion ⚡
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
