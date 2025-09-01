// src/App.jsx
import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative">
      {/* LOGO FIJO ARRIBA A LA DERECHA */}
      <div className="absolute top-2 left-10 z-50">
        <img
          src="/images/logo.png" 
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <HomePage />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

