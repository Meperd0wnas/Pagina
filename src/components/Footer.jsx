// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Laboratorio IS. Todos los derechos reservados.
        </p>
        <div className="space-x-6">
          <a href="#" className="hover:text-white">Política de Privacidad</a>
          <a href="#" className="hover:text-white">Términos de Uso</a>
          <a href="#" className="hover:text-white">Soporte</a>
        </div>
      </div>
    </footer>
  );
}
