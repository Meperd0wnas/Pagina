import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage("es")}
        className="px-2 py-1 bg-green-700 text-white rounded hover:bg-green-800 transition"
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className="px-2 py-1 bg-green-700 text-white rounded hover:bg-green-800 transition"
      >
        EN
      </button>
    </div>
  );
}
