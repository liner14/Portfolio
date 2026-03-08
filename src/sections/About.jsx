import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Chip,
} from "@mui/material";
import {
  CheckCircle,
  Code,
  Palette,
  GitHub,
} from "@mui/icons-material";
import SectionWrapper from "../components/SectionWrapper";
import { aboutInfo } from "../data";

/**
 * About — Bio, highlights, and stats section (MUI + Framer Motion)
 */
const About = ({ darkMode }) => {
  const stats = [
    { label: "Projects Built", value: "5+" },
    { label: "GitHub Repos", value: "3+" },
    { label: "Tech Stack", value: "10+" },
  ];

  return (
    <SectionWrapper id="about">
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
            {aboutInfo.title}
          </Typography>
          <Box
            sx={{
              width: 64,
              height: 4,
              background: "linear-gradient(90deg, #6366f1, #818cf8)",
              borderRadius: 2,
              mx: "auto",
            }}
          />
        </motion.div>
      </Box>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 3, sm: 6 },
            mb: 6,
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2rem", sm: "2.5rem" },
                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: darkMode ? "#94a3b8" : "#64748b", fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </motion.div>

      {/* Bio + Highlights grid */}
      <Grid container spacing={4} alignItems="flex-start">
        {/* Bio text */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)",
                border: "1px solid",
                borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? "#94a3b8" : "#64748b",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                }}
              >
                {aboutInfo.bio}
              </Typography>

              {/* Tech interests */}
              <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {["React", "JavaScript", "MUI", "Framer Motion", "CSS"].map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      background: "rgba(99,102,241,0.12)",
                      color: "#818cf8",
                      fontWeight: 600,
                      border: "1px solid rgba(99,102,241,0.25)",
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* Highlights list */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {aboutInfo.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      borderRadius: 2.5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.8)",
                      border: "1px solid",
                      borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                      backdropFilter: "blur(8px)",
                      transition: "border-color 0.2s ease",
                      "&:hover": {
                        borderColor: "rgba(99,102,241,0.4)",
                      },
                    }}
                  >
                    <CheckCircle sx={{ color: "#6366f1", mt: 0.2, flexShrink: 0 }} fontSize="small" />
                    <Typography
                      variant="body2"
                      sx={{
                        color: darkMode ? "#f1f5f9" : "#1e293b",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </Typography>
                  </Paper>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default About;
