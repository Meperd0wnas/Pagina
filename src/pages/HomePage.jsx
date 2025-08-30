// src/pages/HomePage.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="relative flex-grow flex items-center justify-center overflow-hidden min-h-screen">
      {/* VIDEO DE FONDO: */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label={t("homepage.videoAlt", "Background video")}
      />

      {/* Overlay semitransparente para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* CONTENIDO PRINCIPAL (encima del overlay) */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          {t("homepage.welcome")} 
        </h2>

        <p className="text-base md:text-lg text-white/90">
          {t("homepage.description")}
        </p>

        {/* CTA (sin redirección) */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            className="px-5 py-3 rounded-full bg-[#00814b] hover:bg-[#0a9a5e] text-white font-semibold transition"
            onClick={() => {}}
            aria-label={t("homepage.cta", "Ver laboratorios")}
          >
            {t("homepage.cta", "Ver laboratorios")}
          </button>

          <button
            type="button"
            className="px-5 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium transition"
            onClick={() => {}}
            aria-label={t("homepage.learnMore", "Más información")}
          >
            {t("homepage.learnMore", "Más información")}
          </button>
        </div>
      </div>
    </main>
  );
}

