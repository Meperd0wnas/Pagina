// src/App.jsx
import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";   // 👈 Navbar traducible
import Footer from "./components/Footer";   // 👈 Footer traducible

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <HomePage />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

