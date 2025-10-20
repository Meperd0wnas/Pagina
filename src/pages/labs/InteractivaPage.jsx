import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function InteractivaPage() {
  useEffect(() => {
    document.title =
      "Aula Interactiva - Escuela Colombiana de Ingeniería Julio Garavito";
  }, []);

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
        Aula Interactiva
      </motion.h1>

      {/* Descripción */}
      <motion.p
        className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Esta aula busca favorecer la aplicación de nuevas metodologías de
        enseñanza/aprendizaje centradas en el estudiante. Además, ofrece a
        estudiantes y profesores del Programa un espacio especializado para
        trabajos en grupo y para desarrollo de proyectos de ingeniería.
      </motion.p>

      {/* Imagen centrada */}
      <motion.div
        className="flex justify-center mb-16  ml-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <img
          src="/images/labs/interactiva.jpg"
          alt="Aula Interactiva"
          className="w-full max-w-6xl h-auto object-cover shadow-lg"
        />
      </motion.div>

      {/* Columna de información a la derecha (más cerca y sin bordes redondeados) */}
      <motion.div
        className="absolute top-1/2 right-74 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-8 shadow-lg w-80 text-lg leading-relaxed space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div>
          <p className="font-semibold text-green-700 uppercase text-xl">Ubicación:</p>
          <p>Bloque C segundo piso, salón C1-204.</p>
        </div>

        <div>
          <p className="font-semibold text-green-700 uppercase text-xl">Teléfono:</p>
          <p>+57 (1) 6683600</p>
        </div>

        <div>
          <p className="font-semibold text-green-700 uppercase text-xl">Horario:</p>
          <p>Lunes a viernes 7:00 am a 7:00 pm (jornada continua)</p>
          <p>Sábados 7:00 am a 1:00 pm</p>
        </div>
      </motion.div>
    </motion.section>
  );
}

