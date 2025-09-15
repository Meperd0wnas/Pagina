import React from "react";
import { Routes, Route } from "react-router-dom"; // 👈 IMPORTANTE
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LaboratoriesPage from "./pages/LaboratoriesPage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative">
      {/* NAVBAR */}
      <Navbar />

      {/* RUTAS */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/laboratories" element={<LaboratoriesPage />} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
