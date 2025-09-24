// src/pages/MonitorsPage.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function MonitorsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("navbar.monitors", "Monitores")} - Escuela Colombiana de Ingeniería Julio Garavito`;
  }, [t]);

  const monitors = [
    { id: 1, image: "#", name: "David Salamanca", caption: "Estudiante Ingeniería de Sistemas" },
    { id: 2, image: "../../public/images/monitors/ruge.jpg", name: "Daniel Ruge", caption: "Estudiante Ingeniería de Sistemas" },
    { id: 3, image: "../../public/images/monitors/tulio.jpg", name: "Tulio Riaño", caption: "Estudiante Ingeniería de Sistemas" },
    { id: 4, image: "#", name: "Sergio", caption: "Estudiante Ingeniería de Sistemas" },
    { id: 5, image: "#", name: "María", caption: "Estudiante Ingeniería de Sistemas" },
    { id: 6, image: "#", name: "Laura", caption: "Estudiante Ingeniería de Sistemas" },
  ];

  return (
    <section id="monitors" className="relative bg-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 pt-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-[#00814b] to-green-600 bg-clip-text text-transparent mb-10">
        {t("monitors.title", "Monitores de Laboratorio")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {monitors.map((monitor) => (
          <div key={monitor.id} className="relative group perspective w-full h-64">
            <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 backface-hidden">
                <img src={monitor.image} alt={monitor.name} className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-3 left-3 bg-gradient-to-r from-[#00814b] to-green-600 text-white text-sm font-bold px-3 py-1 rounded-md">
                  {monitor.name}
                </div>
              </div>

              <div className="absolute inset-0 bg-[#00814b] text-white flex items-center justify-center text-center px-4 rounded-xl backface-hidden rotate-y-180">
                <p className="text-lg font-semibold">{monitor.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .perspective { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}
