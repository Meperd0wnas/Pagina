import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // menú móvil
  const [isLabsOpen, setIsLabsOpen] = useState(false); // menú Labs
  const hoverTimeout = useRef(null); // referencia para el delay

  const labs = [
    { id: "interactiva", path: "/labs/interactiva" },
    { id: "videojuegos", path: "/labs/videojuegos" },
    { id: "fundamentos", path: "/labs/fundamentos" },
    { id: "estrategias", path: "/labs/estrategias" },
    { id: "practicas", path: "/labs/practicas" },
    { id: "multimedia", path: "/labs/multimedia" },
    { id: "redes", path: "/labs/redes" },
    { id: "plataformas", path: "/labs/plataformas" },
    { id: "software", path: "/labs/software" },
  ];

  // Abre el menú Labs
  const handleLabsEnter = () => {
    clearTimeout(hoverTimeout.current);
    setIsLabsOpen(true);
  };

  // Cierra el menú Labs con delay
  const handleLabsLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsLabsOpen(false);
    }, 50);
  };

  return (
    <nav className="bg-gradient-to-r from-[#00814b] to-green-600 text-white shadow fixed w-full top-0 z-30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start space-x-2 h-12">
          <img
            src="/images/logos/logoHeader.png"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
          <span className="text-xl font-bold text-white">
            {t("navbar.title", "Computer Lab")}
          </span>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 font-medium">
          <Link to="/" className="hover:text-gray-200 transition">
            {t("navbar.home")}
          </Link>

          {/* Dropdown Labs */}
          <div
            className="relative"
            onMouseEnter={handleLabsEnter}
            onMouseLeave={handleLabsLeave}
          >
            <span className="hover:text-gray-200 transition cursor-pointer">
              {t("navbar.labs")}
            </span>

            {isLabsOpen && (
              <div
                className="absolute left-0 bg-gradient-to-b from-white to-gray-100 text-black mt-2 shadow-2xl w-80 p-2 z-40 rounded-lg"
                onMouseEnter={handleLabsEnter} // mantiene abierto al entrar
                onMouseLeave={handleLabsLeave} // inicia delay al salir
              >
                {labs.map((lab) => (
                  <Link
                    key={lab.id}
                    to={lab.path}
                    onClick={() => setIsLabsOpen(false)}
                    className="block px-6 py-3 text-lg font-semibold hover:bg-green-100 hover:text-green-700 transition-all duration-200 rounded-md"
                  >
                    {t(`labs.${lab.id}`)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/monitors" className="hover:text-gray-200 transition">
            {t("navbar.monitors")}
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition">
            {t("navbar.contact")}
          </Link>
        </div>

        {/* Botones de idioma Desktop */}
        <div className="hidden md:flex justify-end space-x-2">
          <button
            onClick={() => i18n.changeLanguage("es")}
            className="hover:opacity-80 transition"
          >
            🇪🇸
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className="hover:opacity-80 transition"
          >
            🇺🇸
          </button>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#00814b] to-green-600 text-white px-4 pt-2 pb-4 space-y-2 shadow-lg text-center">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full"
          >
            {t("navbar.home")}
          </Link>

          {/* Labs en móvil */}
          <details className="w-full">
            <summary className="cursor-pointer text-lg font-semibold hover:text-gray-200">
              {t("navbar.labs")}
            </summary>
            <div className="mt-2 space-y-1">
              {labs.map((lab) => (
                <Link
                  key={lab.id}
                  to={lab.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm hover:text-green-200"
                >
                  {t(`labs.${lab.id}`)}
                </Link>
              ))}
            </div>
          </details>

          <Link
            to="/monitors"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full"
          >
            {t("navbar.monitors")}
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full"
          >
            {t("navbar.contact")}
          </Link>

          {/* Idiomas en móvil */}
          <div className="flex justify-center space-x-2 pt-2">
            <button
              onClick={() => i18n.changeLanguage("es")}
              className="hover:opacity-80 transition"
            >
              🇪🇸
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="hover:opacity-80 transition"
            >
              🇺🇸
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
