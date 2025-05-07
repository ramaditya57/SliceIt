import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

// Get the repository name from the location pathname if deployed on GitHub Pages
const getBasename = () => {
  // For local development, use empty string
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    return "";
  }
  
  // For GitHub Pages, extract the repository name from pathname
  const pathname = window.location.pathname;
  const segments = pathname.split("/");
  // The repository name should be the first segment after the leading slash
  return segments.length > 1 ? `/${segments[1]}` : "";
};

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </HashRouter>
);