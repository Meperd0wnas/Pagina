// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Laboratorio IS</div>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-200 transition">Inicio</a>
          <a href="#" className="hover:text-gray-200 transition">Laboratorios</a>
          <a href="#" className="hover:text-gray-200 transition">Monitores</a>
          <a href="#" className="hover:text-gray-200 transition">Contacto</a>
        </div>

        {/* Botón (puede ser login) */}
        <button className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Ingresar
        </button>
      </div>
    </nav>
  );
}
