import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Paper,
  LinearProgress,
  Grid,
  Tooltip,
} from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import { skills } from "../data";

/**
 * Skills — Grouped skill progress bars (MUI LinearProgress + Framer Motion)
 */
const categoryIcons = {
  Frontend: "🎨",
  Backend: "⚙️",
  Tools: "🛠️",
};

const Skills = ({ darkMode }) => {
  return (
    <SectionWrapper id="skills">
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
            Skills & Technologies
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

      <Grid container spacing={3}>
        {Object.entries(skills).map(([category, items], catIndex) => (
          <Grid key={category} size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: 3,
                  height: "100%",
                  background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
                  border: "1px solid",
                  borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                  backdropFilter: "blur(8px)",
                  "&:hover": {
                    borderColor: "rgba(99,102,241,0.3)",
                  },
                  transition: "border-color 0.3s ease",
                }}
              >
                {/* Category header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 3,
                    pb: 2,
                    borderBottom: "1px solid",
                    borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                  }}
                >
                  <Typography variant="h6" component="span" sx={{ fontSize: "1.25rem" }}>
                    {categoryIcons[category]}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: darkMode ? "#f1f5f9" : "#1e293b",
                      fontSize: "1rem",
                    }}
                  >
                    {category}
                  </Typography>
                </Box>

                {/* Skill bars */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + i * 0.07 }}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 0.8,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: darkMode ? "#e2e8f0" : "#334155",
                              fontSize: "0.85rem",
                            }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#6366f1",
                              fontWeight: 700,
                              fontSize: "0.75rem",
                            }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>

                        {/* Animated progress bar */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: catIndex * 0.1 + i * 0.07 + 0.2,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          style={{ transformOrigin: "left" }}
                        >
                          <Tooltip title={`${skill.level}% proficiency`} placement="top" arrow>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 7,
                                borderRadius: 4,
                                backgroundColor: darkMode
                                  ? "rgba(255,255,255,0.08)"
                                  : "rgba(0,0,0,0.06)",
                                "& .MuiLinearProgress-bar": {
                                  borderRadius: 4,
                                  background: `linear-gradient(90deg, #6366f1 ${skill.level - 30}%, #a78bfa 100%)`,
                                },
                              }}
                            />
                          </Tooltip>
                        </motion.div>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Skills;
