import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MultimediaPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("labs.multimedia")} - Escuela Colombiana de Ingeniería Julio Garavito`;
  }, [t]);

  return (
    <motion.section
      className="relative min-h-screen pt-28 px-6 md:px-16 lg:px-24 bg-white text-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Título */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-6 tracking-tight"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t("labs.multimedia")}
      </motion.h1>

      {/* Descripción */}
      <motion.p
        className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {t("descriptions.multimedia_description")}
      </motion.p>

      {/* Imagen centrada */}
      <motion.div
        className="flex justify-center mb-16 translate-x-9"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <img
          src="/images/labs/multimedia.jpg"
          alt={t("labs.multimedia")}
          className="w-full max-w-6xl h-auto object-cover shadow-lg"
        />
      </motion.div>

      {/* Columna de información */}
      <motion.div
        className="absolute top-1/2 right-70 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-8 shadow-lg w-80 text-lg leading-relaxed space-y-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div>
          <p className="font-semibold text-green-700 uppercase text-xl">
            {t("labels.location")}:
          </p>
          <p>{t("descriptions.multimedia_location")}</p>
        </div>

        <div>
          <p className="font-semibold text-green-700 uppercase text-xl">
            {t("labels.phone")}:
          </p>
          <p>{t("descriptions.multimedia_phone")}</p>
        </div>

        <div>
          <p className="font-semibold text-green-700 uppercase text-xl">
            {t("labels.schedule")}:
          </p>
          <p>{t("descriptions.multimedia_schedule1")}</p>
          <p>{t("descriptions.multimedia_schedule2")}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
