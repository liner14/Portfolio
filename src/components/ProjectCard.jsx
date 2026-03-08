import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { GitHub, OpenInNew, Star } from "@mui/icons-material";

/**
 * ProjectCard — MUI Card with Framer Motion hover animations
 *
 * Props:
 *  - project: { title, description, techStack, github, demo, color, featured }
 *  - darkMode: boolean
 *  - index: number (for stagger animation delay)
 */
const ProjectCard = ({ project, darkMode, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      style={{ height: "100%" }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
          background: darkMode ? "#1e293b" : "#ffffff",
          borderRadius: 3,
          overflow: "hidden",
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          "&:hover": {
            boxShadow: darkMode
              ? "0 20px 60px rgba(99,102,241,0.2)"
              : "0 20px 60px rgba(99,102,241,0.15)",
            borderColor: "rgba(99,102,241,0.35)",
          },
        }}
        elevation={darkMode ? 0 : 2}
      >
        {/* Gradient accent bar */}
        <Box
          sx={{
            height: 5,
            background: `linear-gradient(90deg, ${
              project.color.includes("violet")
                ? "#8b5cf6, #6366f1"
                : project.color.includes("blue")
                ? "#3b82f6, #06b6d4"
                : "#10b981, #14b8a6"
            })`,
          }}
        />

        <CardContent sx={{ flexGrow: 1, p: 3.5 }}>
          {/* Title row */}
          <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 1.5 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "1.1rem",
                color: darkMode ? "#f1f5f9" : "#1e293b",
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </Typography>
            {project.featured && (
              <Chip
                icon={<Star sx={{ fontSize: "0.75rem !important" }} />}
                label="Featured"
                size="small"
                sx={{
                  background: "rgba(99,102,241,0.12)",
                  color: "#818cf8",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  border: "1px solid rgba(99,102,241,0.25)",
                  ml: 1,
                  flexShrink: 0,
                }}
              />
            )}
          </Box>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: darkMode ? "#94a3b8" : "#64748b",
              lineHeight: 1.75,
              mb: 3,
              fontSize: "0.875rem",
            }}
          >
            {project.description}
          </Typography>

          {/* Tech stack chips */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  background: darkMode ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.08)",
                  color: darkMode ? "#a5b4fc" : "#6366f1",
                  fontWeight: 600,
                  fontSize: "0.72rem",
                  border: "1px solid",
                  borderColor: darkMode ? "rgba(99,102,241,0.2)" : "rgba(99,102,241,0.15)",
                }}
              />
            ))}
          </Box>
        </CardContent>

        {/* Action links */}
        <CardActions sx={{ px: 3.5, pb: 3, pt: 0, gap: 1 }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              component="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              startIcon={<GitHub fontSize="small" />}
              sx={{
                color: darkMode ? "#94a3b8" : "#64748b",
                fontWeight: 600,
                fontSize: "0.8rem",
                "&:hover": { color: "#6366f1" },
              }}
            >
              Code
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              component="a"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              endIcon={<OpenInNew fontSize="small" />}
              sx={{
                color: darkMode ? "#94a3b8" : "#64748b",
                fontWeight: 600,
                fontSize: "0.8rem",
                "&:hover": { color: "#6366f1" },
              }}
            >
              View
            </Button>
          </motion.div>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
