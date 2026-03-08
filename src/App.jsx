import { useState, useEffect, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

/**
 * App — Root component
 *
 * Manages dark/light mode state (persisted in localStorage),
 * provides MUI ThemeProvider with dynamic theme switching,
 * and renders the full page layout with all sections.
 */
function App() {
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-dark-mode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Toggle dark mode and persist the choice
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("portfolio-dark-mode", JSON.stringify(!prev));
      return !prev;
    });
  };

  // Apply the "dark" class to the <html> element for Tailwind dark variant
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Create MUI theme that syncs with dark mode state
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#6366f1",
            light: "#818cf8",
            dark: "#4f46e5",
          },
          secondary: {
            main: "#a78bfa",
          },
          background: {
            default: darkMode ? "#0f172a" : "#f8fafc",
            paper: darkMode ? "#1e293b" : "#ffffff",
          },
        },
        typography: {
          fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        },
        shape: {
          borderRadius: 12,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 600,
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                fontWeight: 500,
              },
            },
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode
            ? "bg-surface-dark text-text-dark"
            : "bg-surface-light text-text-light"
        }`}
      >
        {/* Toast notification container */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: darkMode ? "#1e293b" : "#ffffff",
              color: darkMode ? "#f1f5f9" : "#1e293b",
              border: "1px solid rgba(99,102,241,0.3)",
            },
          }}
        />

        {/* Sticky navigation bar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main content sections */}
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
