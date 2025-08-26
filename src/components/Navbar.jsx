// src/components/Navbar.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <nav className="bg-gradient-to-r from-[#00814b] to-green-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">{t("navbar.title")}</div>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-200 transition">
            {t("navbar.home")}
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            {t("navbar.labs")}
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            {t("navbar.monitors")}
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            {t("navbar.contact")}
          </a>
        </div>

        {/* Language Switcher */}
        <div className="flex space-x-2">
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
    </nav>
  );
}
