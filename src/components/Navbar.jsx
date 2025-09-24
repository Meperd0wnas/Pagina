// src/components/Navbar.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-[#00814b] to-green-600 text-white shadow fixed w-full top-0 z-30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center justify-center md:justify-start space-x-2 h-12">
          <img src="/images/logos/logoHeader.png" alt="Logo" className="h-full w-auto object-contain" />
          <span className="text-xl font-bold text-white">{t("navbar.title", "Computer Lab")}</span>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 font-medium">
          <button onClick={() => handleScroll("#home")} className="hover:text-gray-200 transition">{t("navbar.home")}</button>
          <button onClick={() => handleScroll("#laboratories")} className="hover:text-gray-200 transition">{t("navbar.labs")}</button>
          <Link to="/monitors" className="hover:text-gray-200 transition">{t("navbar.monitors")}</Link>
          <button onClick={() => handleScroll("#contact")} className="hover:text-gray-200 transition">{t("navbar.contact")}</button>
        </div>

        <div className="hidden md:flex justify-end space-x-2">
          <button onClick={() => i18n.changeLanguage("es")} className="hover:opacity-80 transition">🇪🇸</button>
          <button onClick={() => i18n.changeLanguage("en")} className="hover:opacity-80 transition">🇺🇸</button>
        </div>

        <button className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#00814b] to-green-600 text-white px-4 pt-2 pb-4 space-y-2 shadow-lg text-center">
          <button onClick={() => handleScroll("#home")} className="block w-full">{t("navbar.home")}</button>
          <button onClick={() => handleScroll("#laboratories")} className="block w-full">{t("navbar.labs")}</button>
          <Link to="/monitors" onClick={() => setIsOpen(false)} className="block w-full">{t("navbar.monitors")}</Link>
          <button onClick={() => handleScroll("#contact")} className="block w-full">{t("navbar.contact")}</button>

          <div className="flex justify-center space-x-2 pt-2">
            <button onClick={() => i18n.changeLanguage("es")} className="hover:opacity-80 transition">🇪🇸</button>
            <button onClick={() => i18n.changeLanguage("en")} className="hover:opacity-80 transition">🇺🇸</button>
          </div>
        </div>
      )}
    </nav>
  );
}
