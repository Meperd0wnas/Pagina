import React from "react";

const labs = [
  { id: "plataformas", name: "Plataformas", desc: "Laboratorios de sistemas y redes." },
  { id: "practica-libre", name: "Práctica Libre", desc: "Espacio abierto para todos los estudiantes." },
  { id: "ingenieria-software", name: "Ingeniería de Software", desc: "Ambiente de desarrollo y proyectos." },
];

export default function LabSection() {
  return (
    <section id="labs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-12">
          Nuestros Laboratorios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <article
              key={lab.id}
              className="bg-white shadow rounded-xl p-6 border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{lab.name}</h3>
              <p className="text-gray-600 mb-4">{lab.desc}</p>
              <a
                href={`/laboratorios/${lab.id}`}
                className="inline-block mt-2 text-sm font-semibold text-green-600 hover:underline"
              >
                Ver detalles →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
