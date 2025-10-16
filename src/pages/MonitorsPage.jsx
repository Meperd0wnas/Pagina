import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function MonitorsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t(
      "navbar.monitors",
      "Monitors"
    )} - Escuela Colombiana de Ingeniería Julio Garavito`;
  }, [t]);

  const monitors = [
    { id: 1, key: "david", image: "/images/monitors/david.jpg" },
    { id: 2, key: "ruge", image: "/images/monitors/ruge.jpg" },
    { id: 3, key: "tulio", image: "/images/monitors/tulio.jpg" },
    { id: 4, key: "sergio", image: "/images/monitors/sergio.jpg" },
    { id: 5, key: "maria", image: "/images/monitors/maria.jpg" },
    { id: 6, key: "laura", image: "/images/monitors/laura.jpg" },
  ];

  return (
    <motion.section
      id="monitors"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 pt-20 bg-fixed bg-center bg-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00814b] to-green-600 bg-clip-text text-transparent mb-10">
          {t("monitors.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          {monitors.map((monitor) => (
            <div key={monitor.id} className="flex flex-col items-center text-center group">
              
              {/* Contenedor 3D */}
              <div className="relative w-full h-64 perspective shadow-lg">
                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                  
                  {/* Frente */}
                  <div className="absolute inset-0 backface-hidden overflow-hidden">
                    <img
                      src={monitor.image}
                      alt={t(`monitors.students.${monitor.key}.name`)}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Reverso */}
                  <div className="absolute inset-0 bg-[#00814b] text-white flex flex-col items-center justify-center text-center px-4 backface-hidden rotate-y-180">
                    <p className="text-lg font-semibold">
                      {t(`monitors.students.${monitor.key}.name`)}
                    </p>
                    <p className="text-sm mt-2">
                      {t(`monitors.students.${monitor.key}.caption`)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Nombre debajo */}
              <p className="mt-3 text-lg font-semibold bg-gradient-to-r from-[#00814b] to-green-600 bg-clip-text text-transparent">
                {t(`monitors.students.${monitor.key}.name`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos 3D */}
      <style>{`
        .perspective { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </motion.section>
  );
}
