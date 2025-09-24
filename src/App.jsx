// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MonitorsPage from "./pages/MonitorsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL (cambia según la ruta) */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/monitors" element={<MonitorsPage />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}