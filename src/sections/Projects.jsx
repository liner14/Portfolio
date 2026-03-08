import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Chip,
} from "@mui/material";
import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects, allTechTags } from "../data";

/**
 * Projects — Filterable project grid (MUI + Framer Motion)
 */
const Projects = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.techStack.includes(activeFilter));

  return (
    <SectionWrapper id="projects">
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
            My Projects
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
            sx={{ color: darkMode ? "#94a3b8" : "#64748b", maxWidth: 450, mx: "auto" }}
          >
            Real projects from my{" "}
            <a
              href="https://github.com/liner14"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6366f1", textDecoration: "none", fontWeight: 600 }}
            >
              GitHub @liner14
            </a>
          </Typography>
        </motion.div>
      </Box>

      {/* Filter chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
            mb: 5,
          }}
        >
          {allTechTags.map((tag) => (
            <motion.div key={tag} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Chip
                label={tag}
                clickable
                onClick={() => setActiveFilter(tag)}
                sx={{
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  px: 0.5,
                  background:
                    activeFilter === tag
                      ? "linear-gradient(135deg, #6366f1, #4f46e5)"
                      : darkMode
                      ? "rgba(255,255,255,0.07)"
                      : "rgba(0,0,0,0.05)",
                  color:
                    activeFilter === tag
                      ? "#ffffff"
                      : darkMode
                      ? "#94a3b8"
                      : "#64748b",
                  boxShadow:
                    activeFilter === tag ? "0 4px 15px rgba(99,102,241,0.35)" : "none",
                  border: "1px solid",
                  borderColor:
                    activeFilter === tag
                      ? "transparent"
                      : darkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)",
                  transition: "all 0.2s ease",
                }}
              />
            </motion.div>
          ))}
        </Box>
      </motion.div>

      {/* Project cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <Grid container spacing={3}>
            {filteredProjects.map((project, index) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectCard project={project} darkMode={darkMode} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography
            variant="body1"
            sx={{ color: darkMode ? "#94a3b8" : "#64748b" }}
          >
            No projects found for "{activeFilter}".
          </Typography>
        </Box>
      )}
    </SectionWrapper>
  );
};

export default Projects;
