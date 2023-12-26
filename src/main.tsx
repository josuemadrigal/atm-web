import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// En tu archivo TypeScript o JavaScript principal

// Aplicar el tema almacenado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    document.body.classList.add(storedTheme);
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
