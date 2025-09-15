import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; 

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("navbar.title")} - Escuela Colombiana de Ingeniería Julio Garavito`;
  }, [t]);

  return (
    <main
      id="home"
      className="relative flex-grow flex items-center justify-center overflow-hidden min-h-screen pt-20"
    >
      {/* VIDEO DE FONDO */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Contenido */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-lg md:max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
          {t("homepage.welcome")}
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
          {t("homepage.description")}
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/laboratories"
            className="w-full md:w-auto px-6 py-3 rounded-full bg-[#00814b] hover:bg-[#0a9a5e] text-white font-semibold transition text-center"
          >
            {t("homepage.cta", "Ver laboratorios")}
          </Link>

          <a
            href="#contact"
            className="w-full md:w-auto px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium transition text-center"
          >
            {t("homepage.learnMore", "Más información")}
          </a>
        </div>
      </div>
    </main>
  );
}


