import React from "react";

const features = [
  { icon: "🖥️", title: "Software", desc: "Laboratorio con herramientas de desarrollo" },
  { icon: "🌐", title: "Redes", desc: "Configuración y monitoreo de redes" },
  { icon: "📱", title: "Móviles", desc: "Desarrollo y pruebas multiplataforma" },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map((f, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
