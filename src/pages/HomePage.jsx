import React, { useEffect, useState } from "react";
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
    { id: 1, image: "../../public/images/labs/interactiva.jpg", key: "interactiva" },
    { id: 2, image: "../../public/images/labs/videojuegos.jpg", key: "videojuegos" },
    { id: 3, image: "../../public/images/labs/fundamentos.jpg", key: "fundamentos" },
    { id: 4, image: "../../public/images/labs/estrategias.jpg", key: "estrategias" },
    { id: 5, image: "../../public/images/labs/practicas.jpg", key: "practicas" },
    { id: 6, image: "../../public/images/labs/multimedia.jpg", key: "multimedia" },
    { id: 7, image: "../../public/images/labs/redes.jpg", key: "redes" },
    { id: 8, image: "../../public/images/labs/plataformas.jpg", key: "plataformas" },
    { id: 9, image: "../../public/images/labs/software.jpg", key: "software" },
  ];

  const sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: "40px" } },
      { breakpoint: 768, settings: { centerMode: false, centerPadding: "0px" } },
      { breakpoint: 480, settings: { centerMode: false, centerPadding: "0px" } },
    ],
  };

  const [activeOverlay, setActiveOverlay] = useState(null);

  const handleScroll = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: #00814b !important;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: #00814b !important;
          opacity: 1;
        }
      `}</style>

      {/* Hero principal */}
      <main
        id="home"
        className="relative flex-grow flex items-center justify-center overflow-hidden min-h-screen pt-20"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={t("homepage.videoAlt")}
        >
          {t("homepage.videoAlt")}
        </video>

        <div className="absolute inset-0 bg-black/45 z-10" />

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-lg md:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {t("homepage.welcome")}
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
            {t("homepage.description")}
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={() => handleScroll("#laboratories")}
              className="w-full md:w-auto px-6 py-3 rounded-full bg-[#00814b] hover:bg-[#0a9a5e] text-white font-semibold transition text-center"
            >
              {t("homepage.cta")}
            </button>

            <a
              href="#contact"
              className="w-full md:w-auto px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium transition text-center"
            >
              {t("homepage.learnMore")}
            </a>
          </div>
        </div>
      </main>

      {/* Sección de Laboratorios */}
      <section
        id="laboratories"
        className="relative bg-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 pt-20"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00814b] to-green-600 bg-clip-text text-transparent mb-10">
          {t("homepage.labsTitle")}
        </h2>

        <div className="w-full max-w-5xl mx-auto relative px-2 sm:px-0">
          <Slider {...sliderSettings}>
            {labs.map((lab) => (
              <div key={lab.id} className="px-2 sm:px-4">
                <div className="group relative rounded-2xl overflow-hidden shadow-lg">
                  <div
                    className="relative w-full aspect-square md:aspect-video cursor-pointer"
                    onClick={() =>
                      setActiveOverlay(lab.id === activeOverlay ? null : lab.id)
                    }
                  >
                    <img
                      src={lab.image}
                      alt={t(`labs.${lab.key}`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-[#00814b] to-green-600 text-white flex items-center justify-center px-6 text-center transition-transform duration-700 ease-in-out
                        md:group-hover:translate-y-0
                        ${
                          activeOverlay === lab.id
                            ? "translate-y-0"
                            : "translate-y-full"
                        }`}
                    >
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          {t(`labs.${lab.key}`)}
                        </h3>
                        <p className="text-sm md:text-base">
                          {t("homepage.labInfo")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-center mt-4 text-lg sm:text-base md:text-lg font-medium text-white bg-gradient-to-r from-[#00814b] to-green-600 py-2 px-2 sm:px-4 rounded-md group-hover:opacity-0 transition-opacity duration-300">
                  {t(`labs.${lab.key}`)}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
