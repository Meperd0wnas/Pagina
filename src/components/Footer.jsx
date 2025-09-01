// src/components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 min-h-[150px] flex items-center">
      <div className="max-w-6xl mx-auto px-4 text-center w-full">
        <p className="text-sm mb-4 md:mb-0">
          {t("footer.rights")}
        </p>

        <div className="mt-4 md:mt-0">
          <nav className="flex justify-center gap-6">
            <a href="#" className="hover:text-white">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white">{t("footer.terms")}</a>
            <a href="#" className="hover:text-white">{t("footer.support")}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
