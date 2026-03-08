import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  KeyboardArrowDown,
  FileDownload,
} from "@mui/icons-material";
import { heroInfo, socialLinks } from "../data";

/**
 * Hero — Landing section with typing animation and rich Framer Motion effects
 *
 * Features:
 * - Typing animation cycling through multiple roles
 * - Animated gradient orbs in background
 * - MUI Buttons for CTA and social links
 * - Framer Motion stagger entrance
 * - Scroll indicator with bounce animation
 */
const Hero = ({ darkMode }) => {
  const roles = heroInfo.roles || [heroInfo.role];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const delta = isDeleting ? 60 : 90;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
    >
      {/* Animated gradient orbs */}
      <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </Box>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 720, padding: "0 1rem" }}
      >
        {/* Greeting badge */}
        <motion.div variants={itemVariants}>
          <Chip
            label="👋 Available for opportunities"
            variant="outlined"
            size="small"
            sx={{
              mb: 3,
              borderColor: "primary.main",
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.75rem",
              background: darkMode ? "rgba(99,102,241,0.1)" : "rgba(99,102,241,0.06)",
            }}
          />
        </motion.div>

        {/* Greeting */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="h6"
            sx={{ color: "primary.main", fontWeight: 600, mb: 1, letterSpacing: 1 }}
          >
            {heroInfo.greeting}
          </Typography>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "3.5rem", sm: "5rem", md: "6rem" },
              lineHeight: 1,
              mb: 3,
              background: "linear-gradient(135deg, #818cf8, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {heroInfo.name}
          </Typography>
        </motion.div>

        {/* Typing role */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              color: darkMode ? "#f1f5f9" : "#1e293b",
              mb: 3,
              minHeight: { xs: "2.5rem", sm: "3rem" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
            }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{
                display: "inline-block",
                width: 3,
                height: "1em",
                background: "#6366f1",
                borderRadius: 2,
                verticalAlign: "middle",
              }}
            />
          </Typography>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <Typography
            variant="body1"
            sx={{
              color: darkMode ? "#94a3b8" : "#64748b",
              maxWidth: 520,
              mx: "auto",
              mb: 5,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              lineHeight: 1.75,
            }}
          >
            {heroInfo.tagline}
          </Typography>
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={itemVariants}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowDown />}
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #4f46e5, #4338ca)",
                    boxShadow: "0 12px 40px rgba(99,102,241,0.5)",
                  },
                  fontWeight: 700,
                }}
              >
                {heroInfo.cta}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<FileDownload />}
                href={heroInfo.resumeUrl}
                download
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 8,
                  borderColor: darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
                  color: darkMode ? "#f1f5f9" : "#1e293b",
                  "&:hover": {
                    background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                    borderColor: "primary.main",
                  },
                  fontWeight: 600,
                }}
              >
                Download CV
              </Button>
            </motion.div>
          </Stack>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={itemVariants}>
          <Stack direction="row" spacing={1.5} justifyContent="center">
            {[
              { href: socialLinks.github, icon: <GitHub />, label: "GitHub" },
              { href: socialLinks.linkedin, icon: <LinkedIn />, label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <motion.div key={label} whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  sx={{
                    color: darkMode ? "#f1f5f9" : "#1e293b",
                    background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                    border: "1px solid",
                    borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
                    "&:hover": {
                      background: "rgba(99,102,241,0.15)",
                      borderColor: "primary.main",
                      color: "primary.main",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)" }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            width: 24,
            height: 40,
            borderRadius: 12,
            border: `2px solid ${darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"}`,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
