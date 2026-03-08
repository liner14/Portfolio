import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Close as CloseIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import { navLinks } from "../data";

/**
 * Navbar — Responsive navigation bar (MUI AppBar + Framer Motion)
 *
 * Features:
 * - MUI AppBar with glassmorphism on scroll via useScrollTrigger
 * - Smooth scroll to sections via anchor IDs
 * - Mobile Drawer with slide-in animation
 * - Dark/light mode toggle with MUI IconButton
 */
const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setDrawerOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1200 }}
      >
        <AppBar
          position="static"
          elevation={scrolled ? 4 : 0}
          sx={{
            background: scrolled
              ? darkMode
                ? "rgba(15, 23, 42, 0.85)"
                : "rgba(255, 255, 255, 0.85)"
              : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled
              ? darkMode
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(0,0,0,0.06)"
              : "none",
            transition: "all 0.3s ease",
          }}
        >
          <Toolbar sx={{ maxWidth: "1100px", mx: "auto", width: "100%", px: { xs: 2, sm: 3 } }}>
            {/* Brand Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Box
                onClick={() => handleNavClick("hero")}
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
                  fontSize: "1.25rem",
                  fontFamily: "Inter, sans-serif",
                  userSelect: "none",
                }}
              >
                <CodeIcon sx={{ color: "#6366f1", WebkitTextFillColor: "#6366f1" }} fontSize="small" />
                liner14
              </Box>
            </motion.div>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link, i) => (
                <motion.div key={link.id} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => handleNavClick(link.id)}
                    sx={{
                      color: darkMode ? "#f1f5f9" : "#1e293b",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      px: 1.5,
                      py: 1,
                      borderRadius: 2,
                      "&:hover": {
                        background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}

              {/* Dark/light toggle */}
              <motion.div whileHover={{ scale: 1.1, rotate: 20 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  onClick={toggleDarkMode}
                  sx={{
                    ml: 1,
                    color: darkMode ? "#fbbf24" : "#6366f1",
                    background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                    "&:hover": {
                      background: darkMode ? "rgba(255,255,255,0.15)" : "rgba(99,102,241,0.1)",
                    },
                  }}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
                </IconButton>
              </motion.div>
            </Box>

            {/* Mobile: toggle + hamburger */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
              <IconButton
                onClick={toggleDarkMode}
                sx={{ color: darkMode ? "#fbbf24" : "#6366f1" }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Brightness7 fontSize="small" /> : <Brightness4 fontSize="small" />}
              </IconButton>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: darkMode ? "#f1f5f9" : "#1e293b" }}
                aria-label="Open menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: darkMode ? "#0f172a" : "#ffffff",
            borderLeft: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: darkMode ? "#f1f5f9" : "#1e293b" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleNavClick(link.id)}
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      color: darkMode ? "#f1f5f9" : "#1e293b",
                      "&:hover": {
                        background: darkMode ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.08)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{ fontWeight: 500, fontSize: "0.95rem" }}
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
