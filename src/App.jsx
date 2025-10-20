// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MonitorsPage from "./pages/MonitorsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importar las páginas de laboratorios
import InteractivaPage from "./pages/labs/InteractivaPage";
import VideojuegosPage from "./pages/labs/VideojuegosPage";
import FundamentosPage from "./pages/labs/FundamentosPage";
import EstrategiasPage from "./pages/labs/EstrategiasPage";
import PracticasPage from "./pages/labs/PracticasPage";
import MultimediaPage from "./pages/labs/MultimediaPage";
import RedesPage from "./pages/labs/RedesPage";
import PlataformasPage from "./pages/labs/PlataformasPage";
import SoftwarePage from "./pages/labs/SoftwarePage";
import C1205APage from "./pages/labs/C1205APage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL (cambia según la ruta) */}
      <main className="flex-grow mt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/monitors" element={<MonitorsPage />} />

          {/* Rutas de los laboratorios */}
          <Route path="/labs/interactiva" element={<InteractivaPage />} />
          <Route path="/labs/videojuegos" element={<VideojuegosPage />} />
          <Route path="/labs/fundamentos" element={<FundamentosPage />} />
          <Route path="/labs/estrategias" element={<EstrategiasPage />} />
          <Route path="/labs/practicas" element={<PracticasPage />} />
          <Route path="/labs/multimedia" element={<MultimediaPage />} />
          <Route path="/labs/redes" element={<RedesPage />} />
          <Route path="/labs/plataformas" element={<PlataformasPage />} />
          <Route path="/labs/software" element={<SoftwarePage />} />
          <Route path="/labs/c1205a" element={<C1205APage />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
