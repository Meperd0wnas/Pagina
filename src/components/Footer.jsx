// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 min-h-[160px] flex items-center">
      <div className="max-w-6xl mx-auto px-4 text-center w-full">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Laboratorio IS. Todos los derechos reservados.
        </p>

        <div className="mt-4 md:mt-0">
          <nav className="flex justify-center gap-6">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Uso</a>
            <a href="#" className="hover:text-white">Soporte</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

