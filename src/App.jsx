// src/App.jsx
import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar"; // 👈 importar el navbar traducible

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <Navbar />  {/* 👈 usar el Navbar con traducción */}

      {/* CONTENIDO PRINCIPAL */}
      <HomePage />

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-200 py-4 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          © Copyright 2025 Laboratorio de informática
        </div>
      </footer>
    </div>
  );
}
