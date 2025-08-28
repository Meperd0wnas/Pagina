// src/components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <p className="text-sm">
          {t("footer.rights", { year: new Date().getFullYear() })}
        </p>
        <div className="space-x-6">
          <a href="#" className="hover:text-white">{t("footer.privacy")}</a>
          <a href="#" className="hover:text-white">{t("footer.terms")}</a>
          <a href="#" className="hover:text-white">{t("footer.support")}</a>
        </div>
      </div>
    </footer>
  );
}

