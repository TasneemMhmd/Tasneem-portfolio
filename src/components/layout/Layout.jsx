// src/components/layout/Layout.jsx
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use user's system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Combine the theme object with current mode
  const currentTheme = {
    ...theme,
    mode: darkMode ? "dark" : "light",
    ...(darkMode ? theme.dark : theme.light),
  };

  // Don't render until after client-side hydration
  if (!mounted) return <div style={{ visibility: "hidden" }} />;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
