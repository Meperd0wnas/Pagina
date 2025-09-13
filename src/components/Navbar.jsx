import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#00814b] to-green-600 text-white shadow fixed w-full top-0 z-30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2 grid grid-cols-3 items-center">
        
        {/* Logo (izquierda) */}
        <div className="flex items-center space-x-2 h-12">
          <img
            src="/images/logoHeader.png"
            alt="Logo"
            className="h-full w-auto object-contain"
          />
          <span className="text-xl font-bold text-white">
            {t("navbar.title", "Computer Lab")}
          </span>
        </div>

        {/* Links en desktop (centrados) */}
        <div className="hidden md:flex justify-center space-x-6 font-medium">
          <a href="#home" className="hover:text-gray-200 transition">
            {t("navbar.home")}
          </a>
          <a href="#laboratories" className="hover:text-gray-200 transition">
            {t("navbar.labs")}
          </a>
          <a href="#monitors" className="hover:text-gray-200 transition">
            {t("navbar.monitors")}
          </a>
          <a href="#contact" className="hover:text-gray-200 transition">
            {t("navbar.contact")}
          </a>
        </div>

        {/* Switcher de idioma (derecha) */}
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

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden absolute right-4 top-5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
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

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#00814b] to-green-600 text-white px-4 pt-2 pb-4 space-y-2 shadow-lg text-center">
          <a href="#home" className="block hover:text-gray-200 transition">
            {t("navbar.home")}
          </a>
          <a href="#laboratories" className="block hover:text-gray-200 transition">
            {t("navbar.labs")}
          </a>
          <a href="#monitors" className="block hover:text-gray-200 transition">
            {t("navbar.monitors")}
          </a>
          <a href="#contact" className="block hover:text-gray-200 transition">
            {t("navbar.contact")}
          </a>

          {/* Switcher de idioma en móvil */}
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
