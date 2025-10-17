import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { labsData } from "../data/labsData";

export default function HomePage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = `${t("navbar.title")} - Escuela Colombiana de Ingeniería Julio Garavito`;
  }, [t]);

  const labs = [
    { id: "interactive", image: "../../public/images/labs/interactiva.jpg", key: "interactiva" },
    { id: "games", image: "../../public/images/labs/videojuegos.jpg", key: "videojuegos" },
    { id: "fundamentals", image: "../../public/images/labs/fundamentos.jpg", key: "fundamentos" },
    { id: "strategies", image: "../../public/images/labs/estrategias.jpg", key: "estrategias" },
    { id: "practices", image: "../../public/images/labs/practicas.jpg", key: "practicas" },
    { id: "multimedia", image: "../../public/images/labs/multimedia.jpg", key: "multimedia" },
    { id: "networks", image: "../../public/images/labs/redes.jpg", key: "redes" },
    { id: "platforms", image: "../../public/images/labs/plataformas.jpg", key: "plataformas" },
    { id: "software", image: "../../public/images/labs/software.jpg", key: "software" },
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

  // Restaurar el componente InfoCard con fondos
  const InfoCard = ({ title, content }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
      <h4 className="text-lg font-bold text-white/90 border-b border-white/20 pb-2 mb-2">
        {title}
      </h4>
      {Array.isArray(content) ? (
        <ul className="text-white/80 text-sm md:text-base list-disc pl-4 space-y-1">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-white/80 text-sm md:text-base">{content}</p>
      )}
    </div>
  );

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
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/labs/portada2.jpg')" }}
    >


      {/* Contenido del carrusel */}
      <div className="relative z-10 w-full max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-[#00814b] to-green-600 bg-clip-text text-transparent mb-14">
          {t("homepage.labsTitle")}
        </h2>

        <div className="w-full mx-auto relative px-2 sm:px-4">
          <Slider {...sliderSettings}>
            {labs.map((lab) => {
              const labInfo = labsData[lab.id]?.[i18n.language];
              return (
                <div key={lab.id} className="px-4 sm:px-6">
                  <div className="group relative overflow-hidden shadow-2xl bg-white">
                    <div
                      className="relative w-full aspect-[16/9] cursor-pointer"
                      onClick={() =>
                        setActiveOverlay(lab.id === activeOverlay ? null : lab.id)
                      }
                    >
                      <img
                        src={lab.image}
                        alt={t(`labs.${lab.key}`)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay con grid de información */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-[#00814b]/95 to-green-600/95 text-white flex items-center justify-center px-4 md:px-8 py-6 text-left transition-transform duration-700 ease-in-out overflow-y-auto
                          md:group-hover:translate-y-0
                          ${
                            activeOverlay === lab.id
                              ? "translate-y-0"
                              : "translate-y-full"
                          }`}
                      >
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                          <InfoCard 
                            title={t('labs.schedule')} 
                            content={labInfo?.schedule} 
                          />
                          <InfoCard 
                            title={t('labs.phone')} 
                            content={labInfo?.phone} 
                          />
                          <InfoCard 
                            title={t('labs.equipment')} 
                            content={labInfo?.equipment} 
                          />
                          <InfoCard 
                            title={t('labs.purpose')} 
                            content={labInfo?.purpose} 
                          />
                          <InfoCard 
                            title={t('labs.softwaresInstalled')} 
                            content={labInfo?.software} 
                          />
                          <InfoCard 
                            title={t('labs.ubi')} 
                            content={labInfo?.ubi} 
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center mt-6 text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-[#00814b] to-green-600 py-3 px-4 shadow-md">
                    {labInfo?.name}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
    </>
  );
}