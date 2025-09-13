import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("navbar.title")} - Escuela Colombiana de Ingeniería Julio Garavito`;
  }, [t]);

  const labs = [
    { id: 1, image: "/images/lab1.jpg", title: "Laboratorio 1" },
    { id: 2, image: "/images/lab2.jpg", title: "Laboratorio 2" },
    { id: 3, image: "/images/lab3.jpg", title: "Laboratorio 3" },
    { id: 4, image: "/images/lab4.jpg", title: "Laboratorio 4" },
  ];

  const sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  };

  return (
    <>
      {/* Hero principal */}
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
        >
          {t("homepage.videoAlt", "Tu navegador no soporta video de fondo.")}
        </video>

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
            <a
              href="#laboratories"
              className="w-full md:w-auto px-6 py-3 rounded-full bg-[#00814b] hover:bg-[#0a9a5e] text-white font-semibold transition text-center"
            >
              {t("homepage.cta", "Ver laboratorios")}
            </a>

            <a
              href="#contact"
              className="w-full md:w-auto px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium transition text-center"
            >
              {t("homepage.learnMore", "Más información")}
            </a>
          </div>
        </div>
      </main>

      {/* Sección de Laboratorios */}
      <section
        id="laboratories"
        className="relative bg-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-10">
          {t("homepage.labsTitle", "Nuestros Laboratorios")}
        </h2>

        <div className="w-full max-w-5xl">
          <Slider {...sliderSettings}>
            {labs.map((lab) => (
              <div key={lab.id} className="px-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-[70vh] object-cover"
                  />
                </div>
                <p className="text-center mt-4 text-lg font-medium text-gray-700">
                  {lab.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
